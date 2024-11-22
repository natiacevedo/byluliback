import { ModeloProducto } from "../database/models/ModeloProducto.js";

export const putProduct = (req, res, next) => {
    const idProducto = req.params.id;
    const { nombre, categoria, precio, descripcion, imagen } = req.body;
    const datosNuevos = {};
    if (nombre) datosNuevos.nombre = nombre;
    if (categoria) datosNuevos.categoria = categoria;
    if (precio) datosNuevos.precio = precio;
    if (descripcion) datosNuevos.descripcion = descripcion;
    if (imagen) datosNuevos.imagen = imagen;
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