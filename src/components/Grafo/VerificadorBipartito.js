import React, { useState, useEffect } from 'react';

function VerificadorBipartito({ grafo, onCheckBipartite }) {
  const [isBipartite, setIsBipartite] = useState(null); // Estado para el resultado
  const [isLoading, setIsLoading] = useState(false);   // Estado para indicar si está cargando
  const [error, setError] = useState(null);           // Estado para manejar errores

  useEffect(() => {
    setIsBipartite(null); // Reiniciar el resultado cuando el grafo cambia
  }, [grafo]);

  const handleCheckBipartite = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await onCheckBipartite(); // Llamar a la función del componente padre y obtener el resultado
      setIsBipartite(result);
    } catch (error) {
      console.error("Error al verificar si el grafo es bipartito:", error);
      setError("Error al verificar el grafo.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div>
      <button onClick={handleCheckBipartite} className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Verificando...' : 'Verificar si es bipartito'}
      </button>

      {error && <div className="alert alert-danger mt-2">{error}</div>}

      {isBipartite !== null && (
        <div className={`alert mt-2 ${isBipartite ? 'alert-success' : 'alert-danger'}`}>
          El grafo es bipartito: {isBipartite ? "Sí" : "No"}
        </div>
      )}
    </div>
  );
}

export default VerificadorBipartito;
