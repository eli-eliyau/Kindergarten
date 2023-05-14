"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config({ path: "./.env" });
const nodemailer = require("nodemailer");
const router = express_1.default.Router();
router.post("/email", (req, res) => {
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
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: "לא הצליח" });
            }
            else {
                console.log("Email sent: " + info.response);
                res.send({ message: "נשלח המייל בהצלחה" });
                return resolve(res.send({ message: "נשלח המייל בהצלחה" }));
            }
        });
    });
});
exports.default = router;
