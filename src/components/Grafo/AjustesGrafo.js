export const opciones = {
  options: {
    clickToUse: false,
    layout: {
      hierarchical: {
        enabled: false,
        direction: "UD",
        sortMethod: "hubsize",
        shakeTowards: "roots",
        levelSeparation: 150,
        nodeSpacing: 150,
        treeSpacing: 200,
      },
    },
    interaction: {
      tooltipDelay: 10000,
      navigationButtons: true,
      keyboard: false,
      hover: true,
      multiselect: true,
      hoverConnectedEdges: false,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -20,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
        avoidOverlap: 1.5,
      },
      maxVelocity: 100,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 25,
      },
    },
    nodes: {
      fixed: {
        x: false,
        y: false,
      },
      color: {
        hover: {
          border: "darkcyan",
          background: "rgba(255,255,255,1)",
        },
      },
      font: {
        size: 20,
      },
      shape: "dot",
      size: 25,
      scaling: {
        min: 10,
        max: 60,
        label: {
          enabled: true,
          min: 20,
          max: 32,
        },
      },
    },
    edges: {
      hoverWidth: 1.5,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 1,
          type: "arrow",
        },
      },
      color: {
        color: "#000000",
        highlight: "#000000",
        hover: "#000000",
        // inherit: 'from',
        inherit: false,
      },
      font: {
        size: 20,
        color: "black",
        // color: 'white',
        strokeWidth: 6,
        strokeColor: "white",
        // strokeColor: 'black',
      },
      smooth: true,
    },
  },
};

export const opcionesDisable = {
  options: {
    configure: {
      enabled: true,
    },
    clickToUse: false,
    layout: {
      hierarchical: {
        enabled: false,
        direction: "UD",
        sortMethod: "hubsize",
        shakeTowards: "roots",
        levelSeparation: 150,
        nodeSpacing: 150,
        treeSpacing: 200,
      },
    },
    interaction: {
      tooltipDelay: 10000,
      navigationButtons: true,
      keyboard: false,
      hover: true,
      multiselect: true,
      hoverConnectedEdges: false,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
        avoidOverlap: 1.5,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 25,
      },
    },
    nodes: {
      fixed: {
        x: false,
        y: false,
      },
      color: {
        hover: {
          border: "darkcyan",
          background: "rgba(255,255,255,1)",
        },
      },
      font: {
        size: 20,
      },
      shape: "dot",
      size: 25,
      scaling: {
        min: 10,
        max: 60,
        label: {
          enabled: true,
          min: 20,
          max: 32,
        },
      },
    },
    edges: {
      hoverWidth: 1.5,
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 1,
          type: "arrow",
        },
      },
      color: {
        color: "#000000",
        highlight: "#000000",
        hover: "#000000",
        // inherit: 'from',
        inherit: false,
      },
      font: {
        size: 20,
        color: "black",
        // color: 'white',
        strokeWidth: 6,
        strokeColor: "white",
        // strokeColor: 'black',
      },
      smooth: true,
    },
  },
};
