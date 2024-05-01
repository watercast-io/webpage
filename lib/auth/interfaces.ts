import { User } from '@workos-inc/node';

export interface Session {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface UserInfo {
  user: User;
  organizationId: string;
  sessionId: string;
  isAuthenticated: boolean;
}
export interface NoUserInfo {
  user: null;
  sessionId?: undefined;
  isAuthenticated: false;
}

export interface AccessToken {
  sid: string;
  org_id: string;
}