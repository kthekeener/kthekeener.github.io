let lightClkd = false;
let lightsOn = true;
let imVal = 0;
let changeVal = 0;
let iter = 0;
let synth = window.speechSynthesis;
let imId = "im1";

//This is the function which turns off the lights. It turns the background black and adjusts a few variables so that javascript knows
//what has been clicked and what hasn't

function changeBlack() {
	document.body.style.background = '#000000';
	lightClkd = true;
	lightsOn = false;
}
//similarly, this is the function that turns on the lights and adjusts the lights on variable so that javascript can keep track of the state we are currently in.
function changeWhite() {
	document.body.style.background = '#ffffff';
	lightsOn = true;
}

//before you turn off the light for the first time, we run this function. It leads you down the grid so that eventually, perhaps, you decide
// to turn off the lights.

function beforeLight() {
	if (iter == 0){
		changeVal = imVal%3 + 2;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/eye.JPG";
		document.getElementById(imId).alt= changeVal + "an eye";
		iter++;
	} else if (iter == 1){
		changeVal = 4 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/bulb.JPG";
		document.getElementById(imId).alt= changeVal + "a lightbulb, light to light";
		iter++;
	} else if (iter == 2){
		changeVal = 7 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/proof.JPG";
		document.getElementById(imId).alt= changeVal + "Meyer's (or Putnam's) Proof of the Existence of God";
		iter++;
	} else if (iter == 3){
		changeVal = 9 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/figure.JPG";
		document.getElementById(imId).alt= changeVal + "Vitruvius, the perfect man, the individual visual form";
		iter++;
	} else if (iter == 4){
		changeVal = 12 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/grid.JPG";
		document.getElementById(imId).alt= changeVal + "dots on a plane, Cartesian isolation. Mind cleansed of society to seek the light within. I think, therefore...";
		iter++;
	} else if (iter == 5){
		changeVal = 16 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/proof_figure.JPG";
		document.getElementById(imId).alt= changeVal + "Meyer's Proof the existence of the Vitruvian man's attempt to ascend to Glory. ...Therefore, I am";
		iter++;
	} else if (iter == 6){
		changeVal = 19 + imVal%3;
		imId = "im" + changeVal;
		document.getElementById(imId).src="images/eye_bulb.JPG";
		document.getElementById(imId).alt= changeVal + "The eye sees in the light. The ray of sight seeks ray of enlightenment, man-made systems making sight.";
		iter++
	} else if (iter == 7) {
		document.getElementById("im24").src="images/circle.JPG";
		document.getElementById("im24").alt="24. Lord, if you are the infinite sphere whose center is everywhere and whose circumference is nowhere, then have we not abandoned you? Lord have mercy on us."
	} else {
		return;
	}
}

//when the lights are off, we set this function to run. If you press all the right images in the right order, you get a little reflection I wrote
//if not, you get something a bit strange and fragmented, which I think can be kind of interesting too.

