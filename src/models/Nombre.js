import mongoose from "mongoose";

const nombreShema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Nombre es requerido"],
  },
  edad: {
    type: Number,
    required: [true, "Nombre es requerido"],
  },
  domicilio: {
    type: String,
    required: [true, "Nombre es requerido"],
  },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const nombreModel =  mongoose?.models?.Student || mongoose.model("Nombre", nombreShema);
