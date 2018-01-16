!function($){for(var supportedCSS,supportedCSSOrigin,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "),a=0;a<toCheck.length;a++)void 0!==styles[toCheck[a]]&&(supportedCSS=toCheck[a]);supportedCSS&&(supportedCSSOrigin=supportedCSS.replace(/[tT]ransform/,"TransformOrigin"),"T"==supportedCSSOrigin[0]&&(supportedCSSOrigin[0]="t")),eval('IE = "v"=="\v"'),jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);else{var f=$.extend(!0,{},a),g=new Wilq32.PhotoEffect(e,f)._rootObj;b.push($(g))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}}),Wilq32=window.Wilq32||{},Wilq32.PhotoEffect=function(){return supportedCSS?function(a,b){a.Wilq32={PhotoEffect:this},this._img=this._rootObj=this._eventObj=a,this._handleRotation(b)}:function(a,b){if(this._img=a,this._onLoadDelegate=[b],this._rootObj=document.createElement("span"),this._rootObj.style.display="inline-block",this._rootObj.Wilq32={PhotoEffect:this},a.parentNode.insertBefore(this._rootObj,a),a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}(),Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{},"number"!=typeof this._angle&&(this._angle=0),"number"==typeof a.angle&&(this._angle=a.angle),this._parameters.animateTo="number"==typeof a.animateTo?a.animateTo:this._angle,this._parameters.step=a.step||this._parameters.step||null,this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing,this._parameters.duration="duration"in a?a.duration:a.duration||this._parameters.duration||1e3,this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction,this._parameters.center=a.center||this._parameters.center||["50%","50%"],"string"==typeof this._parameters.center[0]?this._rotationCenterX=parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._rotationCenterX=this._parameters.center[0],"string"==typeof this._parameters.center[1]?this._rotationCenterY=parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._rotationCenterY=this._parameters.center[1],a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},_handleRotation:function(a,b){return supportedCSS||this._img.complete||b?(this._setupParameters(a),void(this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart())):void this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind;for(var c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(var c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=this._img.width,b=this._img.height;this._imgWidth=a,this._imgHeight=b,this._img.parentNode.removeChild(this._img),this._vimage=this.createVMLNode("image"),this._vimage.src=this._img.src,this._vimage.style.height=b+"px",this._vimage.style.width=a+"px",this._vimage.style.position="absolute",this._vimage.style.top="0px",this._vimage.style.left="0px",this._aspectW=this._aspectH=1,this._container=this.createVMLNode("group"),this._container.style.width=a,this._container.style.height=b,this._container.style.position="absolute",this._container.style.top="0px",this._container.style.left="0px",this._container.setAttribute("coordsize",a-1+","+(b-1)),this._container.appendChild(this._vimage),this._rootObj.appendChild(this._container),this._rootObj.style.position="relative",this._rootObj.style.width=a+"px",this._rootObj.style.height=b+"px",this._rootObj.setAttribute("id",this._img.getAttribute("id")),this._rootObj.className=this._img.className,this._eventObj=this._rootObj;for(var c;c=this._onLoadDelegate.shift();)this._handleRotation(c,!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id")),this._rootObj.className=this._img.className,this._imgWidth=this._img.naturalWidth,this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a,this._height=3*a,this._aspectW=this._img.offsetWidth/this._img.naturalWidth,this._aspectH=this._img.offsetHeight/this._img.naturalHeight,this._img.parentNode.removeChild(this._img),this._canvas=document.createElement("canvas"),this._canvas.setAttribute("width",this._width),this._canvas.style.position="relative",this._canvas.style.left=-this._img.height*this._aspectW+"px",this._canvas.style.top=-this._img.width*this._aspectH+"px",this._canvas.Wilq32=this._rootObj.Wilq32,this._rootObj.appendChild(this._canvas),this._rootObj.style.width=this._img.width*this._aspectW+"px",this._rootObj.style.height=this._img.height*this._aspectH+"px",this._eventObj=this._canvas,this._cnv=this._canvas.getContext("2d");for(var b;b=this._onLoadDelegate.shift();)this._handleRotation(b,!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer),this._animateStartTime=+new Date,this._animateStartAngle=this._angle,this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img){var c=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration);this._rotate(~~(10*c)/10)}this._parameters.step&&this._parameters.step(this._angle);var d=this;this._timer=setTimeout(function(){d._animate.call(d)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a,this._container.style.rotation=a%360+"deg",this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px",this._vimage.style.left=-(this._rotationCenterX-this._imgWidth/2)+"px",this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px",this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:supportedCSS?function(a){this._angle=a,this._img.style[supportedCSS]="rotate("+a%360+"deg)",this._img.style[supportedCSSOrigin]=this._parameters.center.join(" ")}:function(b){this._angle=b,b=b%360*a,this._canvas.width=this._width,this._canvas.height=this._height,this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH),this._cnv.translate(this._rotationCenterX,this._rotationCenterY),this._cnv.rotate(b),this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY),this._cnv.scale(this._aspectW,this._aspectH),this._cnv.drawImage(this._img,0,0)}}()},IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())}(jQuery);

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.extend( jQuery.easing,
{
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
});



