import { ModeloCompra } from "../database/models/ModeloCompra.js";
import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postCompra = async (req, res, next) => {
  const { productos } = req.body;
  console.log(req.usuario);

  const nuevaCompra = new ModeloCompra();
  nuevaCompra.id = await obtenerProximoId(ModeloCompra);
  nuevaCompra.productos = productos;
  nuevaCompra.idUsuario = req.usuario.id;
  nuevaCompra.fecha = new Date().toISOString();
  nuevaCompra.total = 0;

  productos.map((producto) => {
    ModeloProducto.findOne({ id: producto.idProducto })
      .then((data) => {
        if (!data) {
          throw new Error(
            `No se encontro el producto con el id ${producto.idProducto}`
          );
        } else {
          nuevaCompra.total += data.precio * producto.cantidad;
        }
      })
      .catch((error) => {
        next(error);
      });
  });

  nuevaCompra
    .save()
    .then(() => {
      res.json(nuevaCompra);
    })

    .catch((error) => {
      next(error);
    });
};
