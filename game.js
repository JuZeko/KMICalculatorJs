function f () {
var svoris = document.getElementById('svoris');
var ugis = document.getElementById('ugis');
var atsakymas = parseInt(svoris.value) / Math.pow(parseInt(ugis.value),2)*10000;
atsakymas = atsakymas.toPrecision(3)

if(((atsakymas > 80)||( atsakymas < 8)||(atsakymas===0))){

	document.getElementById("kmi").innerHTML = " Neteisingai įvesti duomenys ";
	

}
else {

	document.getElementById("kmi").innerHTML = "Tavo KMI yra " + atsakymas;
	tikrinimas(atsakymas);
}




}

function tikrinimas(atsakymas){


	if((atsakymas>18.5)&&(atsakymas<24.9)){
		document.getElementById("info").innerHTML = " Jūsų kmi yra geras";
		document.getElementById("img").src = "https://thumbs.dreamstime.com/b/skinny-guy-n-gym-vector-illustration-cool-cartoon-style-geometrical-flat-isolated-white-background-70243123.jpg";
		
	
	 } if  (atsakymas<18.5){
		document.getElementById("info").innerHTML = " Jūsų kmi yra per mažas";
		document.getElementById("img").src = "https://friendlystock.com/wp-content/uploads/2018/09/6-dabbing-skeleton-character-vector-cartoon-clipart.jpg";
	

	}if (atsakymas>24.9){
		document.getElementById("info").innerHTML = " Jūsų kmi yra per didelis";
		document.getElementById("img").src = "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180273512/95584741-cute-fat-cartoon-human.jpg";
	}
}


