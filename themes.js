function setLightTheme () {

	//BODY
	let body = document.querySelector("body");
	body.style.color = "#1b1b1b";
	body.style.backgroundColor = "#f0f0f0";

	//CLICK ME
	let clickMe = document.querySelector("#clickme-button");
	clickMe.style.backgroundColor = "#dadada";
	clickMe.style.color = "#00379c";

	//THEME BUTTON
	let themeButton = document.querySelector("#theme-button");
	themeButton.style.color = "#1b1b1b";
	themeButton.style.backgroundColor = "#dadada";
	themeButton.innerHTML = "Claro";

	//SKILL BUTTON
	let skillsButton = document.querySelectorAll(".skill-button");
	for (let i in skillsButton) {
		skillsButton[i].style.color = "#1b1b1b";
		skillsButton[i].style.backgroundColor = "#dadada";
	}
}

function setDarkTheme () {

	//BODY
	let body = document.querySelector("body");
	body.style.color = "#dbdbdb";
	body.style.backgroundColor = "#202020";

	//CLICK ME
	let clickMe = document.querySelector("#clickme-button");
	clickMe.style.backgroundColor = "#313131";
	clickMe.style.color = "#eea765";

	//THEME BUTTON
	let themeButton = document.querySelector("#theme-button");
	themeButton.style.color = "#dadada";
	themeButton.style.backgroundColor = "#313131";
	themeButton.innerHTML = "Escuro";

	//SKILL BUTTON
	let skillsButton = document.querySelectorAll(".skill-button");
	for (let i in skillsButton) {
		skillsButton[i].style.color = "#7ad5db";
		skillsButton[i].style.backgroundColor = "#313131";
	}
}
