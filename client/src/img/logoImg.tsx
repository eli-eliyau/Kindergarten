import logo from "./logo2.png";
import { responsiveFontSizes } from "@mui/material";
import "./logoImg.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const LogoImg = () => {
  return (
    <>
      <img src={logo} alt="ילדים" className="responsive"></img>
    </>
  );
};
