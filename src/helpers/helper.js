export const formatearFecha = (fecha)=>{
    const nuevaFecha = new Date(fecha)
    const opciones = {
        year:'numeric',
        month: '2-digit',
        day: '2-digit'
    }    
    return nuevaFecha.toLocaleDateString('es-ES',opciones)
}

export const formatearContenido = (contenido,cantidadCaracteres) => {
    let nuevoContenido = ""
    for(let i=0;i<contenido.length;i++){
        nuevoContenido+=contenido[i]
        if((i+1)%cantidadCaracteres == 0){
            nuevoContenido+='\n';
        }
    }
    return nuevoContenido;
}

export const acortadorTexto = (contenido,tamaño) =>{
    let contenidoAcortado = contenido.substring(0,tamaño)
    return contenidoAcortado    
}