const convertirGRAFO = (estadoGrafo) => {
  const { nodes } = estadoGrafo;

  let bordes = [];
  const grafo = {
    nodes: nodes.map((node) => {
      node.linkedTo.forEach((link) => {
        bordes.push({
          from: node.id,
          to: link.nodeId,
          label: "" + link.distance,
        });
      });
      return {
        id: node.id,
        label: node.id + ":" + node.label,
      };
    }),
    edges: [],
  };
  grafo.edges = bordes;
  return grafo;
};

export { convertirGRAFO };
