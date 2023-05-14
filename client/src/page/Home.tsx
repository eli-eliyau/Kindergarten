import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LogoImg } from "../img/logoImg";
import { Details } from "../components/Details";
import { Recommendations } from "../components/Recommendations";
import { WhatsApp } from "../components/whatsApp";
import styled from "styled-components";
import "./home.css";

import FormEmail from "../components/form/formEmail";
import About from "../components/AboutGarden/About";

export const grid = {
  direction: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  while: "60%",
};
export const risponsive = {
  width: {
    xs: "100%",
    sm: "90%",
    md: "60%",
  },
};

export const Home = () => {
  return (
    <div className="div-1">
      <div className="div-logo">
        <LogoImg />
      </div>
      <div className="div-about">
        <About />
      </div>

      <div className="div-form">
        <div className="div-details ">
          <Details />
          <div className="div-updates">
            <h4 className="h4-updates">עדכונים</h4>
          </div>
        </div>
        <FormEmail />
      </div>

      <div className="container">
        <div className="div-recommendations">
          <Recommendations />
        </div>
        {/* <div className="div-whatsApp"> */}
        <WhatsApp />
        {/* </div> */}
      </div>
      <div
        style={{ background: "#d7a3c1", height: "100px", marginTop: "15px" }}
      >
        <div className="div-nav">
          <a href="#" className="a1">
            אודות
          </a>
          <a href="#" className="a2">
            תעודת גננת
          </a>
          <a href="#" className="a3">
            יצירת קשר
          </a>
          <a href="#" className="a4">
            מיקום
          </a>
        </div>
      </div>
    </div>
  );
};
