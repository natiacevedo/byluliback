import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getAllProducts = (req, res, next) => {
    const filtroNombre = formatearFiltrosDB(req.query.nombre);
    const filtroPrecio = formatearFiltrosDB(req.query.precio);

    const filtros = {}
    if(filtroNombre) filtros.nombre = filtroNombre; 
    if(filtroPrecio) filtros.precio = filtroPrecio;

    
    ModeloProducto.find(filtros)
    .then((data) => {
        console.log("get productos =", data);
        if (data.length === 0) {
            res.json([]);
    }else{
        res.json(data);
    }
    })
    .catch((error) => {
       next(error)
    });
};