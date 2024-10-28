import { ModeloProducto } from "../database/models/ModeloProducto.js";

export const deleteProduct = (req, res, next) => {
    const idProducto = req.params.id;
    ModeloProducto.deleteOne({ id: idProducto })
        .then((data) => {
            if (data.deletedCount !== 1) {
                throw new Error(`No existe el producto con el id ${idProducto}`);
            }
            else{
                res.json({
                    message: `Se elimino el producto con el id ${idProducto}`,
                });
            }
        })
        .catch((error) => {
            next(error);
        });
}