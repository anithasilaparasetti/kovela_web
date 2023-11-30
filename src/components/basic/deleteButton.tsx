import { Space, Tooltip } from 'antd';
import MyButton from '@/components/basic/button';
import { DeleteOutlined } from '@ant-design/icons';

const DeleteButton = ({ onClick }) => {
  return (
    <Space size="middle">
      <Tooltip placement="top" title={'Delete'}>
        <MyButton size="small" style={{ fontSize: '12px' }} type="primary" onClick={onClick}>
          <DeleteOutlined />
        </MyButton>
      </Tooltip>
    </Space>
  );
};

export default DeleteButton;
