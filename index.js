function validar() {

    
    let rut  = document.getElementById("rut");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let correo = document.getElementById("correo");
    let fecha = document.getElementById("fecha");
    let especialidad = document.getElementById("especialidad");
    let hora = document.getElementById("hora");
    let boton = document.getElementById("boton");

   
   
     const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
     const letrasRegex = /^[a-zA-Z\áéíóúÁÉÍÓÚñÑ\s]*$/;
     const edadRegex = /^[0-9]{1,3}$/;
     const emailRegex   = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$i/;
     const fechaRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    //valida que todos los campos sean llenados
    if (
        rut.value === ""||
        nombre.value === "" ||
        apellidos.value === "" ||
        edad.value ===""||
        correo.value === "" 
    ) 
    
    {
        alert("Todos los Campos son Obligatorios");
    return false;
    }
    else if (!rutRegex.test(rut.value)) { //valida que lo ingresado sea el rut
        console.log(rut.value);
        alert("Ingrese rut en formato correcto");
    return false
    }
    else if (!letrasRegex.test(nombre.value)) { //valida que lo ingresado sean letras
        console.log(nombre.value);
        alert("Ingrese solo Letras para su Nombre");
    return false
    }
    else if (!letrasRegex.test(apellidos.value)) { //valida que lo ingresado sean letras
        console.log(apellidos.value);
        alert("Ingrese solo Letras para su Apellido");
    return false
    }
    else if (!edadRegex.test(edad.value)){ //valida que lo ingresado sean numeros
        console.log(edad.value);
        alert("Edad debe ser Solo Numeros");
    return false;
    }
    else if (emailRegex.test(correo.value)) { //valida que lo ingresado tenga formato de correo
        console.log(correo.value);
        alert("Ingrese un Correo Valido");
    return false;
    }
    
    else{

    mensajeExito()
return false
    }
}



function mensajeExito() {
    
    console.log("Estimado ")

    document.getElementById("mensaje").innerHTML =` Estimado ${nombre.value} ${apellidos.value},su hora para ${especialidad.value} ha sido reservada para el
        día ${fecha.value} a las ${hora.value} Además, se le envió un mensaje a su correo ${correo.value} con el detalle de su cita.
        Gracias por preferirnos`;

}





   
