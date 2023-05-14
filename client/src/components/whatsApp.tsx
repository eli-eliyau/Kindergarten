import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import img from "../img/logo2.png";
import ReactWhatsapp from "react-whatsapp";

export const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+972542801086"
        statusMessage="חשבון עסקי"
        accountName="גננת גלית"
        chatMessage="שלום וברכה תכתבי לי ואחזור בהקדם"
        allowClickAway
        allowEsc
        avatar={img}
        buttonStyle={{ bottom: "1.2rem", right: "1rem" }}
      />
      {/* <ReactWhatsapp
        number="+97200000000"
        message="Hello World!!!"
        element="button"
      >
        ss
      </ReactWhatsapp> */}
    </div>
  );
};
