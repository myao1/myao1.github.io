$(document).ready(function() {
	var changeColorButton = document.getElementById("colorButton");
	changeColorButton.addEventListener('click', changeFontColor("red"));
});

//var testing2 = function(){
//	$('starter').
//}

var testing = function(){
	if(1 < 2){
		return false;
	}else{
		return true;
	}
};


function canvasDrawing() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0,0);
	ctx.lineTo(200, 100);
	ctx.stroke();
}

function moveStuffAround(){
	var e = document.getElementById();
}

function changeFontColor(color){
	var x = document.getElementById("changetextcolor");
	x.style.color = color;
}