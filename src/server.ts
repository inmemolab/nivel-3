// importamos express
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
// routes
import apiRouter from "./routes";
// montamos app/express
const app = express();
// set port
const port = process.env.PORT || 3000;
// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ini cors
const corsOptions = {
  origin: process.env.CLIENT_URL
};
app.use(cors(corsOptions));
// show
app.get("/", (req: Request, res: Response) => res.send("Listos!!!"));
// routes api and app
app.use("/api", apiRouter);
// app
app.listen(port, () => {
  console.log("App iniciada");
});
