var testing = function(){
	if(1 < 2){
		return false;
	}else{
		return true;
	}
};

$('a#notclick').click(function() {
	alert("You shouldn't have done that. Should not have done that");
	
});

var changeColorButton = document.getElementById("changeColor");
changeColorButton.addEventListener('click', changeFontColor(red));

//var testing2 = function(){
//	$('starter').
//}

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
	var section = document.getElementById("changestyles");
	section.firstChild.style.color = color;
}