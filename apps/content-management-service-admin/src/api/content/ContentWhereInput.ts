import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContentWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
