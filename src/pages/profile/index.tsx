import type { MyPageTableOptions } from '@/components/business/page';
import type { UserState } from '@/interface/user/user';
import type { FC } from 'react';

import { Input, Modal, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import DeleteButton from '@/components/basic/deleteButton';
import EditButton from '@/components/basic/editbutton';
import MyPage from '@/components/business/page';
import { base_url, token } from '@/stores/utils';

const { Item: SearchItem } = MyPage.MySearch;

const Profile: FC = () => {
  const tableColums: MyPageTableOptions<UserState> = [
    {
      title: 'Profile Id',
      dataIndex: 'id',
      key: 'id',
      // sorter: (a: any, b: any) => a.id - b.id,
      // sortDirections: ['ascend', 'descend', 'ascend'],
      // defaultSortOrder: 'ascend',
    },
    {
      title: 'Profile Name',
      dataIndex: 'name',
      key: 'name',
      // sorter: (a: any, b: any) => a.role.localeCompare(b.role),
      // sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Profile Code',
      dataIndex: 'code',
      key: 'code',
      // sorter: (a: any, b: any) => a.code.localeCompare(b.code),
      // sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Description',
      dataIndex: 'desciption',
      key: 'desciption',
      // sorter: (a: any, b: any) => a.desciption.localeCompare(b.desciption),
      // sortDirections: ['ascend', 'descend', 'ascend'],
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
    name: '',
    code: '',
    desciption: '',
    approved: false,
    creationTime: '2023-06-14T13:53:33.000+00:00',
    seasonal: false,
    logo: '',
    popular: false,
    servicesEnabled: false,
    donationsEnabled: false,
    ecommerceEnabled: false,
    reelsEnabled: false,
    eventsEnabled: false,
  };

  const displayColumns: any = ['name', 'desciption', 'code'];

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
        headers: new Headers({
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(data),
      };

      const response = await fetch(`${base_url}/jtprofile/delete/profile?profileId=${data?.id}`, requestOptions);
      const responseData = await response.json();

      if (response.status === 200) {
        setIsDeleteModalOpen(false);
      } else {
        alert(responseData.message);
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
    const [profile, setProfile] = useState(dataObject);

    useEffect(() => {
      data && setProfile(data);
    }, [data]);

    const handleOk = async () => {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      };

      const response = await fetch(`${base_url}/api/role/edit`, requestOptions);
      const responseData = await response.json();

      if (responseData?.success) {
        setIsEditModalOpen(false);
      } else {
        toast.error(responseData?.message);
      }
    };

    const handleChange = (e: any) => {
      const value = e.target.value;

      setProfile({ ...profile, [e.target.name]: value });
    };

    const handleCancel = () => {
      setIsEditModalOpen(false);
    };

    return (
      <>
        <Modal title="Edit Role" centered open={isEditModalOpen} onOk={() => handleOk()} onCancel={handleCancel}>
          <p>Profile Name</p>
          <Input name="name" value={profile.name} onChange={handleChange} />
          <p>Description</p>
          <Input name="desciption" value={profile.desciption} onChange={handleChange} />
          <p></p>
          <p></p>
          <Switch
            checked={profile.servicesEnabled}
            onChange={() => setProfile({ ...profile, servicesEnabled: profile.servicesEnabled ? false : true })}
          />
          &nbsp;Services
          <p></p>
          <Switch
            checked={profile.reelsEnabled}
            onChange={() => setProfile({ ...profile, reelsEnabled: profile.reelsEnabled ? false : true })}
          />
          &nbsp;Reels
          <p></p>
          <Switch
            checked={profile.eventsEnabled}
            onChange={() => setProfile({ ...profile, eventsEnabled: profile.eventsEnabled ? false : true })}
          />
          &nbsp;Events
          <p></p>
          <Switch
            checked={profile.donationsEnabled}
            onChange={() => setProfile({ ...profile, donationsEnabled: profile.donationsEnabled ? false : true })}
          />
          &nbsp;Donations
          <p></p>
          <Switch
            checked={profile.ecommerceEnabled}
            onChange={() => setProfile({ ...profile, ecommerceEnabled: profile.ecommerceEnabled ? false : true })}
          />
          &nbsp;E-Commerce
        </Modal>
      </>
    );
  };

  const createModal: React.FC = () => {
    const [profile, setProfile] = useState(dataObject);

    const handleOk = async () => {
      const requestOptions = {
        method: 'POST',
        headers: new Headers({
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(profile),
      };

      const response = await fetch(`${base_url}/jtprofile/create`, requestOptions);
      const responseData = await response.json();

      if (response.status === 200) {
        setIsCreateModalOpen(false);
        setProfile(dataObject);
      } else {
        alert(responseData?.message);
      }
    };

    const handleCancel = () => {
      setIsCreateModalOpen(false);
    };

    const handleChange = (e: any) => {
      const value = e.target.value;

      setProfile({ ...profile, [e.target.name]: value });
    };

    console.log('nai-rena', profile);

    return (
      <>
        <Modal title="Create Profile" centered open={isCreateModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Profile Name</p>
          <Input name="name" value={profile.name} onChange={handleChange} />
          <p>Description</p>
          <Input name="desciption" value={profile.desciption} onChange={handleChange} />
          <p></p>
          <p></p>
          <Switch
            checked={profile.servicesEnabled}
            onChange={() => setProfile({ ...profile, servicesEnabled: profile.servicesEnabled ? false : true })}
          />
          &nbsp;Services
          <p></p>
          <Switch
            checked={profile.reelsEnabled}
            onChange={() => setProfile({ ...profile, reelsEnabled: profile.reelsEnabled ? false : true })}
          />
          &nbsp;Reels
          <p></p>
          <Switch
            checked={profile.eventsEnabled}
            onChange={() => setProfile({ ...profile, eventsEnabled: profile.eventsEnabled ? false : true })}
          />
          &nbsp;Events
          <p></p>
          <Switch
            checked={profile.donationsEnabled}
            onChange={() => setProfile({ ...profile, donationsEnabled: profile.donationsEnabled ? false : true })}
          />
          &nbsp;Donations
          <p></p>
          <Switch
            checked={profile.ecommerceEnabled}
            onChange={() => setProfile({ ...profile, ecommerceEnabled: profile.ecommerceEnabled ? false : true })}
          />
          &nbsp;E-Commerce
        </Modal>
      </>
    );
  };

  const onCreate = () => {
    showCreateModal();
  };

  const getPageData = async () => {
    const response = await fetch(`${base_url}/jtprofile/list?page=0&pageSize=1000`, {
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    });
    const data = await response.json();

    console.log('nk', data);

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
      pageApi={getPageData}
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
