import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postProduct = async (req, res, next) => {
    const {nombre, categoria, precio, descripcion, imagen } = req.body;
    const nuevoProducto = new ModeloProducto()
    nuevoProducto.id =await obtenerProximoId(ModeloProducto);
    nuevoProducto.nombre = nombre;
    nuevoProducto.categoria = categoria;
    nuevoProducto.precio = precio;
    nuevoProducto.descripcion = descripcion;
    nuevoProducto.imagen = imagen;

    nuevoProducto.save()
    .then(() => {
        res.json(data)
    })
    .catch((error) => {
        next(error);
    });
}