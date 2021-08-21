let myKeys = document.querySelectorAll('.key');


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
		// alert("button " + myKeys[x].innerHTML + " is clicked");
		// let snd = new Audio('doremi/do.mp3');
		// snd.play();
		// playSnd('f');
		playSnd(myKeys[x].innerHTML.toLowerCase());

    })
}

document.addEventListener('keydown', function (btn) {

	playSnd(btn.key.toLowerCase());

	let pressed_key = btn.key.toLowerCase();

	for (let x = 0; x < myKeys.length; x++ ) {
		myKeys[x].classList.remove('activated');
	}

	for (let x = 0; x < myKeys.length; x++ ) {
		if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
			myKeys[x].classList.add('activated');
		}
	}

})

function playSnd(key) {
	switch (key) {
		case 'c':
			var snd = new Audio('do.mp3');
			snd.play();
			break;
		case 'd':
			var snd = new Audio('re.mp3');
			snd.play();
			break;
		case 'e':
			var snd = new Audio('mi.mp3');
			snd.play();
			break;
		case 'f':
			var snd = new Audio('fa.mp3');
			snd.play();
			break;
		case 'g':
			var snd = new Audio('sol.mp3');
			snd.play();
			break;
		case 'a':
			var snd = new Audio('la.mp3');
			snd.play();
			break;
		case 'b':
			var snd = new Audio('ti.mp3');
			snd.play();
			break;
		case 'k':
			var snd = new Audio('oh.mp3');
			snd.play();
			break;
		default:
			console.log(key);
	}
}










