import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //CREAR OBJETO DE LA PELICULA

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        setPeliState(peli);

        //ACTUALIZAR EL ESTADO DEL LISTADO PRINCIPAL
        setListadoState(elementos => {
            return [...elementos, peli];
        })

        GuardarEnStorage("pelis", peli);

    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>{(titulo && descripcion) && "Has creado: " + titulo}</strong>

        <form onSubmit={conseguirDatosForm}>
            <input name="titulo" type="text" placeholder="Titulo" />
            <textarea name="descripcion" placeholder="Descripción">muy buena</textarea>

            <input type="submit" className='editar'/>
        </form>

    </div>
  )
}
