function opera(){
	var opcao =parseInt(document.getElementById("opcao").value);
	var nro1 = parseInt(document.getElementById("nro1").value);
	var nro2 = parseInt(document.getElementById("nro2").value);
	var resultado;
	switch(opcao){
		case 1: resultado = (nro1+nro2)/2;
		break;
		case 2: if (nro1 >nro2){
			resultado = nro1 - nro2;
		}
		else{
			resultado = nro2 - nro1;
		}
		break;
		case 3: resultado = nro2 * nro1;
		break;
		case 4: resultado = nro2/nro1;
		break;
		default: resultado = "Anta, mais atenção";
	}
	document.getElementById("resultado").innerHTML = resultado;
	
}