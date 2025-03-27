/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import { Link } from 'react-router-dom';

// import MKTypography from "../../components/MKTypography";
// import Button from "../../components/MKButton";
import Counters from "./sections/Counters";
import routes from "../../routes";
import { Box } from "@mui/material";
import DefaultNavbar from "../../components/DefaultNavbar";
// import MKTypography from "../../components/MKTypography";

// Helper function to generate typography style
// const getTypographyStyle = (
//   fontSize: string,
//   lineHeight: string,
//   marginBottom: string | number = 0,
//   marginTop: string | number = 0
// ): React.CSSProperties => ({
//   fontSize,
//   lineHeight,
//   marginBottom,
//   marginTop,
// });

// Props type for StyledTypography
// interface StyledTypographyProps {
//   variant: "h3" | "body2"; // You can extend this with other variants as needed
//   color: string;
//   children: React.ReactNode;
//   style?: React.CSSProperties;
// }

// Reusable component for styled MKTypography with types
// const StyledTypography: React.FC<StyledTypographyProps> = ({ variant, color, children, style }) => (
//   <MKTypography variant={ variant } color={ color } style={ style }>
//     { children }
//   </MKTypography>
// );

const LandingPages: React.FC = () => {
  return (
    <>
      <DefaultNavbar routes={ routes } sticky />
      <Box
        minHeight="75vh"
        width="100%"
        sx={ {
          background: 'linear-gradient(to bottom, rgb(64,81,181),rgb(168,70,185))',
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        } }
      >
        <Container>
          <Grid container item xs={ 12 } lg={ 7 }>
            {/* <StyledTypography
              variant="h3"
              color="white"
              style={ getTypographyStyle("30px", "1.3") }
            >
              Transition to quantum-safe state by Crytography Posture Management approach
            </StyledTypography>

            <StyledTypography
              variant="body2"
              color="white"
              style={ getTypographyStyle("inherit", "1.3", "30px", "16px") }
            >
              A single dashboard that provides a comprehensive list of cryptographic assets and their security posture in the advent of quantum computer.
            </StyledTypography>

            <Stack spacing={ 2 } direction="row">
              <Link to="/BeSLighthouse/Project-Of-Interest">
                <Button variant="contained">Try it</Button>
              </Link>
            </Stack> */}
          </Grid>
        </Container>
      </Box>
      <Card
        sx={ {
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }: any) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }: any) => xxl,
        } }
      >
        <Counters />
      </Card>
    </>
  );
};

export default LandingPages;
