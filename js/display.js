import { confirma } from "./buttons.js";
import { Sessions } from "./handleSessions.js";
const displayInit = document.querySelector(".defaultDisplay");
const beginSession = document.querySelector(".beginVotation");
const presidenteSession = document.querySelector(".presidente");

export class Display {
	static init() {
		beginSession.style.display = "none";

		setTimeout(() => {
			displayInit.style.animation = "showOffDisplay 1s";
		}, 2000);

		setTimeout(() => {
			displayInit.style.display = "none";
			beginSession.style.display = "block";
			beginSession.style.animation = "showOnDisplay 1s";
		}, 3000);
	}

	static showOffDisplay(item) {
		item.style.animation = "showOffDisplay 1s";
		setTimeout(() => {
			item.style.display = "none";
		}, 1000);
	}

	static showOnDisplay(item) {
		item.style.animation = "showOnDisplay 1s";
		setTimeout(() => {
			item.style.display = "block";
		}, 1000);
	}

	static initVotation() {
		Display.showOffDisplay(beginSession);
		console.log("oi");
	}
}

presidenteSession.style.display = "none";

confirma.addEventListener("click", () => {
	Display.initVotation();
	Display.showOnDisplay(presidenteSession);
	Sessions.handleInputs();
});
