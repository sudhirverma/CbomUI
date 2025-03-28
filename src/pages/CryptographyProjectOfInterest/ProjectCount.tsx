/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { fShortenNumber } from "../../utils/formatNumber";

export default function ProjectCount({
  title,
  total,
  icon,
  sx,
  ...other
}: any) {
  return (
    <Card
      component={ Stack }
      spacing={ 3 }
      direction="row"
      pl={ 1 }
      sx={ {
        borderRadius: 2,
        ...sx
      } }
      { ...other }
    >
      <Grid container spacing={ 1 }>
        <Grid item xs={ 5 } sm={ 5 }>
          { icon && <Box>{ icon }</Box> }
        </Grid>
        <Grid item xs={ 5 } sm={ 7 }>
          <Typography
            style={ {
              color: "black",
              fontSize: "80px",
              position: "absolute",
              top: "45px"
            } }
            variant="h1"
          >
            { fShortenNumber(total) }
          </Typography>
          <Typography
            variant="h6"
            sx={ {
              color: "black",
              fontSize: "20px",
              position: "absolute",
              top: "130px"
            } }
          >
            { title }
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
ProjectCount.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number
};
