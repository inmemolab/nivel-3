// importamos express
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
// routes
import apiRouter from "./routes";
// montamos app/express
const app = express();
// set port
const port = process.env.PORT || 3000;
// use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// show
app.get("/", (req: Request, res: Response) => res.send("Listos!!!"));
// routes api and app
app.use("/api/", apiRouter);
// app
app.listen(port, () => {
  console.log("App iniciada");
});