function afterDark(imNum){
	if (imNum == 1){
		document.getElementById("im6").src="images/eye.JPG";
		document.getElementById("im6").alt="6: an eye";
		document.getElementById("im2").src="images/eye.JPG";
		document.getElementById("im2").alt="2: an eye";
	} else if (imNum == 4) {
		document.getElementById("im1").src="images/compgrid1.jpg";
		document.getElementById("im1").alt="1: The internet has shaped me.";
		document.getElementById("im6").src="images/compgrid6.jpg";
		document.getElementById("im6").alt="6: Acoustic, like waves of light spoken into form, a space for voices to call out to me from every direction and for me to call out in every direction as well.";
		document.getElementById("im5").src="images/grid.JPG";
		document.getElementById("im5").alt="5: dots on a plane, Cartesian isolation. Mind cleansed of society to seek the light within. I think, therefore...";
	} else if (imNum == 7) {
		document.getElementById("im8").src="images/compgrid8.jpg";
		document.getElementById("im8").alt="8: But what is the hierarchy in our secondary universe of the internet, this strange abstraction from the natural world? How does one begin to find order in an ever changing, ever expanding environment with no beginning, no end?";
		document.getElementById("im10").src="images/compgrid10.jpg";
		document.getElementById("im10").alt="10: But how are we to know what that order is? Just because it may be there, that doesn’t mean that we can understand it.";
		document.getElementById("im3").src="images/eye.JPG";
		document.getElementById("im3").alt="3: an eye";
	} else if (imNum == 10) {
		document.getElementById("im9").src="images/eye.JPG";
		document.getElementById("im9").alt="9: an eye";
		document.getElementById("im15").src="images/eye.JPG";
		document.getElementById("im15").alt="15: an eye";
		document.getElementById("im12").src="images/eye.JPG";
		document.getElementById("im12").alt="12: an eye";
	}else if (imNum == 13) {
		document.getElementById("im11").src="images/compgrid11.jpg";
		document.getElementById("im11").alt="11: To find one would be to find the exchange rate between a visual and an acoustic space, a task which we have left, in its rawest form of binary code, for our dear little computers to tackle.";
		document.getElementById("im18").src="images/proof_figure.JPG";
		document.getElementById("im18").alt="18: Meyer's Proof the existence of the Vitruvian man's attempt to ascend to Glory. ...Therefore, I am";
	} else if (imNum == 16) {
		document.getElementById("im13").src="images/compgrid13.jpg";
		document.getElementById("im13").alt="13: Here, I can hear in the dark, even if I cannot touch in the silence.";
		document.getElementById("im17").src="images/compgrid17.jpg";
		document.getElementById("im17").alt="17: The cosmos of the internet is perhaps the greatest work of art that we, whoever we are, those of us who are on it, have ever produced.";
	} else if (imNum == 19) {
		document.getElementById("im20").src="images/eye.JPG";
		document.getElementById("im20").alt="20: an eye";
		document.getElementById("im18").src="images/eye.JPG";
		document.getElementById("im18").alt="18: an eye";
	}else if (imNum == 22) {
		document.getElementById("im19").src="images/compgrid19.jpg";
		document.getElementById("im19").alt="19: Maybe we have conformed to its image too.";
		document.getElementById("im20").src="images/eye_bulb.JPG";
		document.getElementById("im20").alt="20: The eye sees in the light. The ray of sight seeks ray of enlightenment, man-made systems making sight.";
	} else if (imNum == 2){
		document.getElementById("im4").src="images/eye.JPG";
		document.getElementById("im4").alt="4: an eye";
		document.getElementById("im1").src="images/eye.JPG";
		document.getElementById("im1").alt="1: an eye";
	}else if (imNum == 5) {
		document.getElementById("im3").src="images/compgrid3.jpg";
		document.getElementById("im3").alt="3: I grew up nosing around deviantArt and lingering on Lord of the Rings fan sites and browsing the way-back-machine’s archives of historical re-enactors’ homepages that had long gone to ruin.";
		document.getElementById("im4").src="images/compgrid4.jpg";
		document.getElementById("im4").alt="4: Has the internet not brought back a space whose center is everywhere and whose margins are nowhere?";
		document.getElementById("im12").src="images/figure.JPG";
		document.getElementById("im12").alt="12: Vitruvius, the perfect man, the individual visual form";
	} else if (imNum == 8) {
		document.getElementById("im7").src="images/compgrid7.jpg";
		document.getElementById("im7").alt="7: This, unlike sight, is no longer linear--extending radially from the point of the observer either outwards like a polar graph or introspectively onto the self. It is easy to begin to assign an order starting at the eyes.";
	} else if (imNum == 11) {
		document.getElementById("im9").src="images/eye.JPG";
		document.getElementById("im9").alt="9: an eye";
	}else if (imNum == 14) {
		document.getElementById("im18").src="images/compgrid18.jpg";
		document.getElementById("im18").alt="18: We have made it in our image, maybe.";
	} else if (imNum == 17) {
		document.getElementById("im19").src="images/eye.JPG";
		document.getElementById("im19").alt="19: an eye";
		document.getElementById("im15").src="images/eye.JPG";
		document.getElementById("im15").alt="15: an eye";
		document.getElementById("im18").src="images/eye.JPG";
		document.getElementById("im18").alt="18: an eye";
	} else if (imNum == 23) {
		document.getElementById("im15").src="images/compgrid15.jpg";
		document.getElementById("im15").alt="15: Asking, I find. Knocking, the door of the drawing room is opened to me, and I am welcomed into the salon of the like minded. Or the dissenters, whichever I choose. We are nearer to one another now, at least the half of us who are tapped into the wires of the net.";
		document.getElementById("im24").src="images/compgrid24.jpg";
		document.getElementById("im24").alt="24: Will those whose hands are idle be left to starve? Or will they be consumed?";
		document.getElementById("im22").src="images/bulb.JPG";
		document.getElementById("im22").alt="22: a lightbulb, light to light";
	} else if (imNum == 3) {
		document.getElementById("im1").src="images/eye.JPG";
		document.getElementById("im1").alt="1: an eye";
		document.getElementById("im5").src="images/eye.JPG";
		document.getElementById("im5").alt="5: an eye";
		document.getElementById("im9").src="images/eye.JPG";
		document.getElementById("im9").alt="9: an eye";
	} else if (imNum == 6) {
		document.getElementById("im2").src="images/compgrid2.jpg";
		document.getElementById("im2").alt="2: In a large part it has been my home.";
		document.getElementById("im9").src="images/compgrid9.jpg";
		document.getElementById("im9").alt="9: We must believe that there is some linear order on the nodes inside our space unless we’re willing to sacrifice (the axiom of) Choice as well.";
	} else if (imNum == 9) {
		document.getElementById("im5").src="images/compgrid5.jpg";
		document.getElementById("im5").alt="5: This is, at least, what McLuhan seemed to believe.";
	} else if (imNum == 12) {
		document.getElementById("im13").src="images/eye.JPG";
		document.getElementById("im13").alt="13: an eye";
		document.getElementById("im11").src="images/eye.JPG";
		document.getElementById("im11").alt="11: an eye";
		document.getElementById("im10").src="images/eye.JPG";
		document.getElementById("im10").alt="10: an eye";
	} else if (imNum == 15) {
		document.getElementById("im12").src="images/compgrid12.jpg";
		document.getElementById("im12").alt="12: No one has a mind that can hold the answers. So enlightened or not, I am still sufficient. I play this tangled chaos by ear just like everybody else.";
		document.getElementById("im14").src="images/compgrid14.jpg";
		document.getElementById("im14").alt="14: Here I do not need to rely on insight to make sense.";
		document.getElementById("im16").src="images/compgrid16.jpg";
		document.getElementById("im16").alt="16: As in days gone by, we are a village. Folkloric stories morphing in the mouth of a teller like memes without a traceable source, bagpipes learned without a teacher like websites learned by inspecting code.";
	} else if (imNum == 18) {
		document.getElementById("im20").src="images/compgrid20.jpg";
		document.getElementById("im20").alt="20: It certainly has changed us. It may take a while to see how much it has.";
		document.getElementById("im23").src="images/compgrid23.jpg";
		document.getElementById("im23").alt="23: The present is the best time to choose which crop becomes our staple.";
	} else if (imNum == 21) {
		document.getElementById("im21").src="images/compgrid21.jpg";
		document.getElementById("im21").alt="21. If the net is an environment, the soil for a culture, planting will be done. Harvesting, reaping. ";
		document.getElementById("im22").src="images/compgrid22.jpg";
		document.getElementById("im22").alt="22. It certainly has changed us. It may take a while to see how much it has.";
	} else if (imNum == 24) {
		document.getElementById("im20").src="images/eye.JPG";
		document.getElementById("im20").alt="20: an eye";
		document.getElementById("im22").src="images/eye.JPG";
		document.getElementById("im22").alt="22: an eye";
		document.getElementById("im16").src="images/eye.JPG";
		document.getElementById("im16").alt="16: an eye";
	}
}

