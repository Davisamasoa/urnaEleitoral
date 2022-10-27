import { candidatosPresidenciais } from "./candidatos/candidatos.js";
import { inputPresident } from "./handleSessions.js";
import { confirma, warning } from "./buttons.js";
import { presidenteSession } from "./display.js";
import { finish } from "./buttons.js";
const divStatusCandidato = document.querySelector(".statusCandidate");
const fotoCand = document.querySelector(".statusCandidate img");
const nomeCand = document.querySelector(".statusCandidate p");
const partidoCand = document.querySelector(".statusCandidate span");

export function validateVote() {
	const inputVazios = [];

	inputPresident.forEach((input) => {
		if (input.value == "") {
			inputVazios.push(input);
		}
	});

	let votoValido = false;

	if (inputVazios.length == 0) {
		votoValido = true;
	}

	return votoValido;
}

export function checkCandidate(input1, input2) {
	const number1 = input1.value;
	const number2 = input2.value;
	const candidateNumber = number1 + number2;
	const candidate = [];

	if (number1.value != "" && number2.value != "") {
		candidatosPresidenciais.forEach((candidato) => {
			if (candidato.numero == candidateNumber) {
				divStatusCandidato.style.display = "block";
				candidate.push(candidato);
				nomeCand.textContent = `Nome: ${candidate[0].nomeCandidato}`;
				partidoCand.textContent = `Partido: ${candidate[0].partido}`;
				fotoCand.src = candidate[0].foto;
			}
		});
		console.log(candidate);
	}

	if (input1.value == "" || input2.value == "") {
		divStatusCandidato.style.display = "none";
	}
}

export function finishVotation() {
	presidenteSession.style.display = "none";
	warning.style.display = "block";
	finish();
}
