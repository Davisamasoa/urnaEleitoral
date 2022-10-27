export const inputPresident = document.querySelectorAll(".presidente input");
let flashingAnimation;
export class Sessions {
	static handleInputs() {
		if (inputPresident[0].value == "") {
			for (let i = inputPresident.length - 1; i > 0; i--) {
				clearInterval(flashingAnimation);
			}
		}
		for (let i = 0; i < inputPresident.length; i++) {
			if (inputPresident[i].value == "") {
				flashingAnimation = setInterval(() => {
					inputPresident[i].style.opacity = 0;
					setTimeout(() => {
						inputPresident[i].style.opacity = 1;
					}, 750);
				}, 1500);
				break;
			} else {
				clearInterval(flashingAnimation);
			}
		}
	}
}
