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
	ctx.color = "red";
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

function toggleDisplay(){
	$("#moreInfo").toggle('slow');
}

function changeFontColor(color){
	// var x = document.getElementById("changetextcolor");
	// x.style.color = color;
	// x.style.backgroundColor = "powderblue";
	var y = $("#changetextcolor");
	y.css("background-color", "powderblue");
	y.css("color", color);
	if(y.hasClass("test")){
		y.removeClass("test");
	}else{
		y.addClass("test");
	}
}

function mytranslate(){
	var x = $("#2dtransform");
	x.addClass("translate");
}

function reset2d(){
	var x = $("2dtransform");
	if(x.hasClass("translate")){
		x.removeClass("translate");
	}
}

function testChange(){
	//javascript
	// var x = document.getElementById("changetextcolor");
	// x.style.backgroundColor = "powderblue";
	// x.className += "test";

	//jquery
	$("#changetextcolor").addClass("test");
	// x.style.borderRadius = "50%";
}