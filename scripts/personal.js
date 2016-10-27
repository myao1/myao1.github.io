/// <reference path="C:\Users\michael.yao\typings\jquery\jquery.d.ts" />

var geo;

$(document).ready(function () {
	$('input[type=radio][name=pagestyling]').change(function(){
		if(this.value == 'default'){
			Private.CssManager.swapStyleSheet('mainstyle', 'styles/styles.css');
		}else if(this.value == 'alternate'){
			Private.CssManager.swapStyleSheet('mainstyle', 'styles/altstyles.css');
		}
	});


	window.geo = $("#geography");

	var localstore = new LocalStorage();
	document.getElementById("localClickButton").onclick = localstore.localClicks;
	//document.getElementById("localClickButton").addEventListener("click", localstore.localClicks);

	var sessionstore = new SessionStorage();
	//document.getElementById("sessionClickButton").addEventListener()
	document.getElementById("sessionClickButton").onclick = sessionstore.sessionClicks;

	// Prototype pattern
	var calc = new protospace.Calculator('calcOutput');
	calc.add(3, calc.tres);
	calc.multiply(4,5);

	protospace.Calculator.prototype.tres = 4;
	calc.add(3, calc.tres);

	//module pattern
	var calc2 = new modulespace.Calculator('calcOutput');
	calc2.add(5,5);

	//Revealing module pattern (self invoking example)
	var calculator = function(eq) {
		//private members 
		var eqCtl = document.getElementById(eq),
			add = function(x,y) {
				var val = x+y;
				eqCtl.innerHTML += "<br />Revealing Module: " + val + "<br />";
			},
			subtract = function(x,y){
				var val = x-y;
				eqCtl.innerHTML += "<br />Revealing Module: " + val + "<br />";
			};

		return{ 
			add: add, 
			subtract: subtract	
		};
	}('calcOutput');

	//revealing module pattern
	calculator.add(9,9);
	calculator.subtract(4,5);

	// $('#loadFromOther').load('index.html', function(){
	// 	alert('load happened');
	// });

	document.getElementById('another').addEventListener('click', function(){
		$('#showtest').click();
	});

	$('another').blur(function(){
		alert("blurred");
	});
	
	
});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		alert(xhr.responseText);
	}
};
xhr.open("GET", "filename", true);
xhr.send();

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

var LocalStorage = function (){
	var storeLocal = function (key, value){
		if(typeof(Storage) !== "undefined"){
			try{
				localStorage.setItem(key, value);
				return true;
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR){
					alert('Storage quota exceeded');
				}
			}
		}else{
			return false;
		}
	};
	var retrieveLocal = function (key){
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
	};
	var localClicks = function(){
		var count = retrieveLocal("clicks");
		if(!count){
			count = 1;
		}else{
			count = Number(count);
			count++;
		}
		storeLocal("clicks", count.toString());
		document.getElementById("localClicks").innerHTML = "<p>" + count + "</p>";
	}
	
	return {
		localClicks:localClicks
	};
};

var SessionStorage = function () {
	var storeSession = function(key, value){
		if(typeof(Storage) !== "undefined"){
			sessionStorage.setItem(key, value);
			return true;
		}else{
			return false;
		}
	};
	var retrieveSession = function (key) {
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
	};
	var sessionClicks = function () {
		var count = retrieveSession("clicks");
		if(!count){
			count = 1;
		}else{
			count = Number(count);
			count++;
		}
		storeSession("clicks", count.toString());
		document.getElementById("sessionClicks").innerHTML = "<p>" + count + "</p>";
	};
	
	return {
		sessionClicks:sessionClicks
	};
};

function Route () {
	var name = '', grade = '';

	Object.defineProperties(name, {
		newDataProperty: {
			value: 101,
			writable: true,
			enumerable: true,
			configurable: true
		},
		newAccessorProperty:{
			set: function(x){
				this.grade = x;
			},
			get: function(){
				return this.grade;
			},
			enumerable: true,
			configurable: true
		}
	});
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

//Prototype pattern
var protospace = protospace || {};

protospace.Calculator = function(eq){
	this.eqCtl = document.getElementById(eq);
};

protospace.Calculator.prototype = {
	add: function (x,y){
		var val = x + y;
		this.eqCtl.innerHTML += "<br />Prototype: " + val + "<br />";
	},
	multiply: function(x,y){
		var val = x*y;
		this.eqCtl.innerHTML += "<br />Prototype: " + val + "<br />";
	},
	tres: 3
};

//Module pattern
var modulespace = modulespace || {};

modulespace.Calculator = function(eq) {
	//private variables and functions
	var targetDiv = document.getElementById(eq);

	return {
		//public members
		add: function(x,y){
			targetDiv.innerHTML += "<br />Module: " + (x+y) + "<br />";
		}
	};
};

//Revealing Prototype pattern
var Calculator = function (eq) {
	//variables defined here
	this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = function () {
	//functions defined here
	var add = function (x,y){
		var val = x + y;
		this.eqCtl.innerHTML = val;
	};
	return {
		//public members
		add : add 
	};
}();