import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./controllers/index.js";

import * as dotenv from "dotenv";
dotenv.config();

const app = Express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(
        `mongodb+srv://root:${process.env.DB_PASSWORD}@cluster0.ohm7xkk.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
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
