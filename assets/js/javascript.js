        var enviar=true;
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		// var identidad = document.getElementById("DNI").value;
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
		




function verificarNombre(){
     
    var nombre = document.getElementById("nombre").value;
	var salida_nombre= document.getElementById("salida-nombre");
	  var enviar=false;
	if (nombre.length > 0 && nombre.match(/^[a-zA-Z\s]*$/)){
        salisa_nombre.innerHTML="<div style= color:blue style-size:10px;>Nombre Valido :) </div>";
      enviar=false;
	}else{
		salida_nombre.innerHTML="<div style= color:red;>Nombre Invalido:( </div>";
	}
	return enviar;
}


function verificarApellido(){
	var apellido = document.getElementById("apellido").value;
	var salida_apellido= document.getElementById("salida-apellido");
	if (apellido===" " ){
     salida_apellido.innerHTML="<div style= color:red;>Apellido Invalido</div>";

	}else{
		salida_apellido.innerHTML="<div style= color:green;>Apellido Valido</div>";
	}
}

  if(!nombre.value){
			alert("escriba su nombre");
			enviar=false;
			
     }

  else if(!expreNombre.exec(nombre.value)){

       	alert("Este campo solo acepta solo letras a-zA-Z");

       	enviar=false;
       }else if(!apellido.value)
       {
       	alert("escriba su apellido");
       	enviar=false;
       	apellido.focus();
       }
 

window.onload=function(){
	 var botonEnviar=document.getElementById("enviar");
	 botonEnviar.onclick = Enviar;
  }




//_______________valiadcion Unitaria  en javascript________________________________________

		//enviar formulario
		 if ((formulario.name == 0) || (formulario.apellido ==0) || (formulario.identidad ==0) || (formulario.edad ==0) || (formulario.celular==0)||(formulario.telefono==0)||(formulario.contraseña==0)||(formulario.confirmacion ==0)) {
                    alert('falta  completar informacion');
                    
                }else{
        	    alert("Muchas gracias por enviar el formulario");
	               document.formulario.submit();
        }
    


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
               alert('Contenido del dni no es un DNI v&aacute;lido.');
                    
                } 
    }

 //___________________edad mayor que 18 años__________________________

     function Nacimiento(){
        
     
		     edad = document.formulario.edad.value
			document.formulario.edad.value=edad;
			if (edad == ""){
				alert("Tiene que introducir  su  edad.")
				document.formulario.edad.focus()
				return 0;
			}else if (edad<18){
					alert("Debe ser mayor de 18 años.")
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
		alert("Tiene que escribir su nombre")
		document.formulario.nombre.focus()
		return 0;
	    }
	}


	



