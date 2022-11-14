var forms = document.querySelectorAll('.needs-validation');

function validar(){
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let condiciones = document.getElementById('inputTerminos');

    if(password1.value != password2.value || !password1.checkValidity()){
        password2.setCustomValidity(false);
    }else{
        password2.setCustomValidity('');
    }

    if(!condiciones.checked){
        document.getElementById("terminos").classList.add("invalid");
        document.getElementById("spanTerminos").innerHTML = "Debe aceptar los terminos del servicio";
    }else{
        document.getElementById("terminos").classList.remove("invalid");
        document.getElementById("spanTerminos").innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          validar();
        }

        form.classList.add('was-validated')
      }, false)
    })

    document.getElementById('password1').addEventListener('input',()=>{
        validar();
    })
    
    document.getElementById('password2').addEventListener('input',()=>{
        validar();
    })
    
    document.getElementById('inputTerminos').addEventListener('change',()=>{
        validar();
    })
})