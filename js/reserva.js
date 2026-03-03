function reservar(){
   let bolsa=document.querySelectorAll('.form-control');
   nombre=bolsa[0].value
   correo=bolsa[1].value
   fecha=bolsa[2].value
   hora=bolsa[3].value
   
    for (let i = 0; i < bolsa.length; i++) {
        const element = bolsa[i].value; // El array se llama bonsa 
        if ( !nombre || !correo || !fecha || !hora || !personas){
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
