$(document).ready(function() {
	// var changeColorButton = document.getElementById("colorButton");
	// changeColorButton.addEventListener('click', changeFontColor("red"));
	// testChange();
	// changeFontColor("green");
	//changeColorButton.addEventListener('onclick', testChange());
});


function canvasDrawing() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(50,50);
	ctx.lineTo(300, 300);
	ctx.stroke();

	ctx.moveTo(300, 50);
	ctx.lineTo(50, 300);
	ctx.stroke();
}

function moveStuffAround(){
	var e = document.getElementById();
}

function changeFontColor(color){
	var x = document.getElementById("changetextcolor");
	x.style.color = color;
	x.style.backgroundColor = "powderblue";
}

function testChange(){
	var x = document.getElementById("changetextcolor");
	x.style.backgroundColor = "powderblue";
	x.style.borderRadius = "50%";
}