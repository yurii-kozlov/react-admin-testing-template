import { FC } from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

type CustomUrlFieldProps = {
  source: string;
}

export const CustomUrlField: FC<CustomUrlFieldProps> = ({ source }) => {
  const record = useRecordContext();

  if (!record) {
    return null;
  }

  return (
    <Link href={record[source]} sx={{ textDecoration: 'none'}}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  )
};
