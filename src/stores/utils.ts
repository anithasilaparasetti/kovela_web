import type { AppStore } from '@/stores';
import type { Dispatch } from '@reduxjs/toolkit';

import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';

type ThunkAction<T = any> = (dispatch: Dispatch, state: AppStore['getState']) => Promise<T>;

export const createAsyncAction = <T = any, R = any>(cb: (arg: T) => ThunkAction<R>) => {
  return cb;
};

export const base_url = 'http://20.235.89.214:9096';
export const auth_url = 'http://20.235.89.214:9092';

export const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XG4gIFwiaWRcIiA6IDIsXG4gIFwidXNlcm5hbWVcIiA6IFwicGVlbGFoYXJpc2gwM1wiLFxuICBcImVtYWlsXCIgOiBcImhhcmlzaHBlMDNAanV2YXJ5YS5jb21cIixcbiAgXCJmaXJzdE5hbWVcIiA6IFwiaGFyaXNoXCIsXG4gIFwibGFzdE5hbWVcIiA6IFwicGVlbGFcIixcbiAgXCJyb2xlc1wiIDogWyBcIlJPTEVfVVNFUlwiLCBcIlJPTEVfQURNSU5cIiBdXG59Iiwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpYXQiOjE2OTE1NjA0MzYsImV4cCI6MTY5MTY0NjgzNn0.ziMqtNww78QdOi2DesuLThcAkZXtqDfaTvebqCt8yfk-KxpkUSvcZesUOrXxMoJKU_vc02kO95x7cguXPP_IeQ';

export const handleSetCookie = (key: string, value: string) => {
  // Set a cookie with name 'myCookie' and value 'myCookieValue'
  Cookies.set(key, value, { expires: 7 }); // Cookie will expire after 7 days
};

export const handleGetCookie = (key: string) => {
  // Get the value of the cookie named 'myCookie'
  const myCookieValue = Cookies.get(key);

  return myCookieValue;
};

export function reformatDate(dateStr: any) {
  const dArr = dateStr.split('-'); // ex input: "2010-01-18"

  return dArr[2] + '/' + dArr[1] + '/' + dArr[0].substring(2); //ex output: "18/01/10"
}

export function numberDisplay(num: any) {
  return num == 0 ? '' : num;
}

// TODO: add name, date
export const downloadReport = (data: any, setExportData: any) => {
  if (data.length > 0) {
    // create file in browser
    const json = data;

    console.log(json);

    const worksheet = XLSX.utils.json_to_sheet(json);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'report.xlsx');

    if (setExportData) {
      setExportData(false);
    }
  } else {
    alert('No data available to be downloaded');
  }
};

export const P2P_SUBMENUS = [
  'P2P',
  'Purchase Requisitions',
  'Approval Memo',
  'Purchase Order',
  'Invoice Against PO',
  'Invoice without PO',
  'Operating Expenses',
  'IPC',
  'Approval Memo Adjustment',
  'TDS Certificate',
  'Pending Purchase Order',
  'Purchase Order for Supplier',
  'Invoice Against PO for Supplier',
  'Supplier Invoice Register',
  'Workflow P2P Log Report',
];

export const ACCOUNT_SUBMENUS = ['Account', 'Payment', 'Imprest A/c', 'Ledger'];

export const TRAVEL_SUBMENUS = [
  'Travel/Expenses',
  'Travel Request',
  'Travel Expense',
  'Reimbursement',
  'Operating Expenses-SI',
];

export const BUDGET_SUBMENUS = [
  'Budget',
  'Budget Adjust',
  'Transfer Budget From To',
  'Upload Budget Adjust',
  'Budget Transactions',
  'Budget Used Transactions',
  'Upload Budget',
  'Sub Category',
  'Copy Budget',
  'Recalculate Used Budget',
  'Export Used Budget-ZOHO',
  'Budget Type',
  'Petty Cash',
  'Budget Deshboard',
  'Monthly Budget-Athaang',
  'RTGS Report',
];

export const USER_MANAGEMENT_SUBMENUS = [
  'User Management',
  'Department',
  'Role',
  'Designation',
  'Users',
  'Role Based Access',
];

export const MASTER_SUBMENUS = [
  'Master',
  'Product Group',
  'Product',
  'Units',
  'Vertical Type',
  'Cost Center Group',
  'Cost Center Sub Group',
  'Supplier Category',
  'Supplier Type',
  'Supplier Master',
  'Account Group',
  'Account Master',
  'Master for Supplier',
];

export const REPORT_SUBMENUS = [
  'Report',
  'Approval Note Workflow',
  'Pending Status',
  'Purchase Order Workflow',
  'Supplier Invoice Workflow',
  'IPC Workflow',
  'Payment Workflow',
  'Operating Expense Workflow',
];

export const CONFIGURATIONS_SUBMENUS = [
  'Configurations',
  'Main Menu',
  'Sub Menu',
  'Document Type',
  'Company Profile',
  'Location',
  'Workflow Config',
  'Workflow Type',
  'Special Terms',
  'SMTP Login Detail',
  'GST Master',
  'States',
  'City',
  'Financial Year',
];

export const HISTORY_SUBMENUS = [
  'Analysis Pending',
  'Unpaid Analysis',
  'Pending Scheduler - Mail',
  'Company wise Analysis-ZOHO',
  'Monthwise Values-ZOHO',
  'Trans.data for Dashboard',
  'Dashboard data populate',
  'Approval History',
  'JV Created',
  'Rejected List',
  'Ledger SI',
  'Data Dump',
  'MSME Unpaid Report',
  'Monthwise Used Budget',
  'Transaction Workflow',
];

export const TENDER_SUBMENUS = ['Tender List', 'Tenders', 'Tender'];

export const greenButtonStyle = { backgroundColor: '#00a65a', borderColor: '#008d4c', color: '#ffffff' };
export const redButtonStyle = { backgroundColor: '#dd4b39', borderColor: '#d73925', color: '#ffffff' };
export const yellowButtonStyle = { backgroundColor: '#ff8c00', borderColor: '#ff8c00', color: '#ffffff' };
export const blueButtonStyle = { backgroundColor: '#FFA001', borderColor: '#FFA001', color: '#ffffff' };
