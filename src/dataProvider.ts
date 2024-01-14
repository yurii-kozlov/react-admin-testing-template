import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  process.env.REACT_APP_JSOR_SERVER_URL
);