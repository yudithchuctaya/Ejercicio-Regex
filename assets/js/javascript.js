
function validar(){
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var identidad = document.getElementById("DNI").value;
		var nacimiento = document.getElementById("nacimiento").value;
		var celular = document.getElementById("celular").value;
		var telefono = document.getElementById("telefono").value;
		var contraseña = document.getElementById("contraseña").value;
		var confirmacion = document.getElementById("confirmacion").value;


		if(nombre ===""){
			alert("El nombre no es valido");
			return false;

		}
		if(apellido ===""){
			alert("El nombre no es valido");
			return false;

		}

}