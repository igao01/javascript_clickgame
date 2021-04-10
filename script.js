let buttonDesc = document.getElementById("button-description");

//CLICK ME ACTION
function clickMeAction () {

	//ACRESCENTAR A LOGICA UTILIZANDO OS SKILL BUTTON
	if (count2X > 1) {
		currentAmount = currentAmount + count2X;
		console.log("ganho por click" + count2X);
	}
	else {
		++currentAmount;
	}


	document.getElementById("amount").innerHTML = currentAmount;
}

// 2X ACTION
function button2XAction () {

	if (currentAmount >= current2XPrice) {
		currentAmount -= current2XPrice; //subtrai o preco do 2X do valor total
		count2X = count2X * 2;
		next2XPrice = Math.pow(current2XPrice, 2) - Math.pow(current2XPrice, 2) * 0.8;
		console.log("Proximo valor do 2X: " + next2XPrice);
		current2XPrice = next2XPrice;

	} else {
		alert("Você precisa de " + current2XPrice + "pontos para utilizar o 2X")
	}

}

// 10X ACTION
function button10XAction () {

}

// MASTER RESET ACTION
function buttonMasterResetAction () {

}

// DESCRICAO DO BOTAO 2X
function show2XDesc () {
	buttonDesc.innerHTML = "Multiplique por 2 os pontos ganhos por clique";
}

// DESCRICAO DO BOTAO 10X
function show10XDesc () {
	buttonDesc.innerHTML = "Multiplique por 10 os pontos ganhos nos próximos 100 cliques";
}

// DESCRICAO DO BOTAO MASTER RESET
function showMasterResetDesc () {
	buttonDesc.innerHTML = "Zere seus pontos e multiplique por 10 os ganhos por clique";
}

function hideDesc () {
	buttonDesc.innerHTML = "";
}