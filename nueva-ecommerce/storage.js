const guardar = document.getElementById ('button-contacto');

function guardarLocal() {
    const ingreso = document.getElementById ('ingreso')
    localStorage.setItem ("valor", ingreso.value)
}

//listener

guardar.addEventListener("click", guardarLocal) 

//alert finalizada compra
const btnCompra = document.getElementById ('button-contacto')

btnCompra.addEventListener("click", () => {
    swal.fire({
        title: "Muchas gracias!",
        text: "Te llegará un correo con los datos del envío",
        type: "success",
        confirmButtonColor: '#41624a99'
    }).then(function() {
        window.location = "/home.html";
    });
    
    

})