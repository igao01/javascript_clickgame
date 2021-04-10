let buttonDesc = document.getElementById("button-description");
let amount = document.getElementById("amount");
setDarkTheme();

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

	if (currentAmount >= next2XPrice) {
		currentAmount -= next2XPrice; //subtrai o preco do 2X do valor total
		count2X = count2X * 2;
		next2XPrice = next2XPrice * 3;

		//ATUALIZA OS PONTOS
		amount.innerHTML = currentAmount;

		// LOG
		console.log("Proximo valor do 2X: " + next2XPrice);
		console.log("Proximo valor do count2X: " + count2X);

	} else {
		alert("Você precisa de " + next2XPrice + " pontos para utilizar o 2X")
	}
}

// 10X ACTION
function button10XAction () {

	if (!is10XActive) {
		if (currentAmount >= next10XPrice) {
			currentAmount -= next10XPrice;
			is10XActive = true;
			count10Xclick = 0;
			next10XPrice = getClickValue() * 50 + next10XPrice * 3;

			//ATUALIZA OS PONTOS
			amount.innerHTML = currentAmount;

			// LOG
			console.log("Proximo valor do 10X: " + next10XPrice);
		} else {
			alert("Você precisa de " + next10XPrice + " pontos para utilizar o 10X")
		}
	} else {
		alert("10X ja está ativo");
	}

}

// MASTER RESET ACTION
function buttonMasterResetAction () {

	if (currentAmount >= nextMasterResetPrice) {

		// RESETA AS VARIAVEIS
		restartValues();

		countMasterReset++;
		nextMasterResetPrice = nextMasterResetPrice * 15;

		//ATUALIZA OS PONTOS
		amount.innerHTML = currentAmount;

		// LOG
		console.log("Proximo valor do MasterReset: " + nextMasterResetPrice);
		console.log("countMasterReset: " + countMasterReset);
	} else {
		alert("Você precisa de " + nextMasterResetPrice + " pontos para utilizar o Master Reset")
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
	next2XPrice = first2XPrice;
	next10XPrice = first10XPrice;
	count10Xclick = 0;
	is10XActive = false;
}
// DESCRICAO DO BOTAO 2X
function show2XDesc () {
	buttonDesc.innerHTML = "Multiplique por 2 os pontos ganhos por clique <br> Compre por (" + next2XPrice + ") pontos";
}

// DESCRICAO DO BOTAO 10X
function show10XDesc () {
	buttonDesc.innerHTML = "Multiplique por 10 os pontos ganhos nos próximos 20 cliques <br> Compre por (" + next10XPrice + ") pontos";
}

// DESCRICAO DO BOTAO MASTER RESET
function showMasterResetDesc () {
	buttonDesc.innerHTML = "Zere seus pontos e multiplique por 10 os ganhos por clique <br> Compre por (" + nextMasterResetPrice + ") pontos";
}

function hideDesc () {
	buttonDesc.innerHTML = "";
}

// TEMAS
function changeTheme () {
	// 0 - Light
	// 1 - Dark

	if (theme == 0) {
		//MUDA PARA ESCURO
		theme = Math.abs(theme -= 1);
		setDarkTheme();
	} else {
		theme = Math.abs(theme -= 1);
		setLightTheme();
	}
}
setLightTheme();