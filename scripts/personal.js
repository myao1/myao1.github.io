var geo;

$(document).ready(function() {
	// var changeColorButton = document.getElementById("colorButton");
	// changeColorButton.addEventListener('click', changeFontColor("red"));
	// testChange();
	// changeFontColor("green");
	//changeColorButton.addEventListener('onclick', testChange());
	window.geo = $("#geography");
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



function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}else{
		geo.html("Geolocation is not supported by this browser");
	}
}

function showPosition(position){
	geo.html("<p>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Accuracy: " + position.coords.accuracy + "</p>");
	//geo.html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
	var latlon = position.coords.latitude + "," + position.coords.longitude;
	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
	geo.append("<img src='" + img_url+"'>");
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

function storeLocal(key, value){
	if(typeof(Storage) !== "undefined"){
		localStorage.setItem(key, value);
		return true;
	}else{
		return false;
	}
}

function retrieveLocal(key){
	if(typeof(Storage) !== "undefined"){
		var value = localStorage.getItem(key);
		if(value !== "undefined"){
			return value;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function localClicks(){
	var count = retrieveLocal("clicks");
	if(!count){
		count = 1;
	}else{
		count = Number(count);
		count++;
	}
	storeLocal("clicks", count.toString());
	$("#localClicks").html("<p>" + count + "</p>");
}

function storeSession(key, value){
	if(typeof(Storage) !== "undefined"){
		sessionStorage.setItem(key, value);
		return true;
	}else{
		return false;
	}
}

function retrieveSession(key){
	if(typeof(Storage)!== "undefined"){
		var value = sessionStorage.getItem(key);
		if(value !== "undefined"){
			return value;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

function sessionClicks(){
	var count = retrieveSession("clicks");
	if(!count){
		count = 1;
	}else{
		count = Number(count);
		count++;
	}
	storeSession("clicks", count.toString());
	$("#sessionClicks").html("<p>" + count + "</p>");
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

var Managers = {};
Managers.CssManager = {
	addStyleSheet: function(id, url){
		var newStyleSheet = document.createElement("link");
		newStyleSheet.setAttribute("rel", "stylesheet");
		newStyleSheet.setAttribute("type", "text/css");
		newStyleSheet.setAttribute("id", id);
		newStyleSheet.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(newStyleSheet);
	},

	removeStyleSheet: function(id){
		var currentStyleSheet = document.getElementById(id);
		if(currentStyleSheet){
			currentStyleSheet.parentNode.removeChild(currentStyleSheet);
		}
	},

	swapStyleSheet: function(id, url){
		this.removeStyleSheet(id);
		this.addStyleSheet(id, url);
	}

}

var Private = {};
Private.CssManager = (function(){
	var doc = document;
	var setAttributes = function(element, attributes){
		for(attribute in attributes){
			element[attribute] = attributes[attribute];
		}
	}

	return{
		addStyleSheet: function(id, url){
			var newStyleSheet = doc.createElement("link");
			setAttributes(newStyleSheet, {
				rel: "stylesheet",
				type: "text/css",
				id: id,
				href: url
			});
			doc.getElementsByTagName("head")[0].appendChild(newStyleSheet);
		},

		removeStyleSheet: function(id){
			var currentStyleSheet = doc.getElementById(id);
			if(currentStyleSheet){
				currentStyleSheet.parentNode.removeChild(currentStyleSheet);
			}
		},

		swapStyleSheet: function(id, url){
			this.removeStyleSheet(id);
			this.addStyleSheet(id, url);
		}
	}
})();

var closureTesting = (function(){
	var bufferAr = [
		'<div id="',
		'',
		'" style="position:absolute;top:',
		'',
		'"px;left:',
		'',
		'"px;width:',
		'',
		'"px;height:',
		'',
		'px;overflow:hidden;"><img src="',
		'',
		'" width="',
		'',
		'" height="',
		'',
		'" alt="',
		'',
		'"></div>'
	];

	return (function(url, id, width, height, top, left, altText){
		bufferAr[1] = id;
		bufferAr[3] = top;
		bufferAr[5] = left;
		bufferAr[13] = (bufferAr[7] = width);
		bufferAr[15] = (bufferAr[9] = height);
		bufferAr[11] = url;
		bufferAr[17] = altText;
		return bufferAr.join('');
	});
})();

$(document).ready(function () {
	$('input[type=radio][name=pagestyling]').change(function(){
		if(this.value == 'default'){
			Private.CssManager.swapStyleSheet('mainstyle', 'styles/styles.css');
		}else if(this.value == 'alternate'){
			Private.CssManager.swapStyleSheet('mainstyle', 'styles/altstyles.css');
		}
	});
});