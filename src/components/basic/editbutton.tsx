import { Space, Tooltip } from 'antd';
import MyButton from '@/components/basic/button';
import { EditOutlined } from '@ant-design/icons';

const EditButton = ({ onClick }) => {
  return (
    <Space size="middle">
      <Tooltip placement="top" title={'Edit'}>
        <MyButton size="small" style={{ fontSize: '12px' }} type="primary" onClick={onClick}>
          <EditOutlined />
        </MyButton>
      </Tooltip>
    </Space>
  );
};

export default EditButton;
