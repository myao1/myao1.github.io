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

function rotate(){
	var x = $("#2dtransform");
	x.addClass("rotate");
}

function scale(){
	var x = $("#2dtransform");
	x.addClass("scale");
}

function skewX(){
	var x = $("#2dtransform");
	x.addClass("skewX");
}

function skewY(){
	var x = $("#2dtransform");
	x.addClass("skewY");
}

function matrix(){
	var x = $("#2dtransform");
	x.addClass("matrix");
}

function reset2d(){
	var x = $("#2dtransform");
	if(x.hasClass("translate")){
		x.removeClass("translate");
	}
	if(x.hasClass("rotate")){
		x.removeClass("rotate");
	}
	if(x.hasClass("scale")){
		x.removeClass("scale");
	}
	if(x.hasClass("skewY")){
		x.removeClass("skewY");
	}
	if(x.hasClass("skewX")){
		x.removeClass("skewX");
	}
	if(x.hasClass("matrix")){
		x.removeClass("matrix");
	}
}

var geo = $("#geography");

function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}else{
		geo.html("Geolocation is not supported by this browser");
	}
}

function showPosition(position){
	// geo.html("<p>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "</p>");
	geo.html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
	// var latlon = position.coords.latitude + "," + position.coords.longitude;
	// var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
	// geo.append("<img src='" + img_url+"'>");
}

function showError(error){
	switch(error.code){
		case error.PERMISSION_DENIED:
			geo.html("User denied teh request for location");
			break;
		case error.POSITION_UNAVAILABLE:
			geo.html("Location info is unavailable");
			break;
		case error.TIMEOUT:
			geo.html("the request timed out");
			break;
		case error.UNKNOWN_ERROR:
			geo.html("unknown error occurred");
			break;
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