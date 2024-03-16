import React from "react";

const elementContex = React.createContext ();
function ElementEstado ({children}){ 

    const [estadoGrafo, setEstadoGrafo] = React.useState({
        name: '',
        nodes: []
    });

    const buscarNodo = (id) => {
        const {nodes} = estadoGrafo;
        return nodes.findIndex(nodo => nodo.id === id);
    }

    //Este es el Provider
    //En el value van todas las propiedades y estados que queramos compartir
    return (
        <elementContex.Provider value = {{
            estadoGrafo,
            setEstadoGrafo,
            buscarNodo
        }}>
            {/**Envuelve todos los componenetes que vayan ausar en consumer */} 
            {children}
        </elementContex.Provider> 
    );
}

export{ elementContex, ElementEstado };

//<Provider></Provider> -- Se usa par envolver la apliacion y para definir su estado
//<Consumer></Consumer> -- Se usa cada vez que llame aun estado