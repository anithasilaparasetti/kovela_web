import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  // {
  //   code: 'dashboard',
  //   label: {
  //     zh_CN: '首页',
  //     en_US: 'Dashboard',
  //   },
  //   icon: 'dashboard',
  //   path: '/dashboard',
  // },
  {
    code: 'profile',
    label: {
      zh_CN: '首页',
      en_US: 'Temple Profile',
    },
    icon: 'profile',
    path: '/profile',
  },
  {
    code: 'customer',
    label: {
      zh_CN: '首页',
      en_US: 'Customer',
    },
    icon: 'customer',
    path: '/customer',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
