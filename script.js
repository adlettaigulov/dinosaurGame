const dinosaur = document.querySelector(".dinosaur");
const cactus = document.querySelector(".cactus");

document.addEventListener("keydown", function (e) {
	dinosaurJump();
});

function dinosaurJump() {
	if (dinosaur.classList != "jump") {
		dinosaur.classList.add("jump");
	}
	setTimeout(function () {
		dinosaur.classList.remove("jump");
	}, 300);
}

gameOver();
scoreCounter();

function gameOver() {
	let isAlive = setInterval(function () {
		let dinosaurTop = parseInt(
			window.getComputedStyle(dinosaur).getPropertyValue("top")
		);
		let cactusLeft = parseInt(
			window.getComputedStyle(cactus).getPropertyValue("left")
		);
		if (cactusLeft < 100 && cactusLeft > 50 && dinosaurTop >= 140) {
			alert("Игра окончена!");
			document.location.reload();
		}
	}, 10);
}

function scoreCounter() {
	let score = 0;
	setInterval(() => {
		score++;
		document.querySelector(".score").innerHTML = score;
	}, 10);
}
