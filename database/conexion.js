import mongoose from "mongoose";

const urlDb = process.env.MONGODB_URL;

/* export const conectartDb = ()=> {
    return mongoose
    .connect(urlDb)
    .then(()=> {
        console.log("Conectado a la base de datos");
    })
    .catch((error) => {
        console.log("Error al conectar a la base de datos", error);
    });
}; */

export const conectartDb = async () => {
    try {
        await mongoose.connect(urlDb);
        console.log("✅ Conectado a la base de datos");
    } catch (error) {
        console.error("❌ Error al conectar a la base de datos", error.message);
        process.exit(1);
    }
};{}