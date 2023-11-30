import type { MyPageTableOptions } from '@/components/business/page';
import type { UserState } from '@/interface/user/user';
import type { FC } from 'react';

import { Input, Modal, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import DeleteButton from '@/components/basic/deleteButton';
import EditButton from '@/components/basic/editbutton';
import MyPage from '@/components/business/page';
import { base_url } from '@/stores/utils';

const { Item: SearchItem } = MyPage.MySearch;

const Profile: FC = () => {
  const tableColums: MyPageTableOptions<UserState> = [
    {
      title: 'Profile Id',
      dataIndex: 'id',
      key: 'id',
      //   sorter: (a: any, b: any) => a.id - b.id,
      //   sortDirections: ['ascend', 'descend', 'ascend'],
      //   defaultSortOrder: 'ascend',
    },
    {
      title: 'Profile Name',
      dataIndex: 'name',
      key: 'name',
      //   sorter: (a: any, b: any) => a.role.localeCompare(b.role),
      //   sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Profile Code',
      dataIndex: 'code',
      key: 'code',
      //   sorter: (a: any, b: any) => a.code.localeCompare(b.code),
      //   sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      //   sorter: (a: any, b: any) => a.description.localeCompare(b.description),
      //   sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: () => (
        <>
          <EditButton onClick={showEditModal} /> &nbsp;
          <DeleteButton onClick={showDeleteModal} />
        </>
      ),
    },
  ];

  const dataObject = {
    id: '',
    name: '',
    code: '',
    description: '',
  };

  const displayColumns: any = ['role'];

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const deleteModal: React.FC = (data: any) => {
    const handleCancel = () => {
      setIsDeleteModalOpen(false);
    };

    const handleOk = async (data: any) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };

      const response = await fetch(`${base_url}/api/role/delete`, requestOptions);
      const responseData = await response.json();

      if (responseData?.success) {
        setIsDeleteModalOpen(false);
      } else {
        toast.error(responseData.message);
      }
    };

    return (
      <>
        <Modal
          title="Are you sure you want to delete?"
          centered
          open={isDeleteModalOpen}
          onOk={() => handleOk(data)}
          onCancel={handleCancel}
        ></Modal>
      </>
    );
  };

  const editModal: React.FC = (id: any, data: any) => {
    const [role, setRole] = useState('');

    useEffect(() => {
      setRole(data?.role);
    }, [data]);

    const handleOk = async (data: any) => {
      const payload = data;

      payload.role = role;

      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };

      const response = await fetch(`${base_url}/api/role/edit`, requestOptions);
      const responseData = await response.json();

      if (responseData?.success) {
        setIsEditModalOpen(false);
      } else {
        toast.error(responseData?.message);
      }
    };

    const handleCancel = () => {
      setIsEditModalOpen(false);
    };

    return (
      <>
        <Modal title="Edit Role" centered open={isEditModalOpen} onOk={() => handleOk(data)} onCancel={handleCancel}>
          <p>Role</p>
          <Input value={role} onChange={(e: any) => setRole(e.target.value)} />
        </Modal>
      </>
    );
  };

  const createModal: React.FC = () => {
    const [profile, setProfile] = useState(dataObject);

    const handleOk = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      };

      const response = await fetch(`${base_url}/api/role/create`, requestOptions);
      const responseData = await response.json();

      if (responseData?.success) {
        setIsCreateModalOpen(false);
        setProfile(dataObject);
      } else {
        toast.error(responseData?.message);
      }
    };

    const handleCancel = () => {
      setIsCreateModalOpen(false);
    };

    const handleChange = (e: any) => {
      const value = e.target.value;

      setProfile({ ...profile, [e.target.name]: value });
    };

    return (
      <>
        <Modal title="Create Profile" centered open={isCreateModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Profile Name</p>
          <Input name="name" value={profile.name} onChange={handleChange} />
          <p>Description</p>
          <Input name="description" value={profile.description} onChange={handleChange} />
          <p></p>
          <p></p>
          <Switch />
          &nbsp;Services
          <p></p>
          <Switch />
          &nbsp;Reels
          <p></p>
          <Switch />
          &nbsp;Events
          <p></p>
          <Switch />
          &nbsp;Donations
          <p></p>
          <Switch />
          &nbsp;E-Commerce
        </Modal>
      </>
    );
  };

  const onCreate = () => {
    showCreateModal();
  };

  const getRoleList = async () => {
    const response = await fetch(`${base_url}/api/role`);
    const data = await response.json();

    return data;
  };

  const modifyData = (data: any) => {
    console.log('h', data);

    return data.map((item: any) => {
      // if (item.status === 'Y') {
      //   item.status = 'Active';
      // } else {
      //   item.status = 'Inactive';
      // }
    });
  };

  return (
    <MyPage
      pageApi={getRoleList}
      displayColumns={displayColumns}
      modifyData={modifyData}
      searchRender={
        <>
          <SearchItem label="Search" name="search" type="input" style={{ width: '250px' }} />
        </>
      }
      tableOptions={tableColums}
      editModal={editModal}
      deleteModal={deleteModal}
      onCreate={onCreate}
      createModal={createModal}
    ></MyPage>
  );
};

export default Profile;
