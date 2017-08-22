        var enviar=true;
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var dni = document.getElementById("dni").value;
		var edad = document.getElementById("nacimiento").value;
		var celular = document.getElementById("celular").value;
		var telefono = document.getElementById("telefono").value;
		var contraseña = document.getElementById("contraseña").value;
		var confirmacion = document.getElementById("confirmacion").value;
		var comentario= document.getElementById("comentario").value;

		var expreNombre=/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
		var expreApellido=/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
		var expreTelefono=/^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
		var expreDni=/(^([0-9]{8,8}\-[A-Z])|^)$/;
		var expreCelular=/(^([0-9]{9,9}\-[A-Z])|^)$/;


     // var expreContraseña=(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$;
		
//_____________________funcion Enviar Formulario__________________________________________________

window.onload=function(){
	 var botonEnviar=document.getElementById("enviar");
	 botonEnviar.onclick = Enviar;
  }

//___________________ VALIDACION DE NOMBRE_______________________________

function verificarNombre(){
     
    var nombre = document.getElementById("nombre").value;
	var salida_nombre= document.getElementById("salida-nombre");
	  var enviar=false;
	if (nombre.length > 0 && nombre.match(/^[a-zA-Z\s]*$/)){
        salida_nombre.innerHTML="<div style= color:white style-size:10px;>Nombre Valido :) </div>";
      enviar=false;
	}else{
		salida_nombre.innerHTML="<div style= color:red;>Nombre Invalido  :( </div>";
	}
	return enviar;
}
//_____________________VALIDACION  DE APELLIDO_________________________________

function verificarApellido(){
	 var apellido = document.getElementById("apellido").value;
	var salida_apellido= document.getElementById("salida-apellido");
	  var enviar=false;
	if (apellido.length > 0 && apellido.match(/^[a-zA-Z\s]*$/)){
        salida_apellido.innerHTML="<div style= color:white style-size:10px;>apellido Valido  :)  </div>";
      enviar=false;
	}else{
		salida_apellido.innerHTML="<div style= color:red;>Apellido Invalido  :(  </div>";
	}
	return enviar;
}

//_____________________VALIDACION DE DNI_________________________________

function verificar_Dni(){
	var expreDni=/(^([0-9]{8,8}\-[A-Z])|^)$/;
	var dni = document.getElementById("dni").value;
	var salida_dni= document.getElementById("salida_dni");
	  var enviar=false;
	if (dni.length > 0 && dni.match(/(^([0-9]{8,8}\-[A-Z])|^)$/)){
        salida_dni.innerHTML="<div style= color:white style-size:10px;>dni Valido  :)  </div>";
      enviar=false;
	}else{
		salida_dni.innerHTML="<div style= color:red;>DNI Invalido  :(  </div>";
	}
	return enviar;
}

  
 





//_______________valiadcion Unitaria  en javascript________________________________________


    //_________REALIZA LAS LETRAS EN  MAYUSCULAS________________
  function mayuscula(texto){
    	for (var i = 0; i<texto.length ; i++) {
    		var primero =texto[0].toUppercase;
    		texto.slace(1);
    	}
   }


    //_______________Validacion del DNI:_____________________________
  function Dni(){

    	 var midni =  /(^([0-9]{8,8}\-[A-Z])|^)$/;

         if (!(midni.test(formulario.dni))) {  
               // alert('ingrese su dni');
                    
                } 
    }

 //___________________edad mayor que 18 años__________________________

     function Nacimiento(){
        
     
		     edad = document.formulario.edad.value
			document.formulario.edad.value=edad;
			if (edad == ""){
				// alert("Tiene que introducir  su  edad.")
				document.formulario.edad.focus()
				return 0;
			}else if (edad<18){
					// alert("Debe ser mayor de 18 años.")
					document.formulario.edad.focus()
					return 0;
				}

     }

//_____________________numero de celular_________________________________ 
 function Numero(){
     
     valor = parseInt(valor) 
      if (isNaN(valor)) { 
            return "" 
      }else{ 
            return valor 
      } 
      if (document.formulario.nombre.value.length==0){
		// alert("Tiene que escribir su nombre")
		document.formulario.nombre.focus()
		return 0;
	    }
	}


	



