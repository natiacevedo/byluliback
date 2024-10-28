import { ModeloProducto } from "../database/models/ModeloProducto.js";

export const putProduct = (req, res, next) => {
    const idProducto = req.params.id;
    const { nombre, precio, descripcion } = req.body;
    const datosNuevos = {};
    if (nombre) datosNuevos.nombre = nombre;
    if (precio) datosNuevos.precio = precio;
    if (descripcion) datosNuevos.descripcion = descripcion;
    ModeloProducto.Update({ id: idProducto }, datosNuevos)
        .then((data) => {
            if (data.matchedCount === 0) {
                throw new Error(`No se encontro el producto con el id ${idProducto}`);
            }
            res.json({
                message: `Se actualizo el producto con el id ${idProducto}`,
            })
        })
        .catch((error) => {
            next(error);
        });
}