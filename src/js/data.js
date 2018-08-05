window.foodmap {
	
}
















// window.cipher {
// 	encode : (offset, string) => {//funcion codificar con parametros, offset es el num de posiciones a recorrer, string es la cadena de texto
// 		let ascii=0;
// 		let caracteres= false;
// 		let mensaje='';
// 		let formula=0;
// 		let formula2=0;
// 		for (let i = 0;i<string.length; i++) {
// 			ascii = string.charCodeAt(i); //me va dando el codigo ascii de cada letra
// 			caracteres=cipher.validaCaracteres(ascii); //llamo a la funcion validaCaracteres y el resultado se asigna a la var caracteres
// 			if(caracteres){ //si el valor que me retorno la funcion a la var caracteres es verdadera entonces...
// 				mensaje+=String.fromCharCode(ascii); //has esto si la funcion es verdadera
// 			}else{ //si no
// 				if(ascii>=97 && ascii<=122){ //if para rango de minusculas
// 					formula2=(ascii - 97 + offset) % 26 + 97;
// 					mensaje += String.fromCharCode(formula2); // += concatenacion
// 				}else{ // if para mayusculas
// 					formula=(ascii - 65 + offset) % 26 + 65;
// 					mensaje += String.fromCharCode(formula); // += concatenacion
// 				}
// 			}
// 		}return mensaje;
// 	},



// 	decode (offset, string ) { //funcion decodificar con parametros
// 		let ascii=0;
// 		let formula=0;
// 		let caracteres=false;
// 		let formula2=0;
// 		let mensaje2='';
// 		for (let i = 0;i<string.length; i++) {
// 			ascii = string.charCodeAt(i);
// 			caracteres=cipher.validaCaracteres(ascii);
// 			if(caracteres){
// 				console.log('caracteres');
// 				mensaje2+=String.fromCharCode(ascii);
// 			}else{
// 				if(ascii>=97 && ascii<=122){
// 					console.log('minusculas');
// 					console.log(ascii);
// 					//console.log(ascii+'-'+97+'-'+33);
// 					formula2=(ascii + 97 - offset) % 26 + 97;
// 					//console.log(ascii);
// 					console.log(formula2);
// 					mensaje2+=String.fromCharCode(formula2);
// 				} else{
// 					console.log('mayusculas');
// 					formula=(ascii + 65 - offset) % 26 + 65;
// 					mensaje2+=String.fromCharCode(formula);
// 				}
// 			}

// 		}return mensaje2;
// 	},



// 	 validaCaracteres(ascii){
// 	 	       //mayusculas              //minusculas
// 	 	if((ascii<65 || ascii>90) && (ascii<97 || ascii>122)){ //si el valor de la letra que esta validando esta entre uno de los rangos del if, entonces...
// 	 		return true; //regresa verdadero
// 	 	}
// 	 	//return valor; //sino, entonces regresa valor (el caracter) sin modificarle nada
// 	 }
// };
