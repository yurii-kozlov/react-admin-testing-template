import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import { CustomUrlField } from "fields/CustomUrlField";

export const UsersList = () => {
  const isOnSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List>
      {isOnSmallScreen ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <CustomUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};
