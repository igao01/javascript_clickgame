let buttonDesc = document.getElementById("button-description");

function clickMeAction () {

	//ACRESCENTAR A LOGICA UTILIZANDO OS SKILL BUTTON
	++currentAmount;
	document.getElementById("amount").innerHTML = currentAmount;
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