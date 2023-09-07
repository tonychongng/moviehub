import logo from './logo.svg';
import './App.css';
import { Listado} from './components/Listado';
import { Buscador} from './components/Buscador';
import { Crear} from './components/Crear';
import { useState, useEffect } from 'react';

function App() {

    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        // Intentar obtener los datos del localStorage
        const peliculasEnLocalStorage = JSON.parse(localStorage.getItem('pelis'));

        if (!peliculasEnLocalStorage) {
        // Si no hay datos en el localStorage, inicializa con un objeto de ejemplo
        const ejemploPelicula = {
            id: 1,
            titulo: 'Spiderman: Homecoming',
            descripcion: 'A superhero movie',
        };

        // Agrega el objeto de ejemplo al localStorage
        localStorage.setItem('pelis', JSON.stringify([ejemploPelicula]));

        // Establece el estado con el objeto de ejemplo
        setListadoState([ejemploPelicula]);
        } else {
        // Si hay datos en el localStorage, establece el estado con esos datos
        setListadoState(peliculasEnLocalStorage);
        }
    }, []);

  return (
    <div className="layout">
        {/*CABECERA*/}
        <header className="header">
            
            <div className="logo">
                <div className="play">

                </div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/*BARRA DE NAVEGACIÓN*/}
        <nav className="nav">
            <ul>
                <li> <a href="#"></a>Inicio  </li>
                <li> <a href="#"></a> Peliculas </li>
                <li> <a href="#"></a>  Blog</li>
                <li> <a href="#"></a>  Contacto</li>
            </ul>
        </nav>

        {/*CONTENIDO PRINCIPAL*/}
        <section className="content">
            {/*Aquí van las peliculas*/}
            <Listado
                listadoState={listadoState}
                setListadoState={setListadoState}
            />

        </section>


        {/*BARRA LATERAL*/}
        <aside className="lateral">
            {/*Buscar peliculas*/}
            <Buscador
                listadoState={listadoState}
                setListadoState={setListadoState}
            
            />

            {/*Añadir peliculas*/}
            <Crear
                setListadoState={setListadoState}
            />

        </aside>

        <footer className="footer">
            &copy; Máster en JavasCRIdddPT es12 Y tYPEsCRIPT - <a href="http://tonychong.net"></a>
        </footer>

    </div>
  );
}

export default App;
