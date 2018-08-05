















// var i;
// var options = '';
// select = document.getElementById('positions'); //el numero que haya selecc el usuario se asigna a select
            
// for (i = 1; i <= 99; i++) { //for para hacer el for 1-99 que se desplega a la hora de picarle al select
//      var opt = document.createElement('option');
//     opt.value = i;
//     opt.innerHTML = i;
//     select.appendChild(opt);
// }

// const encodejs = () => { //funcion codificar
// 	let offset = parseInt(document.getElementById("positions").value); //lo que el usuario ingreso en la caja(numero), ese valor lo parsea a entero y lo asigna a variable offser
// 	let text = document.getElementById("textencode").value; //lo que el usuario ingreso en el input text caja1 con id=textencode, lo asigna a la variable text
// 	let response = cipher.encode(offset,text); //la funcion encode, del objeto cipher. regresa el valor a la variable response
// 	document.getElementById("textToEncode").innerHTML=response; //todo el resultado de la codificacion que se guardo en la var response, se asigna a mi etiqueta

// }

// const decodejs = () => { //funcion decodificar
// 	let offset = parseInt(document.getElementById("positions").value);
// 	let text = document.getElementById("textencode").value; //el texto que el usuario ingreso en la caja de texto 2 "textdecode", se lo asigno a la variable text
// 	let response = cipher.decode(offset,text); //la funcion decode que trabaja con dos parametros, le asigna el valor que trae a la variable response
// 	document.getElementById("textToEncode").innerHTML=response; 
// }

// const limpiar = () => {
// 	document.getElementById("textencode").value="";//limpia la caja de texto 1 que tiene por id=textencode, una vez que el usuario haya hecho clic, el resultado aparecera en la caja 2, pero ahora a la caja 1 se le asigna un valor vacio

// 	document.getElementById("textToEncode").innerHTML=""; //limpia la caja de texto una vez que el usuario ingreso su texto a decodificar y le dio clic
// }