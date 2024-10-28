import { ModeloProducto } from "../database/models/ModeloProducto.js";

export const getProductById = (req, res, next) => {
    const idProducto = req.params.id;
    ModeloProducto.findOne({id: idProducto})
    .then((data) => {
        if (!data) {
            throw new Error(`No se encontro el producto con el id ${idProducto}`);
        }else{
            res.json(data);
        }
    })
    .catch((error) => {
        next(error)
    });
}