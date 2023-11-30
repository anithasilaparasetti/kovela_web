export type Locale = 'zh_CN' | 'en_US';

export interface UserState {
  username: string;
  userId: string;
  email: string;
  mobile_no: string;
  role: string;
  active: boolean;
}
