import React from "react";
import { useEffect } from "react";
import { ModalNuevoGrafo } from "../../../components/ModalNuevoGrafo/ModalNuevoGrafo";

import { ItemGrafo } from './ItemGrafo'
import { todosGrafos } from '../../../api/GrafoCRUD'

const ListaGrafos = () => {
  const [grafos, setGrafos] = React.useState([]);

  useEffect(() => {
    todosGrafos(setGrafos);
  },[]);

  return (
    <div>
      <ModalNuevoGrafo />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {grafos.map((grafo) => (
          <ItemGrafo
            grafo = {grafo}
            grafos = {grafos}
            setGrafos = {setGrafos}
            key = {grafo.id}
          />
        ))}
      </div>
    </div>
  );
};

export { ListaGrafos };
