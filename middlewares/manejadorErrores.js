export const manejadorErrores = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Algo salio mal";

    console.error("\x1b[31m", `ERROR: (${statusCode}):`, error.stack);
    
    return res.status(statusCode).json({
        error: errorMessage
    });
}