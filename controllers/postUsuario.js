import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postUsuario = async (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        const usuarioExistente = await ModeloUsuario.findOne({ email: email });

        if (usuarioExistente) {
            throw new Error("El usuario ya existe");
        }

        const nuevoUsuario = new ModeloUsuario();
        nuevoUsuario.id = await obtenerProximoId(ModeloUsuario);
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.email = email;
        nuevoUsuario.password = password;

        nuevoUsuario.save()
        .then(() => {
            res.json({message: "Nuevo usuario creado con éxito"});
        })
        .catch((error) => {
            next(error);
        });
    } catch (error) {
        next(error);
    }
}