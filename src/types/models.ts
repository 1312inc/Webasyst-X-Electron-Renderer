/* eslint-disable camelcase */
export interface Installation {
  cloud_data?: any;
  cloud_plan_id?: string;
  cloud_trial?: boolean;
  cloud_expire_date?: string;
  name: string;
  domain: string;
  id: number;
  url: string;
  accessToken: string;
}

export interface InstallationInfo {
  logo: any;
  name: string;
}
