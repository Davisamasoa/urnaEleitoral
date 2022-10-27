const inputPresident = document.querySelectorAll(".presidente input");

export class Sessions {
	static handleInputs() {
		for (let i = 0; i < inputPresident.length; i++) {
			if (inputPresident[i].value == "") {
				setInterval(() => {
					inputPresident[i].style.opacity = 0;
					setTimeout(() => {
						inputPresident[i].style.opacity = 1;
					}, 750);
				}, 1500);
				break;
			}
		}
	}
}
