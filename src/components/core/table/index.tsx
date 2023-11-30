import TableColumn from '../table-column';
import { Table, TableProps } from 'antd';
import { css } from '@emotion/react';

interface MyTableProps<T extends object> extends TableProps<T> {
  height?: string;
  setRowId?: any;
  setRowIndex?: any;
}

const MyTable = <T extends object = object>(props: MyTableProps<T>) => {
  const { height, setRowId, setRowIndex, pagination, ...rest } = props;

  const defaultPagination = {
    size: 'default',
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100', '200'],
    defaultPageSize: 20,
  };

  const combinedPagination = typeof pagination === 'object' ? { ...defaultPagination, ...pagination } : {};

  return (
    <div style={{ height }} css={styles}>
      <Table<T>
        rowClassName={(record, index) => (index % 2 === 0 ? 'table-row-light' : 'table-row-dark')}
        {...rest}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              // get value of id which is the first key of the object
              setRowId(record[Object.keys(record)[0]]);
              setRowIndex(rowIndex);
            }, // click row
          };
        }}
        // TODO -- check whether the screen size is mobile or desktop and adjust scroll.x percentage
        scroll={{ x: '100%', y: '100%' }}
        pagination={combinedPagination}
      />
    </div>
  );
};

MyTable.defaultProps = {
  size: 'small',
  height: 'auto',
} as MyTableProps<any>;

MyTable.Column = TableColumn;
MyTable.ColumnGroup = Table.ColumnGroup;

export default MyTable;

const styles = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .table-row-light {
    background-color: #ffffff;
  }
  .table-row-dark {
    background-color: #f4f4f4;
  }

  .ant-table-layout-fixed table {
    table-layout: auto;
  }

  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-spin-container,
  .ant-table-container {
    height: 100%;
    max-width: 100%;
    min-width: 800px;
  }
  .ant-spin-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .ant-table {
      flex: 1;
      overflow: hidden;
      border-bottom: 1px solid #eee;

      .ant-table-container {
        display: flex;
        flex-direction: column;
        font-size: 13px;
        .ant-table-body {
          flex: 1;
        }
      }
    }

    .ant-pagination {
      padding: 0 10px;
    }
  }
`;
