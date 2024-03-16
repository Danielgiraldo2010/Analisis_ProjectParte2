import React from 'react'
import { GrafoUI } from '../Grafo/GrafoUI'

const Analizar = () => {
  return (
    <div className='col-9 mt-3'>
        <h3>Analizar grafo</h3>
        <GrafoUI />
        <div className='container row'>
            <div className='col'>
                <select>
                    <option>
                        seleccione uno
                    </option>
                </select>
            </div>
            <div className='col'>
            <select>
                    <option>
                        seleccione uno
                    </option>
                </select>
            </div>
        </div>
    </div>
  )
}

export { Analizar };