import React from "react";
import Graph from "react-graph-vis";
import { opciones } from "../Grafo/AjustesGrafo";
import { convertirGRAFO } from "../functions/convertirJSON";

const GrafoGUI = ({ grafoJSON }) => {
  const converido = convertirGRAFO(grafoJSON);
  return (
    <div>
      <Graph
        graph={converido}
        options={opciones.options}
        getNetwork={(network) => {}}
      />
    </div>
  );
};

export { GrafoGUI };
