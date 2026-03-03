function contactar(){
    // let nombre = document.getElementById ('nombre').value
    // let correo = document.getElementById('correo').value
    // let mensaje = document.getElementById('mensaje').value

    // if (!nombre || !correo || !mensaje){
    //     alert ('❌Error, faltan datos.Por favor complete todo el cuestionario.');
    // }
    // else{
    //     alert ( "Hola "+ nombre + " 🎉Registro exitoso🎉Su mensaje ha sido enviado. Gracias por contactarnos. 💌 ");
    // }
    
    let bolsa=document.querySelectorAll('.form-control');
    nombre=bolsa[0].value
    correo=bolsa[1].value
    mensaje=bolsa[2].value
    for (let i = 0; i < bolsa.length; i++) {
        const element = bolsa[i].value; // El array se llama bonsa 
        if ( !nombre || !correo || !mensaje){
            Swal.fire({
                title: "¿Seguro que completaste los datos?",
                text: "Datos incompletos",
                icon: "question"
            });
            return;//encuentra un campo vacio y de una vez sale
        }
        else{
            Swal.fire({
                title: element+"🎉 Su mensaje ha sido enviado. Gracias por contactarnos.",
                icon: "success",
                draggable: true
            });
            return;
        }
    }
}