import axios from "axios";

//Archivo axion para creear un vinculo entre el backend y el frontend 
export default axios.create({
  baseURL: "https://eco727-p2.onrender.com/api/", // Dominio generado en render
});
