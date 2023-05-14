import logo from "./logo2.png";
import { Grid, Typography, responsiveFontSizes } from "@mui/material";
import "./logoImg.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grid } from "../page/Home";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const LogoImg = () => {
  return (
    <>
      <img src={logo} alt="ילדים" className="responsive"></img>
    </>
  );
};
