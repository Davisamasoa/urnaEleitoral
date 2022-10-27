const btnCLick = document.querySelectorAll("button");

export const btnClickAnimation = btnCLick.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.style.animation = "btnAnimation 0.3s";
		setTimeout(() => {
			btn.style.animation = "none";
		}, 400);
	});
});
