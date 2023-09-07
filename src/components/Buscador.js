import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [noEncontrado, setNoEncontrado] = useState(false);

  const [busqueda, setBusqueda] = useState('');


  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value)
    console.log(busqueda);

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    })

    if(busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true);
    }else {
      setNoEncontrado(false);
    }

    setListadoState(pelis_encontradas);
  }


  return (
    <div className="search">
        <h3>Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 1) && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>

        )
        }
        

        <form>
            <input type="text"
                   id='search_field'
                   name='busqueda'
                   autoComplete='off'
                   value={busqueda}
                   onChange={buscarPeli}
            />
            <button>Search</button>
        </form>
    </div>
  )
}
