//import React, { useEffect, useState } from "react";
import React from "react";
import Graph from "react-graph-vis";
import { network } from "vis-network";
import { convertirGRAFO } from "../functions/convertirJSON";
import { elementContex } from "../../app/ContextState/Estado";
import { opciones } from "./AjustesGrafo";

/**
 * GrafoUI se encarga de la renderizacion de el grafo presente
 * en el estado actual del contexto.
 * */
const GrafoUI = ({ setEdge, setNode }) => {
  //State del grafo
  const { estadoGrafo } = React.useContext(elementContex);
  //Estado de los Nodos del Grafo
  const { nodes } = estadoGrafo;
  /**
   * Mapea los nosos del estadoGrafo para darle el formato necesario
   * para renderizar en componente
   */
  const grafoUI = convertirGRAFO(estadoGrafo);

  const evento = {
    click: (event) => {
      if (event.nodes.length > 0) {
        const nodoSelected = nodes.find((nodo) => nodo.id === event.nodes[0]);
        setNode(nodoSelected);
      } else {
        setNode({ id: null, label: null });
      }
    },
  };

  const interacciones = (network) => {
    network.on("click", function(params) {
      const { edges } = params;
      if (edges.length === 1) {
        const conections = network.getConnectedNodes(edges[0]);
        const { distance } = nodes
          .find((nodo) => nodo.id === conections[0])
          .linkedTo.find((arista) => arista.nodeId === conections[1]);
        setEdge({ from: conections[0], to: conections[1], label: distance });
      } else {
        setEdge({ from: null, to: null, label: null });
      }
    });
  };

  //Renderizado el elemento grafoUI
  return (
    <div className="border border-primary border-4 my-3 spaceGraph">
      <Graph
        graph={grafoUI}
        options={opciones.options}
        events={evento}
        getNetwork={(network) => {
          interacciones(network);
        }}
      />
    </div>
  );
};

export { GrafoUI };
