import { FC, useState, useEffect } from 'react';
import './index.less';
import MyTabs, { MyTabsOption } from '@/components/business/tabs';
import { Space, Tag } from 'antd';
import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

const options: MyTabsOption[] = [
  {
    label: 'Pending',
    value: 1,
  },
  {
    label: 'Rejected',
    value: 2,
  },
  {
    label: 'JV Pending',
    value: 3,
  },
];

interface ColumnType {
  key: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: ColumnType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    firstName: 'Joe' + index,
    lastName: 'Black' + index,
    age: 32 + index,
    address: 'Sidney No. 1 Lake Park' + index,
    tags: ['cool', 'teacher'],
  });
});

const DashBoardPage: FC = () => {
  const [loading, setLoading] = useState(true);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined as any);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <MyTabs options={options} />

      <div className="aaa">
        <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} height="100%">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column<ColumnType>
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
              <>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record: any) => (
              <Space size="middle">
                <MyButton type="text">Invite {record.lastName}</MyButton>
                <MyButton type="text">Delete</MyButton>
              </Space>
            )}
          />
        </MyTable>
      </div>
    </div>
  );
};

export default DashBoardPage;