//a slew of ChangeIm# functions because I wasn't able to figure out how to give the event listener a function that takes an input without it executing the function immediately
function changeIm1() {
	if (lightClkd == false){
		imVal = 1;
		beforeLight();	
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(1);
	} else {
		return;
	}
}

function changeIm2() {
	if (lightClkd == false){
		imVal = 2;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(2);
	} else {
		return;
	}
}

function changeIm3() {
	if (lightClkd == false){
		imVal = 3;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(3);
	} else {
		return;
	}
}

function changeIm4() {
	if (lightClkd == false){
		imVal = 4;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(4);
	} else {
		return;
	}
}

function changeIm5() {
	if (lightClkd == false){
		imVal = 5;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(5);
	} else {
		return;
	}
}

function changeIm6() {
	if (lightClkd == false){
		imVal = 6;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(6);
	} else {
		return;
	}
}

function changeIm7() {
	if (lightClkd == false){
		imVal = 7;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(7);
	} else {
		return;
	}
}

function changeIm8() {
	if (lightClkd == false){
		imVal = 8;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(8);
	} else {
		return;
	}
}

function changeIm9() {
	if (lightClkd == false){
		imVal = 9;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(9);
	} else {
		return;
	}
}

function changeIm10() {
	if (lightClkd == false){
		imVal = 10;
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(10);
	} else {
		return;
	}
}