//$(function() {
$(window).load(function() {
	if ($(window).width() < 1280) return;
	
	var hourglassWidth = 150;
	if ($(window).width() < 1350) hourglassWidth = 120;

	var hourglassDuration = 40000;
	var hourglassHeight = hourglassWidth * 1.63819;
	var sandWidth = Math.ceil(hourglassWidth * 0.47236);
	var sandHeight = Math.ceil(hourglassWidth * 0.47236 * 1.1523);
	
	$('head').append('<style type="text/css">@media screen and (max-width:1279px){#toggl-hourglass-box{display:none!important}}@keyframes show-grow{0%{display:none;opacity:0}1%{display:block;opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}@keyframes hide-shrink{0%{display:block;opacity:1;transform:scale(1)}99%{display:block;opacity:0;transform:scale(0)}100%{opacity:0;display:none}}#toggl-hourglass,#toggl-hourglass-label{display:none;}#toggl-hourglass.visiblegrow{display:block;-webkit-transform:scale(1);transform:scale(1);opacity:1;-webkit-animation:show-grow .3s ease-in-out;animation:show-grow .3s ease-in-out}#toggl-hourglass-box.hide-hourglass{display:none;-webkit-transform:scale(0);transform:scale(0);opacity:0;-webkit-animation:hide-shrink .3s ease-in-out;animation:hide-shrink .3s ease-in-out}@keyframes drops-animation{from{transform:translateY(0)}to{transform:translateY(30px)}}@keyframes drops-animation-top{from{transform:translateY(30px)}to{transform:translateY(0)}}.toggl-hourglass-sand{height:0;transition:height ' + parseInt(hourglassDuration/1000) + 's linear}.toggl-hourglass-sand.grow{height:' + sandHeight + 'px;transition:height ' + parseInt(hourglassDuration/1000) + 's linear}.elastic-label{animation:elastic-label 1s}@keyframes elastic-label{0%{left:0;width:0}40%{width:120%;left:-10%}100%{left:0;width:100%}}.elastic-label-back{animation:elastic-label-back .5s}@keyframes elastic-label-back{0%{width:0}40%{width:30%}100%{width:26.794%}}.elastic-label-bottom{animation:elastic-label-bottom .7s}@keyframes elastic-label-bottom{0%{width:0}40%{width:50%}100%{width:42.064%}}</style>');
	
    jQuery('<a/>', {
		id: 'toggl-hourglass-box',
		href: 'https://toggl.com/features?utm_source=blog&utm_medium=hourglass_cta',
		target: '_blank',
		css: {
			'display': 'block',
			'position': 'fixed',
			'top': '50px',
			'right': '50px',
			'width': hourglassWidth + 'px',
			'height': Math.ceil(hourglassWidth * 1.63819) + 'px',
		}
	})
	.append(
		jQuery('<div/>', {
			id: 'toggl-hourglass',
			css: {
				'position': 'absolute',
				'top': '0px',
				'right': '0px',
				'width': hourglassWidth + 'px',
				'height': Math.ceil(hourglassWidth * 1.63819) + 'px',
				'background-size': 'contain',
				'background-repeat': 'no-repeat',
				'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNzAuMjAyNzgybW0iCiAgIGhlaWdodD0iMTE1LjAwNTU2bW0iCiAgIHZpZXdCb3g9IjAgMCAyNDguNzUwMDEgNDA3LjUwMDAyIgogICBpZD0ic3ZnNDQ0OCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iaG91cmdsYXNzLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0NTAiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuMTEzMDMzMiIKICAgICBpbmtzY2FwZTpjeD0iNTUuODAzNTc2IgogICAgIGlua3NjYXBlOmN5PSIyMTkuNDY0MjkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg0NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDUzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzAuMDg5MjksLTQ4LjYxMjIpIj4KICAgIDxnCiAgICAgICBpZD0iZzQ0MTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMzEuOTY0Mjg2LDgxLjExMTU4KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC0xMjAsMCAwLC05OCAwLDAgMC4wMDEsMCBMIC02MCwtMTM3IC0wLjAwMSwtOTggMCwtOTggMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNiZGZmZmQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQxNSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MTciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMzEuOTY0Mjg2LDMwMS4xMTIyMSkiPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDAgMCwwIC0wLjAwMSwwIC02MCwzOSAtMTE5Ljk5OSwwIC0xMjAsMCBsIDAsLTk4IDEyMCwwIDAsOTggeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2JkZmZmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDE5IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDQyMSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LC0xMDYuOTY0MjksODEuMTExNTgpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgLTYwLDAgMCwtOTggMCwwIDEwZS00LDAgTCAwLC0xMzcgMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNkY2ZmZmQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQyMyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MjUiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMTA2Ljk2NDI5LDI1Mi4zNjE1OCkiPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDAsMCAtNTkuOTk5LC0zOSAtMTBlLTQsMCAwLC05OCA2MCwwIDAsMTM3IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNkY2ZmZmQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQyNyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MjkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwxMi40MTA3MTQsNjkuODYyMikiPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDAsMCAtMTg5LDAgYyAtMi43NSwwIC01LDIuMjUgLTUsNSBsIDAsNyBjIDAsMi43NSAyLjI1LDUgNSw1IEwgMCwxNyBjIDIuNzUsMCA1LC0yLjI1IDUsLTUgTCA1LDUgQyA1LDIuMjUgMi43NSwwIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6IzQzNTA2MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDMxIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDQzMyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LDEyLjQxMDcxNCw0NTYuMTEyMjEpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgLTE4OSwwIGMgLTIuNzUsMCAtNSwyLjI1IC01LDUgbCAwLDcgYyAwLDIuNzUgMi4yNSw1IDUsNSBMIDAsMTcgYyAyLjc1LDAgNSwtMi4yNSA1LC01IEwgNSw1IEMgNSwyLjI1IDIuNzUsMCAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM0MzUwNjE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQzNSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxwYXRoCiAgICAgICBkPSJtIC0xOTMuMjE0MjksNDQ1LjQzNTA4IC0xMS4yNSwwIDAsLTM4Ni4yNSAxMS4yNSwwIDAsMzg2LjI1IHoiCiAgICAgICBzdHlsZT0iZmlsbDojNDM1MDYxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgaWQ9InBhdGg0NDM3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIC05LjQ2NDI4NTcsNDQ1LjQzNTA4IC0xMS4yNTAwMDAzLDAgMCwtMzg2LjI1IDExLjI1MDAwMDMsMCAwLDM4Ni4yNSB6IgogICAgICAgc3R5bGU9ImZpbGw6IzQzNTA2MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgIGlkPSJwYXRoNDQzOSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8ZwogICAgICAgaWQ9Imc0NDQxIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTE4MS45NjQyOSwyNTIuMzEwMzMpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgYyAwLC03LjQ1NiAtNi4wNDQsLTEzLjUgLTEzLjUsLTEzLjUgLTcuNDU2LDAgLTEzLjUsNi4wNDQgLTEzLjUsMTMuNSAwLDcuNDU2IDYuMDQ0LDEzLjUgMTMuNSwxMy41IEMgLTYuMDQ0LDEzLjUgMCw3LjQ1NiAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiM0MzUwNjE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQ0MyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0NDUiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwxLjc4NTcxNDMsMjUyLjMxMDMzKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIGMgMCwtNy40NTYgLTYuMDQ0LC0xMy41IC0xMy41LC0xMy41IC03LjQ1NiwwIC0xMy41LDYuMDQ0IC0xMy41LDEzLjUgMCw3LjQ1NiA2LjA0NCwxMy41IDEzLjUsMTMuNSBDIC02LjA0NCwxMy41IDAsNy40NTYgMCwwIgogICAgICAgICBzdHlsZT0iZmlsbDojNDM1MDYxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBpZD0icGF0aDQ0NDciCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9Imc0NDQ5IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTEwNS43MTQyOSw2OS44NjIyKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC05NC41LDAgYyAtMi43NSwwIC01LDIuMjUgLTUsNSBsIDAsNyBjIDAsMi43NSAyLjI1LDUgNSw1IEwgMCwxNyAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzVjNzQ4OTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDUxIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDQ1MyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LC0xMDUuNzE0MjksNDU2LjExMjIxKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC05NC41LDAgYyAtMi43NSwwIC01LDIuMjUgLTUsNSBsIDAsNyBjIDAsMi43NSAyLjI1LDUgNSw1IEwgMCwxNyAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzVjNzQ4OTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDU1IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDQ2MSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LC03MC43MTQyODYsMTg2LjExMjIpIiAvPgogIDwvZz4KPC9zdmc+Cg==")'
				}
		})
		//drops
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-drops',
				css: {
					'position': 'absolute',
					'bottom': '11.966%',
					'left': '50%',
					'width': '0px',
					'height': parseInt(hourglassHeight * 0.54 - hourglassHeight * 0.11966 - 30) + 'px',
					'margin': '0 0 30px -2px',
					'border-left': '3px dashed #fecd55',
					'animation': 'drops-animation .2s linear infinite'
					}
			})
		)
		//sand-top
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-sand-top',
				'class': 'toggl-hourglass-sand grow',
				css: {
					'position': 'absolute',
					'bottom': '54.761%',
					'left': '25.877%',
					'width': sandWidth + 'px',
					'background-size': sandWidth + 'px ' + sandHeight + 'px',
					'background-repeat': 'no-repeat',
					'background-position': 'center bottom',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzMuMTYxMTFtbSIKICAgaGVpZ2h0PSIzOC4yMTE0NzltbSIKICAgdmlld0JveD0iMCAwIDExNy41IDEzNS4zOTUiCiAgIGlkPSJzdmc4MDU4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJzYW5kLXRvcC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4MDYwIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIyLjUyNTI2ODgiCiAgICAgaW5rc2NhcGU6Y3g9IjIyLjg1NzE0MyIKICAgICBpbmtzY2FwZTpjeT0iODQuMjg1NzE0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTYwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhODA2MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5OC4zOTI4NiwtNTkwLjM3ODk5KSI+CiAgICA8ZwogICAgICAgaWQ9Imc0NDA1IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsMS4yNSw0MTUuODkyODYsNTkwLjM3ODk5KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC05NCwwIDAsNzcuNDgxIDAsMC4wMDEgMC4wMDEsMCBMIC00NywxMDguMzE2IC0wLjAwMSw3Ny40ODIgMCw3Ny40ODIgMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmY2MyM2U7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQwNyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MDkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwxLjI1LDM1Ny4xNDQxNiw1OTAuMzc4OTkpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgLTQ3LjAwMSwwIDAsNzcuNDgxIDAsMC4wMDEgMTBlLTQsMCBMIDAsMTA4LjMxNiAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZlY2Q1NTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDExIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIGlkPSJnNDQwOS0zIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsMS4yNSwzNTcuMTQ0MTYsNTkwLjM3ODk5KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC00Ny4wMDEsMCAwLDc3LjQ4MSAwLDAuMDAxIDEwZS00LDAgTCAwLDEwOC4zMTYgMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZWNkNTU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQxMS02IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==")'
					}
			})
		)
		//sand-bottom
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-sand-bottom',
				'class': 'toggl-hourglass-sand',
				css: {
					'position': 'absolute',
					'bottom': '11.966%',
					'left': '25.877%',
					'width': sandWidth + 'px',
					'background-size': sandWidth + 'px ' + sandHeight + 'px',
					'background-repeat': 'no-repeat',
					'background-position': 'center top',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzMuMTYxMTFtbSIKICAgaGVpZ2h0PSIzOC4yMTE0NzltbSIKICAgdmlld0JveD0iMCAwIDExNy41IDEzNS4zOTUiCiAgIGlkPSJzdmc4MDU4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJzYW5kLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgwNjAiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjIuNTI1MjY4OCIKICAgICBpbmtzY2FwZTpjeD0iMjIuODU3MTQzIgogICAgIGlua3NjYXBlOmN5PSI4NC4yODU3MTQiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg0NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4MDYzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjk4LjM5Mjg2LC01OTAuMzc4OTkpIj4KICAgIDxnCiAgICAgICBpZD0iZzQ0MDUiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSw0MTUuODkyODYsNzI1Ljc3Mzk5KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC05NCwwIDAsNzcuNDgxIDAsMC4wMDEgMC4wMDEsMCBMIC00NywxMDguMzE2IC0wLjAwMSw3Ny40ODIgMCw3Ny40ODIgMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmY2MyM2U7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQwNyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MDkiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwzNTcuMTQ0MTYsNzI1Ljc3Mzk5KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIC00Ny4wMDEsMCAwLDc3LjQ4MSAwLDAuMDAxIDEwZS00LDAgTCAwLDEwOC4zMTYgMCwwIFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZWNkNTU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQxMSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0MDktMyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LDM1Ny4xNDQxNiw3MjUuNzczOTkpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgLTQ3LjAwMSwwIDAsNzcuNDgxIDAsMC4wMDEgMTBlLTQsMCBMIDAsMTA4LjMxNiAwLDAgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZlY2Q1NTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDExLTYiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K")'
					}
			})
		)
		//light
		.append(
			jQuery('<div/>', {
				css: {
					'position': 'absolute',
					'top': '10.9%',
					'left': '64.07%',
					'width': Math.ceil(hourglassWidth * 0.05025) + 'px',
					'height': Math.ceil(hourglassWidth * 0.05025 * 7.8) + 'px',
					'background-size': 'contain',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMy41Mjc3Nzc3bW0iCiAgIGhlaWdodD0iMjcuNTE2NTZtbSIKICAgdmlld0JveD0iMCAwIDEyLjUgOTcuNDk5NjIiCiAgIGlkPSJzdmc1MDgzIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJsaWdodC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1MDg1IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjM1IgogICAgIGlua3NjYXBlOmN4PSItNzEuNjA3MTQiCiAgICAgaW5rc2NhcGU6Y3k9Ii0xNDUuNTM1OSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODQ0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIzMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUwODgiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4My4zOTI4NiwtMjg5LjMyNjY4KSI+CiAgICA8ZwogICAgICAgaWQ9Imc0NDU3IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTE4My4zOTI4NiwzNDkuMTI2NjgpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgMCw0My44NCBjIDAsMi4yIDEuOCw0IDQsNCBsIDIsMCBjIDIuMiwwIDQsLTEuOCA0LC00IEwgMTAsMCBDIDEwLC0yLjIgOC4yLC00IDYsLTQgTCA0LC00IEMgMS44LC00IDAsLTIuMiAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoNDQ1OSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICBpZD0iZzQ0NjEiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMTgzLjM5Mjg2LDM4MS44MjYzKSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIDAsOS42IGMgMCwyLjIgMS44LDQgNCw0IGwgMiwwIGMgMi4yLDAgNCwtMS44IDQsLTQgTCAxMCwwIEMgMTAsLTIuMiA4LjIsLTQgNiwtNCBMIDQsLTQgQyAxLjgsLTQgMCwtMi4yIDAsMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDYzIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==")'
					}
			})
		)
	)
	.append(
		jQuery('<div/>', {
			id: 'toggl-hourglass-label',
			css: {
				'position': 'absolute',
				'top': '105%',
				'left': '0px',
				'width': '100%',
				'height': Math.ceil(hourglassWidth * 0.29648) + 'px'
				}
		})
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-label-bottom-right',
				css: {
					'animation-fill-mode': 'forwards',
					'position': 'absolute',
					'top': '26%',
					'left': '73.196%',
					'width': '0px',
					'height': '0px',
					'padding-top': '29.90735%',
					'background-size': '100% auto',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjkuNTMwMzY3bW0iCiAgIGhlaWdodD0iMjAuOTk1NDJtbSIKICAgdmlld0JveD0iMCAwIDEwNC42MzUxNiA3NC4zOTMyMjEiCiAgIGlkPSJzdmc1NjIxIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJsYWJlbC1ib3R0b20tcmlnaHQuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTYyMyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMS42MTQ5OTE2IgogICAgIGlua3NjYXBlOmN4PSIxMDcuMTM4ODMiCiAgICAgaW5rc2NhcGU6Y3k9IjUuMTUxMjgwOSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE2MDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODQ0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIzMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTU2MjYiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyNS4xOTExNCwtNTY0LjY0NjI2KSI+CiAgICA8ZwogICAgICAgaWQ9Imc0NDY1LTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMC41MjMxNDI4Niw2MDQuNjYzNTgpIiAvPgogICAgPGcKICAgICAgIGlkPSJnNDQ2OS02IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTAuNTIzMTQyODYsNjc4LjQ2MTIpIiAvPgogICAgPGcKICAgICAgIGlkPSJnNDQ3NS0xIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTMyNS4xOTExNCw2MDQuNjYzNTgpIiAvPgogICAgPGcKICAgICAgIGlkPSJnNDQ3OS03IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTMyNS4xOTExNCw2NzguNDYxMikiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiNlNTNjM2M7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIKICAgICAgIGQ9Im0gLTIyMC41NTU5OCw1NjQuNjQ2MjYgLTM1LjA4MDU3LDM3LjE5NzU5IDM1LjA4MDU3LDM3LjE5NTYzIC0xMDQuNjM1MTYsMCAwLC03NC4zOTMyMiAxMDQuNjM1MTYsMCB6IgogICAgICAgaWQ9InJlY3Q1NTAyIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo=")'
					}
			})
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-label-bottom-left',
				css: {
					'animation-fill-mode': 'forwards',
					'position': 'absolute',
					'top': '26%',
					'right': '73.196%',
					'width': '0px',
					'height': '0px',
					'padding-top': '29.90735%',
					'background-size': '100% auto',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjkuNTMwMzY3bW0iCiAgIGhlaWdodD0iMjAuOTk1NDJtbSIKICAgdmlld0JveD0iMCAwIDEwNC42MzUxNiA3NC4zOTMyMjEiCiAgIGlkPSJzdmc1NjIxIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJsYWJlbC1ib3R0b20tbGVmdC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM1NjIzIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjYxNDk5MTYiCiAgICAgaW5rc2NhcGU6Y3g9IjEwNy4xMzg4MyIKICAgICBpbmtzY2FwZTpjeT0iNS4xNTEyODA5IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTYwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNTYyNiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzI1LjE5MTE0LC01NjQuNjQ2MjYpIj4KICAgIDxnCiAgICAgICBpZD0iZzQ0NjUtMyIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LC0wLjUyMzE0Mjg2LDYwNC42NjM1OCkiIC8+CiAgICA8ZwogICAgICAgaWQ9Imc0NDY5LTYiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMC41MjMxNDI4Niw2NzguNDYxMikiIC8+CiAgICA8ZwogICAgICAgaWQ9Imc0NDc1LTEiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMzI1LjE5MTE0LDYwNC42NjM1OCkiIC8+CiAgICA8ZwogICAgICAgaWQ9Imc0NDc5LTciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMzI1LjE5MTE0LDY3OC40NjEyKSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6I2U1M2MzYztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0ibSAtMzI1LjE5MTE0LDU2NC42NDYyNiAzNS4wODA1NywzNy4xOTc1OSAtMzUuMDgwNTcsMzcuMTk1NjMgMTA0LjYzNTE2LDAgMCwtNzQuMzkzMjIgLTEwNC42MzUxNiwwIHoiCiAgICAgICBpZD0icmVjdDU1MDIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogIDwvZz4KPC9zdmc+Cg==")'
					}
			})
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-label-back-right',
				css: {
					'animation-fill-mode': 'forwards',
					'position': 'absolute',
					'top': '100%',
					'right': '0px',
					'width': '0px',
					'height': '0px',
					'padding-top': '7.78955%',
					'background-size': 'cover',
					'background-position': 'right top',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTguODA5NzU5bW0iCiAgIGhlaWdodD0iNS40NjgzNjk1bW0iCiAgIHZpZXdCb3g9IjAgMCA2Ni42NDg3NTMgMTkuMzc2MTEyIgogICBpZD0ic3ZnNDI0NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibGFiZWwtYmFjay1yaWdodC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0MjQ3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjY1Njg1NDMiCiAgICAgaW5rc2NhcGU6Y3g9IjY2LjY2Nzk2OSIKICAgICBpbmtzY2FwZTpjeT0iMTkuMzczMDQ4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTYwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpndWlkZS1iYm94PSJ0cnVlIj4KICAgIDxzb2RpcG9kaTpndWlkZQogICAgICAgcG9zaXRpb249IjIxLjQyODU3MiwxOS4zNzUwMDEiCiAgICAgICBvcmllbnRhdGlvbj0iMCwxIgogICAgICAgaWQ9Imd1aWRlNzM5MyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MjUwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODguMzI0MzgsLTUyNy42NzM1OSkiPgogICAgPGcKICAgICAgIGlkPSJnNDQ4NS0zIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoLTEuMjUsMCwwLC0xLjI1LC0yMjEuNjc1NjMsNTI3LjY3NDcpIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSAwLDAgNTMuMzE5LC0xNS41IDAsMTUuNTAwODg5MzUxOSB6IgogICAgICAgICBzdHlsZT0iZmlsbDojYzkxODE4O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBpZD0icGF0aDQ0ODctNiIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==")'
					}
			})
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-label-back-left',
				css: {
					'animation-fill-mode': 'forwards',
					'position': 'absolute',
					'top': '100%',
					'left': '0px',
					'width': '0px',
					'height': '0px',
					'padding-top': '7.78955%',
					'background-size': 'cover',
					'background-position': 'left top',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTguODA5NzU5bW0iCiAgIGhlaWdodD0iNS40NjgzNjk1bW0iCiAgIHZpZXdCb3g9IjAgMCA2Ni42NDg3NTMgMTkuMzc2MTEyIgogICBpZD0ic3ZnNDI0NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibGFiZWwtYmFjay1sZWZ0LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQyNDciIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MyIKICAgICBpbmtzY2FwZTpjeD0iNjYuNjY3OTY5IgogICAgIGlua3NjYXBlOmN5PSIxOS4zNzMwNDgiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNjAwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg0NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMzAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBzaG93Z3VpZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iMjEuNDI4NTcyLDE5LjM3NTAwMSIKICAgICAgIG9yaWVudGF0aW9uPSIwLDEiCiAgICAgICBpZD0iZ3VpZGU3MzkzIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQyNTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4OC4zMjQzOCwtNTI3LjY3MzU5KSI+CiAgICA8ZwogICAgICAgaWQ9Imc0NDg1LTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtMjg4LjMyNDM4LDUyNy42NzQ3KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIDUzLjMxOSwtMTUuNSAwLDE1LjUwMDg4OTM1MTkgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2M5MTgxODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgaWQ9InBhdGg0NDg3LTYiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=")'
					}
			})
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-label-canvas',
				css: {
					'animation-fill-mode': 'forwards',
					'margin': '0 auto',
					'background': '#ff5050',
					'width': '0',
					'height': '100%',
					'position': 'absolute'
					}
			})
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-slogan',
				css: {
					'position': 'relative',
					'margin': '7% 7% 0',
					'color': 'white',
					'text-align': 'center',
					'font-weight': 'bold',
					'line-height': '1.1',
					'font-size': Math.ceil(hourglassWidth * 1.3052 * 0.18669 * 0.30117) - 2 + 'px'
					}
			}).html('Whoa!<br>Be careful with your time')
		)
		.append(
			jQuery('<div/>', {
				id: 'toggl-hourglass-logo',
				css: {
					'position': 'relative',
					'margin': '8% auto 0',
					'display': 'none',
					'width': Math.ceil(hourglassWidth * 1.3052 * 0.35) + 'px',
					'height': Math.ceil(hourglassWidth * 1.3052 * 0.35 * 0.30117) + 'px',
					'background-size': 'contain',
					'background-repeat': 'no-repeat',
					'background-image': 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTcuMTA1ODQzbW0iCiAgIGhlaWdodD0iNS4xNTE2MTM3bW0iCiAgIHZpZXdCb3g9IjAgMCA2MC42MTEyNTMgMTguMjUzNzQ5IgogICBpZD0ic3ZnNjI2MCIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibG9nby5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM2MjYyIj4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGg0Njc3Ij4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSA1NjcuOTgsMTUzLjk2NyBjIDAsLTMuOTg4IDMuMjEyLC03LjIxIDcuMTg5LC03LjIxIGwgMCwwIGMgMy45NzYsMCA3LjE4OCwzLjIyMiA3LjE4OCw3LjIxIGwgMCwwIGMgMCwzLjk4OCAtMy4yMjQsNy4yMSAtNy4xODgsNy4yMSBsIDAsMCBjIC0zLjk2NSwwIC03LjE4OSwtMy4yMjIgLTcuMTg5LC03LjIxIG0gNi42NzksNC40MTQgMS4wMDYsMCAwLC01LjAyMiAtMS4wMDYsMCAwLDUuMDIyIHogbSAzLjA1NSwtNC41NzIgYyAwLDEuMDgyIC0wLjY2NiwyLjAwNiAtMS42MTIsMi4zNzIgbCAwLDAgMCwxLjAyMSBjIDEuNDkxLC0wLjQxNCAyLjU4MiwtMS43NzYgMi41ODIsLTMuNDA2IGwgMCwwIGMgMCwtMS45NDQgLTEuNTc1LC0zLjUyNiAtMy41MTUsLTMuNTI2IGwgMCwwIGMgLTEuOTQsMCAtMy41MTYsMS41ODIgLTMuNTE2LDMuNTI2IGwgMCwwIGMgMCwxLjYzIDEuMDkxLDIuOTkyIDIuNTgyLDMuNDA2IGwgMCwwIDAsLTEuMDIxIGMgLTAuOTQ1LC0wLjM3OCAtMS42MTIsLTEuMzAyIC0xLjYxMiwtMi4zNzIgbCAwLDAgYyAwLC0xLjQxIDEuMTQsLTIuNTUzIDIuNTQ2LC0yLjU1MyBsIDAsMCBjIDEuNDA1LDAgMi41NDUsMS4xNDMgMi41NDUsMi41NTMiCiAgICAgICAgIGlkPSJwYXRoNDY3OSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoNDY2NyI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gNjE0LjM4NCwxNTguMjIzIDAsLTcuMTg3IGMgMCwtMS4wMjEgMC4zMzgsLTEuNTMyIDEuMDU1LC0xLjUzMiBsIDAsMCBjIDAuNzE1LDAgMS4wMywwLjUxMSAxLjAzLDEuNTMyIGwgMCwwIDAsNy4xODcgYyAwLDEuMDIxIC0wLjMyNywxLjUzMiAtMS4wMywxLjUzMiBsIDAsMCBjIC0wLjcyOCwwIC0xLjA1NSwtMC40OTggLTEuMDU1LC0xLjUzMiIKICAgICAgICAgaWQ9InBhdGg0NjY5IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGg0NjU3Ij4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSA2MDUuOTcxLDE1My4xNCBjIDAsLTIuMTI4IDEuMzgxLC0zLjY0OCAzLjAzLC0zLjY0OCBsIDAsMCBjIDAuODI1LDAgMS40NTUsMC4zMjkgMS44OTIsMS4wMSBsIDAsMCBjIDAsLTAuMDk4IDAuMDEyLC0wLjE3MSAwLjAxMiwtMC4yNTYgbCAwLDAgYyAwLC0xLjE1NSAtMC42MTksLTEuNzc2IC0xLjYzNywtMS43NzYgbCAwLDAgYyAtMS4xMDMsMCAtMS43MjEsMC41NiAtMi4yNDIsMC41NiBsIDAsMCBjIC0wLjUxLDAgLTAuODk3LC0wLjM4OSAtMC44OTcsLTAuOTI0IGwgMCwwIGMgMCwtMC44MjYgMS4xNTEsLTEuNTMyIDMuMDY3LC0xLjUzMiBsIDAsMCBjIDEuNDkxLDAgMi41ODIsMC41NDcgMy4xODcsMS41NjkgbCAwLDAgYyAwLjQxMywwLjY4MSAwLjQ5OCwxLjY0MSAwLjQ5OCwyLjkwNiBsIDAsMCAwLDQuMjE5IGMgMCwxLjAyMSAtMC4zNCwxLjUyIC0xLjA1NSwxLjUyIGwgMCwwIGMgLTAuMzI3LDAgLTAuNjkxLC0wLjIzMSAtMC45MzMsLTAuNjY5IGwgMCwwIGMgLTAuNDI1LDAuNDk5IC0wLjk1OCwwLjc0MiAtMS42NzMsMC43NDIgbCAwLDAgYyAtMS43NjksMCAtMy4yNDksLTEuNTkzIC0zLjI0OSwtMy43MjEgbSAyLjE3LDAgYyAwLDEuMDQ2IDAuNTk0LDEuNzE1IDEuMzcsMS43MTUgbCAwLDAgYyAwLjc3NSwwIDEuMzgyLC0wLjY1NyAxLjM4MiwtMS43MTUgbCAwLDAgYyAwLC0xLjA3IC0wLjU5NCwtMS43NjMgLTEuMzgyLC0xLjc2MyBsIDAsMCBjIC0wLjc4OSwwIC0xLjM3LDAuNjgxIC0xLjM3LDEuNzYzIgogICAgICAgICBpZD0icGF0aDQ2NTkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDQ2NDciPgogICAgICA8cGF0aAogICAgICAgICBkPSJtIDU5OC4wNTUsMTUzLjE0IGMgMCwtMi4xMjggMS4zODMsLTMuNjQ4IDMuMDMxLC0zLjY0OCBsIDAsMCBjIDAuODExLDAgMS40NDIsMC4zMjkgMS44OTEsMS4wMSBsIDAsMCBjIDAsLTAuMDk4IDAuMDEyLC0wLjE3MSAwLjAxMiwtMC4yNTYgbCAwLDAgYyAwLC0xLjE1NSAtMC42MTksLTEuNzc2IC0xLjYzNywtMS43NzYgbCAwLDAgYyAtMS4xMDMsMCAtMS43MjIsMC41NiAtMi4yNDMsMC41NiBsIDAsMCBjIC0wLjUwOCwwIC0wLjg5NiwtMC4zODkgLTAuODk2LC0wLjkyNCBsIDAsMCBjIDAsLTAuODI2IDEuMTUxLC0xLjUzMiAzLjA2NiwtMS41MzIgbCAwLDAgYyAxLjQ5MiwwIDIuNTgyLDAuNTQ3IDMuMTg5LDEuNTY5IGwgMCwwIGMgMC40MTIsMC42ODEgMC40OTcsMS42NDEgMC40OTcsMi45MDYgbCAwLDAgMCw0LjIxOSBjIDAsMS4wMjEgLTAuMzQsMS41MiAtMS4wNTUsMS41MiBsIDAsMCBjIC0wLjMyNywwIC0wLjY5MSwtMC4yMzEgLTAuOTMzLC0wLjY2OSBsIDAsMCBjIC0wLjQyNCwwLjQ5OSAtMC45NTksMC43NDIgLTEuNjc0LDAuNzQyIGwgMCwwIGMgLTEuNzY5LDAgLTMuMjQ4LC0xLjU5MyAtMy4yNDgsLTMuNzIxIG0gMi4xNTgsMCBjIDAsMS4wNDYgMC41OTQsMS43MTUgMS4zNywxLjcxNSBsIDAsMCBjIDAuNzc1LDAgMS4zODIsLTAuNjU3IDEuMzgyLC0xLjcxNSBsIDAsMCBjIDAsLTEuMDcgLTAuNTk1LC0xLjc2MyAtMS4zODIsLTEuNzYzIGwgMCwwIGMgLTAuNzc2LDAgLTEuMzcsMC42ODEgLTEuMzcsMS43NjMiCiAgICAgICAgIGlkPSJwYXRoNDY0OSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgaWQ9ImNsaXBQYXRoNDYzNyI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gNTkwLjM1OCwxNTMuMTQgYyAwLC0yLjE4OCAxLjQ3OSwtMy43NTcgMy41MzksLTMuNzU3IGwgMCwwIGMgMi4wNzMsMCAzLjUyNywxLjU2OSAzLjUyNywzLjc1NyBsIDAsMCBjIDAsMi4xODkgLTEuNDU0LDMuNzU4IC0zLjUyNywzLjc1OCBsIDAsMCBjIC0yLjA2LDAgLTMuNTM5LC0xLjU4MSAtMy41MzksLTMuNzU4IG0gMi4xNTgsMC4wMjUgYyAwLDEuMDk0IDAuNjA1LDEuNzYzIDEuMzgxLDEuNzYzIGwgMCwwIGMgMC43NzYsMCAxLjM4MiwtMC42OTMgMS4zODIsLTEuNzYzIGwgMCwwIGMgMCwtMS4wOTUgLTAuNTgxLC0xLjc4OCAtMS4zODIsLTEuNzg4IGwgMCwwIGMgLTAuODAxLDAgLTEuMzgxLDAuNjgxIC0xLjM4MSwxLjc4OCIKICAgICAgICAgaWQ9InBhdGg0NjM5IgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBpZD0iY2xpcFBhdGg0NjI3Ij4KICAgICAgPHBhdGgKICAgICAgICAgZD0ibSA1ODYuNzY5LDE1Ny41MDYgMCwtMC45MjUgYyAtMC44MzcsLTAuMDQ4IC0xLjI2MSwtMC4zNjQgLTEuMjYxLC0wLjkzNiBsIDAsMCBjIDAsLTAuNTM1IDAuNDM3LC0wLjg5OSAxLjE3NywtMC44OTkgbCAwLDAgMC4wNzIsMCAwLC0zLjcyMiBjIDAsLTEuMDIxIDAuMzQsLTEuNTMyIDEuMDU1LC0xLjUzMiBsIDAsMCBjIDAuNzE1LDAgMS4wMywwLjUxMSAxLjAzLDEuNTMyIGwgMCwwIDAsMy43MjIgMC4xNjksMCBjIDAuODk4LDAgMS4zMzUsMC4zMTYgMS4zMzUsMC44OTkgbCAwLDAgYyAwLDAuNTcyIC0wLjQ3MywwLjkzNiAtMS4zMSwwLjkzNiBsIDAsMCAtMC4xODEsMCAwLDAuOTI1IGMgMCwxLjAyMSAtMC4zMjgsMS41MzEgLTEuMDMxLDEuNTMxIGwgMCwwIGMgLTAuNzI3LDAgLTEuMDU1LC0wLjUxIC0xLjA1NSwtMS41MzEiCiAgICAgICAgIGlkPSJwYXRoNDYyOSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjM1IgogICAgIGlua3NjYXBlOmN4PSItODQuNjk0MzgiCiAgICAgaW5rc2NhcGU6Y3k9IjQ3NC44NDEyIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTYwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjMwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNjI2NSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjMwNTYyLC05ODguOTQ5NjUpIj4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtODgwLjI4MDYyLDExOTAuNDIwOSkiCiAgICAgICBpZD0iZzQ2MjMiPgogICAgICA8ZwogICAgICAgICBpZD0iZzQ2MjUiCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDQ2MjcpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIGQ9Im0gNTgwLjUwOSwxNDQuNDkyIDE0LjgzNywwIDAsMTkuNTQ1IC0xNC44MzcsMCAwLC0xOS41NDUgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGlkPSJwYXRoNDYzMSIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTg4MC4yODA2MiwxMTkwLjQyMDkpIgogICAgICAgaWQ9Imc0NjMzIj4KICAgICAgPGcKICAgICAgICAgaWQ9Imc0NjM1IgogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg0NjM3KSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBkPSJtIDU4NS4zNTcsMTQ0LjM4MyAxNy4wNjcsMCAwLDE3LjUxNSAtMTcuMDY3LDAgMCwtMTcuNTE1IHoiCiAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgICBpZD0icGF0aDQ2NDEiCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUsMCwwLC0xLjI1LC04ODAuMjgwNjIsMTE5MC40MjA5KSIKICAgICAgIGlkPSJnNDY0MyI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnNDY0NSIKICAgICAgICAgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoNDY0NykiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgZD0ibSA1OTMuMDU1LDE0MS41NzQgMTYuOTEsMCAwLDIwLjI4NyAtMTYuOTEsMCAwLC0yMC4yODcgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGlkPSJwYXRoNDY1MSIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTg4MC4yODA2MiwxMTkwLjQyMDkpIgogICAgICAgaWQ9Imc0NjUzIj4KICAgICAgPGcKICAgICAgICAgaWQ9Imc0NjU1IgogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg0NjU3KSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBkPSJtIDYwMC45NzEsMTQxLjU3NCAxNi45MSwwIDAsMjAuMjg3IC0xNi45MSwwIDAsLTIwLjI4NyB6IgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgICAgaWQ9InBhdGg0NjYxIgogICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtODgwLjI4MDYyLDExOTAuNDIwOSkiCiAgICAgICBpZD0iZzQ2NjMiPgogICAgICA8ZwogICAgICAgICBpZD0iZzQ2NjUiCiAgICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDQ2NjcpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIGQ9Im0gNjA5LjM4NCwxNDQuNTA0IDEyLjA4NSwwIDAsMjAuMjUxIC0xMi4wODUsMCAwLC0yMC4yNTEgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGlkPSJwYXRoNDY3MSIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTg4MC4yODA2MiwxMTkwLjQyMDkpIgogICAgICAgaWQ9Imc0NjczIj4KICAgICAgPGcKICAgICAgICAgaWQ9Imc0Njc1IgogICAgICAgICBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGg0Njc3KSI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBkPSJtIDU2Mi45OCwxNDEuNzU2IDI0LjM3NiwwIDAsMjQuNDIxIC0yNC4zNzYsMCAwLC0yNC40MjEgeiIKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICAgIGlkPSJwYXRoNDY4MSIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K")'
					}
			})
		)
	)
	.append(
		jQuery('<a/>', {
			id: 'toggl-hourglass-hider',
			css: {
				'position': 'absolute',
				'top': '-18px',
				'right': '0px',
				'color': '#ff5050',
				'padding': '1px 2px',
				'background': 'white',
				'display': 'none',
				'font-weight': 'bold',
				'border': '1px solid #ff5050',
				'border-radius': '5px',
				'line-height': '1.1',
				'font-size': '10px'
				}
		})
		.text('hide')
		.click(function(event) {
			event.stopPropagation();
			event.preventDefault();
			$('#toggl-hourglass-box').addClass('hide-hourglass');
			setTimeout(function(){ $('#toggl-hourglass-box').remove(); }, 300);
		})
	)
	.appendTo('body');


	var $togglHourglassSandTop = $('#toggl-hourglass-sand-top');
	var $togglHourglassSandBottom = $('#toggl-hourglass-sand-bottom');
	var $togglHourglassDrops = $('#toggl-hourglass-drops');
	var rotateTimeout;

	var rotate_angle = 0;
	function rotateHourglass() {
		clearTimeout(rotateTimeout);
		rotate_angle += 180;
		$('#toggl-hourglass').rotate({ 
			animateTo:rotate_angle,
			duration:1000,
			easing: $.easing.easeOutBack,
			callback: function(){ sandDrop(); }
		})
	};
	
	function sandDrop() {
		if( $('#toggl-hourglass').getRotateAngle()%360 == 0 ) {
			$togglHourglassSandTop.css({'bottom': '54.761%', 'top': 'auto'});
			$togglHourglassSandBottom.css({'bottom': '11.966%', 'top': 'auto'});
			$togglHourglassDrops.css({'bottom': '11.966%', 'top': 'auto','animation': 'drops-animation .2s linear infinite'});
			$togglHourglassSandTop.removeClass('grow');
			$togglHourglassSandBottom.addClass('grow');
			var currentTopSandHeight = $togglHourglassSandTop.height();
		} else {
			$togglHourglassSandTop.css({'top': '11.966%', 'bottom': 'auto'});
			$togglHourglassSandBottom.css({'top': '54.761%', 'bottom': 'auto'});
			$togglHourglassDrops.css({'top': '11.966%', 'bottom': 'auto','animation': 'drops-animation-top .2s linear infinite'});
			$togglHourglassSandTop.addClass('grow');
			$togglHourglassSandBottom.removeClass('grow');
			var currentTopSandHeight = $togglHourglassSandBottom.height();
		}
		$togglHourglassDrops.show();
		
		var timeoutDuration = parseInt(currentTopSandHeight/sandHeight*hourglassDuration);
		rotateTimeout = setTimeout(function(){ 
			$togglHourglassDrops.hide();
			rotateHourglass();
		}, timeoutDuration);
	}
	
	setTimeout(function(){ 
		$('#toggl-hourglass').addClass('visiblegrow');
		setTimeout(function(){ sandDrop(); }, 300);
	}, 1000);
	
	$('#toggl-hourglass').mouseenter(function() {
		if( $('#toggl-hourglass').getRotateAngle()%180 != 0 ) return false;
		rotateHourglass();
		
		$('#toggl-hourglass-label').show();
		$('#toggl-hourglass-label-canvas').addClass('elastic-label');
		setTimeout(function(){ 
				$('#toggl-hourglass-label-back-left').addClass('elastic-label-back');
				$('#toggl-hourglass-label-back-right').addClass('elastic-label-back');
		  setTimeout(function(){
			$('#toggl-hourglass-label-bottom-left').addClass('elastic-label-bottom');
			$('#toggl-hourglass-label-bottom-right').addClass('elastic-label-bottom');
			setTimeout(function(){ 
				$('#toggl-hourglass-slogan').fadeOut('slow');
				$('#toggl-hourglass-logo').fadeIn('slow');
				setTimeout(function(){ $('#toggl-hourglass-hider').fadeIn('slow'); }, 1000);
			}, 4000);
		  }, 300);
		}, 1000);
		
		/*$('#toggl-hourglass-label').addClass('visiblegrow');
		setTimeout(function(){ 
			$('#toggl-hourglass-slogan').fadeOut('slow');
			$('#toggl-hourglass-logo').fadeIn('slow');
			setTimeout(function(){ $('#toggl-hourglass-hider').fadeIn('slow'); }, 1000);
		}, 5000);*/
	});
	
	$('img.size-large').each(function() {
		var eTop = $(this).offset().top;
		var $img = $(this).clone();
		
		jQuery('<div/>', {
			css: {
				'display': 'block',
				'position': 'absolute',
				'top': eTop + 'px',
				'left': '0px',
				'width': '100%'
			}
		})
		.append($img)
		.appendTo('body');
	});

		
});
