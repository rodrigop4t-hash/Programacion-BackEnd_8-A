import axios from "axios";

const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post(
      'https://reqres.in/api/register',
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
      {
        headers: {
          'x-api-key': 'pub_22faf7b366d8715c48488de16fe9ac326aa1d51a271a5099050280ee14af3417'
        }
      }
    );

    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
  }
};

registrarUsuario();