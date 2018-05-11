// window.addEventListener('load', initControl, false);

var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = 'http://i.imgur.com/BfY4QW5.png';

var frames = 100;
var bottomFrame = 18;
var currentFrame;
var currentFrame = 18;
var click = false;
var width = 109;
var height = 81.75;
var B;
var ALPHA;
var DIFF = 0;
ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);



// var iphoneMarker = document.getElementById("shot-iphone");
// var ictx = iphoneMarker.getContext("2d");
// var shotIphone = new Image()
// shotIphone.src = './images/shotOnMyIphone.png';
// console.log("img loades");




function initControl() {
	var X = [];
	var DELTA; 

	canvas.addEventListener("mousedown", doMouseDown, false);
	canvas.addEventListener("touchstart", doMouseDown, false);

	function doMouseDown (event) {
		X[0] = event.pageX;






		
	




		// ictx.drawImage(shotIphone, 69, 58);
		// ictx.drawImage(shotIphone, 400, 400, 400, 400);
		// console.log("img DRAWN");

			canvas.addEventListener("touchmove", mouseX, true);
		canvas.addEventListener("touchend", mouseUp, false);

		canvas.addEventListener("mousemove",mouseX, false);
		document.body.addEventListener("mouseup", mouseUp, false);


	};

	function mouseUp(event) {
	  canvas.removeEventListener("mousemove",mouseX, false);
	  canvas.addEventListener("touchmove", mouseX, true);

	};

	function mouseX (event) {
	    var canvasX = event.pageX;
	    X[1] = canvasX;
	  	A = ALPHA; DIFF = X[0] - X[1]; ALPHA = DIFF; B = ALPHA;

			if (B < A){//dragging RIGHT
	  		if (currentFrame === frames-1 ) {
	  			currentFrame = frames-1;//>> Limit Here (upper)
	  		} else {
	  			currentFrame++;
	  		}
	  	} 	
	  	if (B > A) {//dragging LEFT
	  		if (currentFrame < bottomFrame ) {//or TRY 1 here...> see helmetLoop
	  			currentFrame = 18;//>> Limit Here (lower)
	  		} 
	  		currentFrame--;
	  	} 

	  	var ALPHA2 = ALPHA;	
	  	ctx.clearRect(0, 0, width, height);
	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
	  	X[1] = X[0];

	}

}
