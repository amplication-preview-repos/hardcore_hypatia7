import { Authentication as TAuthentication } from "../api/authentication/Authentication";

export const AUTHENTICATION_TITLE_FIELD = "token";

export const AuthenticationTitle = (record: TAuthentication): string => {
  return record.token?.toString() || String(record.id);
};
