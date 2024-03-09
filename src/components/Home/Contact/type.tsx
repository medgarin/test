import { Box, Typography } from "@material-ui/core";
import React from "react";
import { alterFormat } from "../../../util";
import { IContactType } from "./const";

export const ContactType: React.FC<IContactType> = ({ Icon, text, leyend }) => (
  <Box display='flex' alignItems='center' marginBottom={2.5}>
    <Icon color='primary' fontSize='large' />
    <Box style={{ flex: "1 1" }} marginLeft={2}>
      <Typography color='textSecondary'>{alterFormat(leyend)}</Typography>
      <Typography variant='h5' style={{ fontWeight: "bold" }}>
        {text}
      </Typography>
    </Box>
  </Box>
);
