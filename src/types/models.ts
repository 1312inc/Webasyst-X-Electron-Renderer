/* eslint-disable camelcase */
export interface Installation {
  cloud_data?: any;
  cloud_plan_id?: string;
  cloud_trial?: boolean;
  cloud_expire_date?: string;
  name: string;
  domain: string;
  id: string;
  url: string;
  accessToken: string;
  last_use_datetime?: number;
  logo: any;
}
