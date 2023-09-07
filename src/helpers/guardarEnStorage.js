export const GuardarEnStorage = (clave, elemento)  => {
    //CONSEGUIR LOS ELEMENTOS QUE TENEMOS EN EL LCOAL STORAGE
    let elementos = JSON.parse(localStorage.getItem(clave)) || [];

    

    //COMPROBAR SI ES UNA RRAY
    if (Array.isArray(elementos)){
        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else {
        //Crear un array nuevo con la peli
        elementos = [elemento];
    };

    
    //GUARDAR EN EL LOCAL STORAGE

    localStorage.setItem(clave, JSON.stringify(elementos));

    

    //DEVOLVER OBJETO GUARDADO
    return elemento;

}