import axios from "axios";

const obtenerClima = async () => {
  try {
    const apiKey = "bea9e682dbee90d6ecf46f4dab268fec";// aquí el key

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=${apiKey}&units=metric`
    );

    console.log("Clima en Cancún:", response.data);
  } catch (error) {
    console.error("Error al obtener el clima:", error.response?.data || error.message);
  }
};

obtenerClima();