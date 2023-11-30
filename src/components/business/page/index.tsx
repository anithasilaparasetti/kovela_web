import type { MyAsideProps } from '../aside';
import type { MyRadioCardssOption } from '../radio-cards';
import type { MyTabsOption } from '../tabs';
import type { MyResponse } from '@/api/request';
import type { PageData } from '@/interface';

import { css } from '@emotion/react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import MyTable from '@/components/core/table';
import { downloadReport } from '@/stores/utils';
import { useStates } from '@/utils/use-states';

import MyAside from '../aside';
import MyRadioCards from '../radio-cards';
import MySearch from '../search';
import MyTabs from '../tabs';

interface SearchApi {
  (params?: any): MyResponse<PageData<any>>;
}

type ParseDataType<S> = S extends (params?: any) => MyResponse<PageData<infer T>> ? T : S;

export interface PageProps<S> {
  searchRender?: React.ReactNode;
  customSearchRender?: React.ReactNode;
  exportData?: any;
  setExportData?: any;
  pageApi?: S;
  displayColumns: any;
  modifyData?: S;
  editModal?: any;
  deleteModal?: any;
  onCreate?: any;
  dontShowReport?: any;
  createModal?: any;
  pageParams?: object;
  tableOptions?: MyPageTableOptions<ParseDataType<S>>;
  tableRender?: (data: MyPageTableOptions<ParseDataType<S>>[]) => React.ReactNode;
  asideData?: MyAsideProps['options'];
  asideKey?: string;
  asideValue?: string | number;
  radioCardsData?: MyRadioCardssOption[];
  radioCardsValue?: string | number;
  asideTreeItemRender?: MyAsideProps['titleRender'];
  tabsData?: MyTabsOption[];
  tabsValue?: string | number;
}

export interface RefPageProps {
  setAsideCheckedKey: (key?: string) => void;
  load: (data?: object) => Promise<void>;
}

