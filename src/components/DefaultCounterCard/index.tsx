/* eslint-disable @typescript-eslint/no-explicit-any */
// react-countup component
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

function DefaultCounterCard({
  color,
  count,
  title,
  description,
  ...rest
}: any): any {
  return (
    <Box p={ 2 } textAlign="center" lineHeight={ 1 }>
      <Typography variant="h1" color={ color }>
        <CountUp end={ count } duration={ 1 } { ...rest } />
      </Typography>
      { title && (
        <Typography variant="h5" mt={ 2 } mb={ 1 }>
          { title }
        </Typography>
      ) }
      { description && (
        <Typography variant="body2" color="text">
          { description }
        </Typography>
      ) }
    </Box>
  );
}

export default DefaultCounterCard;
