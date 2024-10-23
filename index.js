import express from "express";
import "dotenv/config";
import { conectartDb } from "./database/conexion.js";

const app = express();
const port = 3000;
app.use(express.json());

await conectartDb();

app.get("/", (req, res) => {
    res.send("By Luli");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});