const BasePage = <S extends SearchApi>(props: PageProps<S>, ref: React.Ref<RefPageProps>) => {
  const {
    pageApi,
    displayColumns,
    modifyData,
    editModal,
    deleteModal,
    onCreate,
    dontShowReport,
    createModal,
    pageParams,
    searchRender,
    customSearchRender,
    exportData,
    setExportData,
    tableOptions,
    tableRender,
    asideKey,
    asideData,
    asideValue,
    asideTreeItemRender,
    radioCardsData,
    radioCardsValue,
    tabsData,
    tabsValue,
  } = props;
  const [pageData, setPageData] = useStates<PageData<any>>({
    pageSize: 20,
    pageNum: 1,
    total: 0,
    data: [],
  });

  const [defaultData, setDefaultData] = useState([]);

  const [asideCheckedKey, setAsideCheckedKey] = useState(asideValue);
  const [rowId, setRowId] = useState('');
  const [rowIndex, setRowIndex] = useState('');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (asideData) {
      setAsideCheckedKey(asideData[0].key);
    }
  }, [asideData]);

  const getPageData = useCallback(
    async (params: Record<string, any> = {}) => {
      if (asideKey && !asideCheckedKey) return;

      if (pageApi) {
        const obj = {
          ...params,
          ...pageParams,
          pageSize: pageData.pageSize,
          pageNum: pageData.pageNum,
          [asideKey!]: asideCheckedKey,
        };

        const res = await pageApi(obj);

        if (res) {
          modifyData && modifyData(res.data);

          if (searchString != '' && searchString) {
            // filter response by search string
            const filterData: any = res.data.filter((data: any) => {
              let found = false;

              for (const key of displayColumns) {
                if (data[key]) {
                  if (typeof data[key] === 'string') {
                    const value = data[key].toLowerCase();

                    if (value.includes(searchString.toLowerCase().trim())) {
                      found = true;
                    }
                  }

                  if (typeof data[key] === 'number') {
                    const value = data[key].toString().toLowerCase();

                    if (value.includes(searchString.toLowerCase().trim())) {
                      found = true;
                    }
                  }
                }
              }

              return found;
            });

            setPageData({ total: filterData.length, data: filterData });
          } else {
            setPageData({ total: res.data.length, data: res.data });
          }

          setDefaultData(res.data);
        }
      }
    },
    [pageApi, pageParams, pageData.pageSize, pageData.pageNum, asideKey, asideCheckedKey],
  );

  const filterPageData = async (searchParams: any, params: Record<string, any> = {}) => {
    const { search } = searchParams;

    if (search === '') {
      // getPageData();
      if (pageApi) {
        const obj = {
          ...params,
          ...pageParams,
          pageSize: pageData.pageSize,
          pageNum: pageData.pageNum,
          [asideKey!]: asideCheckedKey,
        };

        const res = await pageApi(obj);

        modifyData && modifyData(res.data);

        setPageData({ total: res.data.length, data: res.data });
      }
    } else {
      const filterData: any = defaultData.filter(data => {
        let found = false;

        for (const key of displayColumns) {
          if (data[key]) {
            if (typeof data[key] === 'string') {
              const value = data[key].toLowerCase();

              console.log('nr1', value, searchString);

              if (value.includes(search.toLowerCase().trim())) {
                found = true;
              }
            }

            if (typeof data[key] === 'number') {
              const value = data[key].toString();

              console.log('nr2', value, searchString);

              if (value.includes(searchString.trim())) {
                found = true;
              }
            }
          }
        }

        return found;
      });

      setPageData({ total: filterData.length, data: filterData });
    }
  };

  useEffect(() => {
    getPageData();
  }, [getPageData]);

  const onSearch = (searchParams: Record<string, any>) => {
    // getPageData();
    filterPageData(searchParams);
  };

  const onSelectAsideTree: MyAsideProps['onSelect'] = ([key]) => {
    setAsideCheckedKey(key);
  };

  const onPageChange = (pageNum: number, pageSize?: number) => {
    setPageData({ pageNum });

    if (pageSize) {
      setPageData({ pageSize });
    }
  };

  useImperativeHandle(ref, () => ({
    setAsideCheckedKey,
    load: (data?: object) => getPageData(data),
  }));

  const getRecord = (rowId: any) => {
    const [data] = pageData.data.filter((item: any) => {
      return item[Object.keys(item)[0]] == rowId;
    });

    return data;
  };

  return (
    <div css={styles}>
      <ToastContainer />
      {editModal && editModal(rowId, getRecord(rowId))}
      {deleteModal && deleteModal(getRecord(rowId))}
      {createModal && createModal()}
      {tabsData && <MyTabs className="tabs" options={tabsData} defaultValue={tabsData[0].value || tabsValue} />}
      <div className="tabs-main">
        {asideData && (
          <MyAside
            options={asideData}
            selectedKeys={asideCheckedKey ? [asideCheckedKey] : undefined}
            titleRender={asideTreeItemRender}
            onSelect={onSelectAsideTree}
          />
        )}
        <div className="aside-main">
          {searchRender && (
            <MySearch
              className="search"
              searchString={searchString}
              onChange={e => setSearchString(e.target.value)}
              onSearch={onSearch}
              onCreate={onCreate}
              dontShowReport={dontShowReport}
              onReport={() => downloadReport(defaultData)}
            >
              {searchRender}
            </MySearch>
          )}
          {customSearchRender && <>{customSearchRender}</>}
          {exportData && downloadReport(pageData.data, setExportData)}

          {radioCardsData && (
            <MyRadioCards options={radioCardsData} defaultValue={radioCardsValue || radioCardsData[0].value} />
          )}
          {tableOptions && (
            <div className="table">
              <MyTable
                height="100%"
                dataSource={pageData.data}
                columns={tableOptions}
                setRowId={setRowId}
                setRowIndex={setRowIndex}
                // onChange={handleTableChange}
                pagination={{
                  current: pageData.pageNum,
                  pageSize: pageData.pageSize,
                  total: pageData.total,
                  onChange: onPageChange,
                }}
              >
                {tableRender?.(pageData.data)}
              </MyTable>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BasePageRef = forwardRef(BasePage) as <S extends SearchApi>(
  props: PageProps<S> & { ref?: React.Ref<RefPageProps> },
) => React.ReactElement;

type BasePageType = typeof BasePageRef;

interface MyPageType extends BasePageType {
  MySearch: typeof MySearch;
  MyTable: typeof MyTable;
  MyAside: typeof MyAside;
}

const MyPage = BasePageRef as MyPageType;

MyPage.MySearch = MySearch;
MyPage.MyTable = MyTable;
MyPage.MyAside = MyAside;

export default MyPage;

const styles = css`
  display: flex;
  flex-direction: column;
  .tabs-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .search {
    margin-bottom: 10px;
    font-size: 13px;
  }

  .aside-main {
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;
    @media screen and (max-height: 800px) {
      overflow: auto;
    }
  }

  .table {
    flex: 1;
    overflow: hidden;
    @media screen and (max-height: 800px) {
      overflow: auto;
      min-height: 500px;
    }
  }
`;
