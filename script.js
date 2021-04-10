let buttonDesc = document.getElementById("button-description");
let amount = document.getElementById("amount");

//CLICK ME ACTION
function clickMeAction () {


	//VERIFICA QUANTIDADE DE CLIQUE DO 10X
	if (count10Xclick >= 19) {
		is10XActive = false;
		count10Xclick = 0;
	} else if (is10XActive) {
		count10Xclick++;

		//LOG
		console.log("count10Xclick: " + count10Xclick);
	}

	// GANHO POR CLICK
	currentAmount += getClickValue();

	//BEST
	if (currentAmount > best) {
		best = currentAmount;
		document.getElementById("best").innerHTML = "Best: " + best;
	}
	amount.innerHTML = currentAmount;
}

// 2X ACTION
function button2XAction () {

	if (currentAmount >= current2XPrice) {
		currentAmount -= current2XPrice; //subtrai o preco do 2X do valor total
		count2X = count2X * 2;
		next2XPrice = current2XPrice * 3;
		current2XPrice = next2XPrice;

		//ATUALIZA OS PONTOS
		amount.innerHTML = currentAmount;

		// LOG
		console.log("Proximo valor do 2X: " + next2XPrice);
		console.log("Proximo valor do count2X: " + count2X);

	} else {
		alert("Você precisa de " + current2XPrice + " pontos para utilizar o 2X")
	}
}

// 10X ACTION
function button10XAction () {

	if (!is10XActive) {
		if (currentAmount >= current10XPrice) {
			currentAmount -= current10XPrice;
			is10XActive = true;
			count10Xclick = 0;
			next10XPrice = getClickValue() * 50 + current10XPrice * 3;
			current10XPrice = next10XPrice;

			//ATUALIZA OS PONTOS
			amount.innerHTML = currentAmount;

			// LOG
			console.log("Proximo valor do 10X: " + next10XPrice);
		} else {
			alert("Você precisa de " + current10XPrice + " pontos para utilizar o 10X")
		}
	} else {
		alert("10X ja está ativo");
	}

}

// MASTER RESET ACTION
function buttonMasterResetAction () {

	if (currentAmount >= currentMasterResetPrice) {

		// RESETA AS VARIAVEIS
		restartValues();

		countMasterReset++;
		nextMasterResetPrice = currentMasterResetPrice * 15;
		currentMasterResetPrice = nextMasterResetPrice;

		//ATUALIZA OS PONTOS
		amount.innerHTML = currentAmount;

		// LOG
		console.log("Proximo valor do MasterReset: " + nextMasterResetPrice);
		console.log("countMasterReset: " + countMasterReset);
	} else {
		alert("Você precisa de " + currentMasterResetPrice + " pontos para utilizar o Master Reset")
	}
}

// VALOR DO CLICK
function getClickValue () {
	let clickValue = 0;

	// 2X + MR + 10X
	if (is10XActive && count10Xclick < 20 && count2X > 1 && countMasterReset > 0) {
		clickValue = 10 * count2X * (countMasterReset * 10);

		// 2X + MR
	} else if (count2X > 1 && countMasterReset > 0) {
		clickValue = count2X * (countMasterReset * 10);

		// 2X + 10X
	} else if (count2X > 1 && is10XActive && count10Xclick < 20) {
		clickValue = 10 * count2X;

		// 10X + MR 
	} else if (is10XActive && count10Xclick < 20 && countMasterReset) {
		clickValue = 10 * (10 * countMasterReset);

		// 2X	
	} else if (count2X > 1) {
		clickValue = count2X;

		// MR
	} else if (countMasterReset > 0) {
		clickValue = 10 * countMasterReset;

		// 10X
	} else if (is10XActive && count10Xclick < 20) {
		clickValue = 10 * 1;

		// SEM EFEITO	
	} else {
		clickValue = 1;
	}
	return clickValue;
}

function restartValues () {
	currentAmount = 0;
	count2X = 1;
	current2XPrice = first2XPrice;
	current10XPrice = first10XPrice;
	count10Xclick = 0;
	is10XActive = false;
}
// DESCRICAO DO BOTAO 2X
function show2XDesc () {
	buttonDesc.innerHTML = "Multiplique por 2 os pontos ganhos por clique <br> Compre por (" + current2XPrice + ") pontos";
}

// DESCRICAO DO BOTAO 10X
function show10XDesc () {
	buttonDesc.innerHTML = "Multiplique por 10 os pontos ganhos nos próximos 20 cliques <br> Compre por (" + current10XPrice + ") pontos";
}

// DESCRICAO DO BOTAO MASTER RESET
function showMasterResetDesc () {
	buttonDesc.innerHTML = "Zere seus pontos e multiplique por 10 os ganhos por clique <br> Compre por (" + currentMasterResetPrice + ") pontos";
}

function hideDesc () {
	buttonDesc.innerHTML = "";
}