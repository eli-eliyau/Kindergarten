import express from "express";
import { Request, Response } from "express";
require("dotenv").config({ path: "./.env" });

const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/email", (req: Request, res: Response) => {
  console.log(req.body);

  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMALI,
        pass: process.env.EMALI_KEY,
      },
    });
    let mailOptions = {
      from: `${req.body.data.email}`,
      to: process.env.EMALI,
      subject: "פניה לגננת",
      text: `שם הפונה - ${req.body.data.fullName}  \nבקשת הפונה - ${req.body.data.message}`,
    };
    transporter.sendMail(mailOptions, function (error: Error, info: any) {
      if (error) {
        console.log(error);
        return reject({ message: "לא הצליח" });
      } else {
        console.log("Email sent: " + info.response);
        res.send({ message: "נשלח המייל בהצלחה" });
        return resolve(res.send({ message: "נשלח המייל בהצלחה" }));
      }
    });
  });
});

export default router;