function changeIm11() {
	imVal = 11;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imval);
	} else {
		return;
	}
}

function changeIm12() {
	imVal = 12;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm13() {
	imVal = 13;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm14() {
	imVal = 14;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm15() {
	imVal = 15;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm16() {
	imVal = 16;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm17() {
	imVal = 17;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm18() {
	imVal = 18;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm19() {
	imVal = 19;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm20() {
	imVal = 20;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm21() {
	imVal = 21;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm22() {
	imVal = 22;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm23() {
	imVal = 23;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

function changeIm24() {
	imVal = 24;
	if (lightClkd == false){
		beforeLight();
	} else if (lightClkd == true && lightsOn == false) {
		afterDark(imVal);
	} else {
		return;
	}
}

//function for reading off the descriptions of the images in rows
function readImDescriptions() {
	for(i=1; i<25; i++){
		let imId = "im" + i;
		let utterThis = new SpeechSynthesisUtterance(document.getElementById(imId).alt);
		synth.speak(utterThis);
	}

}

//and here, after we've listed all our useful functions: the event listeners themselves: 

document.getElementById("b8-3").addEventListener("click", changeBlack);
document.getElementById("follow").addEventListener("click", changeWhite);
document.getElementById("b1-1").addEventListener("click", changeIm1);
document.getElementById("b1-2").addEventListener("click", changeIm2);
document.getElementById("b1-3").addEventListener("click", changeIm3);
document.getElementById("b2-1").addEventListener("click", changeIm4);
document.getElementById("b2-2").addEventListener("click", changeIm5);
document.getElementById("b2-3").addEventListener("click", changeIm6);
document.getElementById("b3-1").addEventListener("click", changeIm7);
document.getElementById("b3-2").addEventListener("click", changeIm8);
document.getElementById("b3-3").addEventListener("click", changeIm9);
document.getElementById("b4-1").addEventListener("click", changeIm10);
document.getElementById("b4-2").addEventListener("click", changeIm11);
document.getElementById("b4-3").addEventListener("click", changeIm12);
document.getElementById("b5-1").addEventListener("click", changeIm13);
document.getElementById("b5-2").addEventListener("click", changeIm14);
document.getElementById("b5-3").addEventListener("click", changeIm15);
document.getElementById("b6-1").addEventListener("click", changeIm16);
document.getElementById("b6-2").addEventListener("click", changeIm17);
document.getElementById("b6-3").addEventListener("click", changeIm18);
document.getElementById("b7-1").addEventListener("click", changeIm19);
document.getElementById("b7-2").addEventListener("click", changeIm20);
document.getElementById("b7-3").addEventListener("click", changeIm21);
document.getElementById("b8-1").addEventListener("click", changeIm22);
document.getElementById("b8-2").addEventListener("click", changeIm23);
document.getElementById("b8-3").addEventListener("click", changeIm24);
document.getElementById("ear").addEventListener("click", readImDescriptions);

