import { Schema, model } from "mongoose";

const schemaProducto = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    precio: String,
    descripcion: String
});

export const ModeloProducto = model("Producto", schemaProducto);