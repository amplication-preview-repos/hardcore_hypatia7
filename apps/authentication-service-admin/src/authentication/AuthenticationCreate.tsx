import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuthenticationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="token" source="token" />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Create>
  );
};
