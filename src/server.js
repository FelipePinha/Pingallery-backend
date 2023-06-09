import Express from "express";
const app = Express();

import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import router from "./controllers/index.js";

import * as dotenv from "dotenv";
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/files", Express.static(path.resolve("src/upload")));

// db connect
mongoose
    .connect(
        `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.ohm7xkk.mongodb.net/pingallery-db?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("conectado ao db com sucesso");
    })
    .catch(err => {
        console.log(err.message);
    });

app.use(router);

app.listen(3000, () => {
    console.log("rodando na porta 3000");
});
