"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importamos express
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// routes
const routes_1 = __importDefault(require("./routes"));
// montamos app/express
const app = (0, express_1.default)();
// set port
const port = process.env.PORT || 3000;
// use bodyParser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// show
app.get("/", (req, res) => res.send("Listos!!!"));
// routes api and app
app.use("/api/", routes_1.default);
// app
app.listen(port, () => {
    console.log("App iniciada");
});
