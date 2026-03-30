import axios from "axios";

const obtenerDatos = async () => {
  try {
    const token = "12323456";

    const response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Datos protegidos:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
};

obtenerDatos();