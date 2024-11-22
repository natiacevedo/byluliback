import { Schema, model } from "mongoose";

const schemaCompra = new Schema({
    id: {type: Number, unique: true},
    idUsuario: Number,
    fecha: String,
    productos: [{
            idProducto: Number,
            cantidad: Number,
        }],
    total: Number
});

export const ModeloCompra = model("Compra", schemaCompra);