import { Schema, model } from "mongoose";

const schemaProducto = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    categoria: String,
    precio: Number,
    descripcion: String,
    imagen: String
});

export const ModeloProducto = model("Producto", schemaProducto);