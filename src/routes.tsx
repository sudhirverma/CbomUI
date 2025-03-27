// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import Icon from "@mui/material/Icon";
import CryptographyProjectOfInterest from "./pages/CryptographyProjectOfInterest";

const routes = [
  {
    name: "Cryptography Project of Interest",
    key: "Cryptography-Project-of-Interest",
    icon: <Icon>library_books</Icon>,
    route: "/CBOM/Cbom-Of-Interest",
    component: <CryptographyProjectOfInterest />
  },
  {
    name: "github",
    key: "github",
    icon: <GitHubIcon fontSize="small"/>,
    href: "https://github.com/Be-Secure/BeSLighthouse"
  }
];

export default routes;
