import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar Pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();


        //CONSEGUIR EL TARGET DEL EVENTO
        let target = e.target;

        //BUSCAR EL INDICE DEL OBJETO DE LA PELICULA A ACTUALIZAR
        const pelis_almacenadas = conseguirPeliculas();

        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)
        
        //CREAR OBJETO CON ESE INDICE, TITULO Y DESCRIPCION DEL FORM
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // ACTUALIZAR EL ELEMENTO CON ESE INDICE
        pelis_almacenadas[indice] = peli_actualizada;

        //GUARDAR EL NUEVO ARRAY DE OBJETOS EN EL LOCAL STORAGE
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //ACTUALIZAR ESTADOS
        setListadoState(pelis_almacenadas);
        setEditar(0);
        
    }

  return (
    <form className='edit_form' onSubmit={e => guardarEdicion(e, peli.id)}>
        <h3 className='title'>{titulo_componente}</h3>
        <input type='text' 
               name='titulo' 
               className='titulo_editado' 
               defaultValue={peli.titulo}

        />

        <textarea name='descripcion'
                  defaultValue={peli.descripcion}
                  className='descripcion_editada'
        >
        </textarea>

        <input type='submit' className='editar' value="Actualizar" />
    </form>
  )
}
