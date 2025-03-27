import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import DefaultCounterCard from "../../../components/DefaultCounterCard";
import { counterCardsData } from "../../../utils/counterCardConfig";

const Counters: React.FC = () => {
  return (
    <Box component="section" py={ 3 }>
      <Grid container spacing={ 2 }>
        { counterCardsData.map((card) => (
          <Grid item xs={ 12 } md={ 3 } key={ card.count }>
            <DefaultCounterCard
              count={ card.count }
              title={ card.title }
              description={ card.description }
            />
          </Grid>
        )) }
      </Grid>
    </Box>
  );
};

export default Counters;
