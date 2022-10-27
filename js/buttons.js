import { Display } from "./display.js";
import { inputPresident, Sessions } from "./handleSessions.js";
import { presidenteSession } from "./display.js";
import { validateVote } from "./handleVotation.js";
import { checkCandidate } from "./handleVotation.js";
export const confirma = document.querySelector(".verde");
export const corrige = document.querySelector(".laranja");
const branco = document.querySelector(".branco");
export const warning = document.querySelector(".warning");
warning.style.display = "none";

export const numsButtons = document.querySelectorAll(".num");

numsButtons.forEach((num) => {
	num.addEventListener("click", () => {
		digite(num.textContent);
		Sessions.handleInputs();
		checkCandidate(inputPresident[0], inputPresident[1]);
	});
});

export const numPress = document.addEventListener("keydown", (e) => {
	if (isNaN(e.key) == false) {
		digite(e.key);
	} else if (e.key == "Backspace") {
		removeLastNumber();
	}
	checkCandidate(inputPresident[0], inputPresident[1]);
	Sessions.handleInputs();
});

corrige.addEventListener("click", removeLastNumber);

branco.addEventListener("click", () => {
	if (presidenteSession.style.display != "none") {
		presidenteSession.style.display = "none";
		warning.style.display = "block";
		confirma.addEventListener("click", finish);
	}
});

export function finish() {
	document.querySelector(".warning h2").textContent = "FIM";
	document.querySelector(".warning h2").style.fontSize = "3rem";

	document.querySelectorAll(".warning p").forEach((option) => {
		option.style.display = "none";
	});

	const audio = document.querySelector("audio");
	audio.src = "../audio/somDaUrna.mp3";
	audio.play();
}

function digite(value) {
	for (let i = 0; i < inputPresident.length; i++) {
		if (inputPresident[i].value == "") {
			inputPresident[i].value = value;
			break;
		}
	}
}

function removeLastNumber() {
	for (let i = inputPresident.length - 1; i < inputPresident.length; i--) {
		if (inputPresident[i].value != "") {
			inputPresident[i].value = "";
			break;
		}
	}
	Sessions.handleInputs();
}
