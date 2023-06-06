const mongoose = require("mongoose");
const { Utilities } = require("../services/utils.service");

const Schema = mongoose.Schema;

//MODELO DE USUARIO

const userSchema = new Schema({
  nombre_usuario: { type: String },
  correo_usuario: {
    type: String,
    match: Utilities.REGEX_VALD_EMAIL.pattern,
    unique: true,
  },
  password_usuario: {
    type: String,
    match: Utilities.REGEX_VALD_PASSWORD.pattern,
  },
  foto_usuario: {
    type: Object,
    default: {
      file_name: "default-profile-image.png",
      path: "D:\\RESPALDO\\ESCUELA\\PW2\\PIA\\Bisonet\\BackEnd\\app\\storage\\default-profile-image.png",
    },
  },
  reporte_usuario: { type: Number, default: 0, min: 0 },
  isactive_usuario: { type: Boolean, default: true },
  tipo_usuario: { type: Boolean, default: false },
});

const model = mongoose.model("Users", userSchema);
module.exports = model;
