import { Typography } from "@mui/material";
import Link from "next/link";

function Copyright(props: any) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {"Copyright © "}
      <Link color='inherit' href='https://google.com'>
        Bebodh Crawler
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
