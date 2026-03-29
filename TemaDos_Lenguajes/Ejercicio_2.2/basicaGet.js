import axios from "axios";

const obtenerUsuario = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        'Authorization': 'Basic ' + Buffer.from('eve.holt@reqres.in:pistol').toString('base64'),
         'x-api-key': 'pub_22faf7b366d8715c48488de16fe9ac326aa1d51a271a5099050280ee14af3417'
      }
    });

    console.log('Datos del usuario:', response.data);
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error.response.data);
  }
};

obtenerUsuario();