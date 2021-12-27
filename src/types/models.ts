export interface Installation {
    // eslint-disable-next-line camelcase
    cloud_data?: any;
    // eslint-disable-next-line camelcase
    cloud_plan_id?: string;
    // eslint-disable-next-line camelcase
    cloud_trial?: boolean;
    // eslint-disable-next-line camelcase
    cloud_expire_date?: string;
    domain: string;
    id: number;
    url: string;
    accessToken?: string;
  }
