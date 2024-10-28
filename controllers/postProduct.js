import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postProduct = async (req, res, next) => {
    const {nombre, precio, descripcion } = req.body;
    const nuevoProducto = new ModeloProducto()
    nuevoProducto.id =await obtenerProximoId(ModeloProducto);
    nuevoProducto.nombre = nombre;
    nuevoProducto.precio = precio;
    nuevoProducto.descripcion = descripcion;

    nuevoProducto.save()
    .then(() => {
        res.json(data)
    })
    .catch((error) => {
        next(error);
    });
}