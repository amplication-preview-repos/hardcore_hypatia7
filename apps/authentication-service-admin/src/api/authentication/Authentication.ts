export type Authentication = {
  createdAt: Date;
  id: string;
  token: string | null;
  updatedAt: Date;
  validUntil: Date | null;
};
