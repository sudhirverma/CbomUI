// Routes
import DefaultNavbar from "../../components/DefaultNavbar";
import routes from "../../routes";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import ProjectLogo from "../../assets/images/bug.png";
import { Box, Typography } from "@mui/material";
import ProjectCount from "./ProjectCount";
import CryptographyDisplay from "./CryptographyDisplay/CryptographyDisplay";

function CryptographyProjectOfInterest() {
  return (
    <>
      <DefaultNavbar routes={ routes } sticky />
      <Box pt={ 10 } sx={ { mx: { xs: 2, lg: 3 } } }>
        <Typography variant="h3" color="black">
        Cryptography Project of Interest
        </Typography>
        <Typography
          display="flex"
          alignItems="left"
          color="black"
          paddingTop="2px"
          fontSize="18px"
          width="100%"
          style={ { fontWeight: "lighter" } }
        >
          Empower your development teams with unparalleled insights into your
          open source software supply chain. BeSecure assesses their risk
          posture, ensuring your codebase remains secure and compliant. Stay
          ahead in the fast-paced world of software development with our
          comprehensive solution, safeguarding your projects from potential
          vulnerabilities.
        </Typography>
      </Box>
      <Box pt={ 1 } sx={ { mx: { xs: 2, lg: 3 } } }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 } xl={ 4 }>
            <ProjectCount
              title="Cryptography Project tracked"
              total={ 3 }
              color="success"
              icon={
                <img
                  style={ { width: "140px", top: "58px", position: "absolute" } }
                  alt="icon"
                  src={ ProjectLogo }
                />
              }
              sx={ { width: "100%", height: "244px" } }
            />
          </Grid>
        </Grid>
      </Box>
      <Box pt={ 1 } pb={ 3 }>
        <Card sx={ { mx: { xs: 2, lg: 3 } } }>
          <Box>
            <CryptographyDisplay/>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default CryptographyProjectOfInterest;
