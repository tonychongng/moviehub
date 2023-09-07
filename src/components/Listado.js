import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  }

  const eliminarPelicula =  (e, id) => {
    e.preventDefault();

    let pelis_almacenadas =  conseguirPeliculas();
    
    let nuevas_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    setListadoState(nuevas_peliculas);

    localStorage.setItem('pelis', JSON.stringify(nuevas_peliculas));
  }

  return (
    <>

      {listadoState != null ? listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => {setEditar(peli.id);}}>Editar</button>

              <button className="delete" onClick={(e) => {eliminarPelicula(e, peli.id)}}>Delete</button>


              {/* FORMULARIO DE EDITAR*/}
              {editar == peli.id && (
                <Editar
                  peli = {peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                
                />
              )}

            </article>

          );
        })
        
        : <h2>"No hay peliculas para mostrar"</h2>
      }
    </>

    
    

    
  )
}
