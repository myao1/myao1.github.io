$(document).ready(function() {
	var changeColorButton = document.getElementById("colorButton");
	// changeColorButton.addEventListener('click', changeFontColor("red"));
	testChange();
	//changeColorButton.addEventListener('onclick', testChange());
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
	x.style.backgroundColor = "powderblue";
}

function testChange(){
	var x = document.getElementById("changetextcolor");
	x.style.backgroundColor = "powderblue";
	x.style.borderRadius = "50%";
}