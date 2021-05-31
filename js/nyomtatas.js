document.querySelector("#kalkulalGomb").addEventListener("click", kalkulal);

function kalkulal(){
	const szelesség = document.querySelector("#szélesség").value;
	const magasság = document.querySelector("#magasság").value;
	const papir = document.getElementById('papirtipus').value;
	let terulet = Math.round((szelesség * magasság) / 10000);
	let koltseg = terulet * papir;
	document.querySelector("#terulet").innerHTML = terulet;
	document.querySelector("#papir").innerHTML = papir;
	document.querySelector("#koltseg").innerHTML = koltseg;
	document.getElementById('valasz').style.visibility = "visible";
}