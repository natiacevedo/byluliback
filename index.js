import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectartDb } from "./database/conexion.js";

import { getAllProducts } from "./controllers/getAllProducts.js";
import { getProductById } from "./controllers/getProductById.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { postProduct } from "./controllers/postProduct.js";
import { putProduct } from "./controllers/putProduct.js";
import { deleteProduct } from "./controllers/deleteProduct.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";
import { postCompra } from "./controllers/postCompra.js";

const app = express();
const port = 3000;
const baseUrl = "http://localhost:3000";

// Configuración de CORS
app.use(cors({
    origin: "*", // Permite solicitudes solo desde este origen
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true // Si necesitas enviar cookies o encabezados de autenticación
}));

app.use(express.json());
  /* 
app.use(cors); */
  
await conectartDb();

app.use(mostrarDatosRequest)
app.get("/", (req, res) => {
    res.send("By Luli");
});

app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)

app.get("/productos", getAllProducts);
app.get("/producto/:id", getProductById);

app.use(controlarSesion)
app.post("/logout", logoutUsuario)

app.post("/compra", postCompra)

app.post("/producto", postProduct);
app.put("/producto/:id", putProduct);
app.delete("/producto/:id", deleteProduct);

app.use(manejadorErrores)

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});