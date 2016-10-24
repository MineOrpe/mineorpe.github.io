var cnvw = document.getElementById("canv");
var canv = cnvw.getContext('2d');

start();

function draw(){
	canv.strokeRect(0, 0, 50, 50);
}

function update(){
	canv.clearRect(0, 0, cnvw.width, cnvw.height);
	draw();
}
function start(){
	setInterval(update, 1);
}