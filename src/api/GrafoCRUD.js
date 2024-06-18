import axios from 'axios';

const url = 'http://127.0.0.1:8000/';

//http://127.0.0.1:8000/

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export function todosGrafos(callback) {
  axiosInstance
    .get('grafos')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function eliminarGrafo(id) {
  axiosInstance
    .delete(`grafos/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}



export function guardarNuevoGrafo(grafoNuevo) {
  axios
    .post('/grafos', grafoNuevo)
    .then((res) => {
      console.log(res.data);
      // Aquí puedes realizar acciones adicionales después de una respuesta exitosa
    })
    .catch((err) => {
      console.log(err.response.data);
      // Aquí puedes manejar el error o mostrar un mensaje al usuario
    });
}

export function guardarGrafoEditado(id, grafoEditado) {
  axiosInstance
    .put(`grafos/${id}`, grafoEditado)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

