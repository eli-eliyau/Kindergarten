import express from "express";
import cors from "cors";
import router from "./routes";
require("dotenv").config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.URL_CLINT, credentials: true }));

app.use("/", router);

app.listen(500, () => {
  console.log("->500");
});
