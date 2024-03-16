export const graph = {
    nodes: [
        { id: 1, label: "Node 1",  shape: "circle", x: 30, y: 300 },
        { id: 2, label: "Node 2"},
        { id: 3, label: "Node 3"},
        { id: 4, label: "Node 4"},
        { id: 5, label: "Node 5"},
        { id: 6, label: "Node 6"},
        { id: 7, label: "Node 7"}

    ],
    edges: [
        { from: 1, to: 2 , label: 85},
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 3 },
        { from: 2, to: 1, label: 53 },
        { from: 1, to: 5 },
        { from: 7, to: 2 },
        { from: 6, to: 4 },
        { from: 3, to: 4 }
    ]
};
