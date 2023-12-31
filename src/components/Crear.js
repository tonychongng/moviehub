import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/guardarEnStorage';

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // CREAR OBJETO DE LA PELÍCULA
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    setPeliState(peli);

    // ACTUALIZAR EL ESTADO DEL LISTADO PRINCIPAL
    setListadoState((elementos) => {
      elementos = elementos || []; // Initialize as an empty array if null or undefined
      return [...elementos, peli];
    });

    GuardarEnStorage("pelis", peli);
  };
  
  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>{(titulo && descripcion) && "Has creado: " + titulo}</strong>

      <form onSubmit={conseguirDatosForm}>
        <input name="titulo" type="text" placeholder="Titulo" defaultValue="Movie's Title"/>
        <textarea name="descripcion" placeholder="Descripción">Movie's Description</textarea>

        <input type="submit" className='editar'/>
      </form>
    </div>
  );
};
