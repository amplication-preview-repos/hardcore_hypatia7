import { SortOrder } from "../../util/SortOrder";

export type AuthenticationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
