import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./src/routes";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port: ${port}`);
});
