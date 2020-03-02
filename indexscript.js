window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("myBtn").addEventListener("click", changeBlack);
    document.getElementById("follow").addEventListener("click", changeWhite);
});

function changeBlack() {
	document.body.style.background = '#000000';
}

function changeWhite() {
	document.body.style.background = '#ffffff';
}