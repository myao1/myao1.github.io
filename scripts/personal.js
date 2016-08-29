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