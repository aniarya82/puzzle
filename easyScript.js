// JavaScript Document
window.onload = initAll;
var hintCount = 1;
var score = 100;
var randNum = randomNum(2);

var myPix = [["images/tom/tom1.png","images/tom/tom2.png","images/tom/tom3.png","images/tom/tom4.png","images/tom/tom5.png","images/tom/tom6.png"],
["images/messi/messi0.png","images/messi/messi1.png","images/messi/messi2.png","images/messi/messi3.png","images/messi/messi4.png","images/messi/messi5.png",]];

var celeb = ["Tom Cruise","Lionel Messi"];

function initAll() {
	document.getElementById("hint").onclick = changeImage;
	document.getElementById("sub").onclick = checkAns;
	document.getElementsByTagName("img")[0].src = myPix[randNum][0];
	document.getElementById("ans").onfocus = clearFeild;
	document.getElementById("ans").onkeydown = keyHit;
	document.getElementById("ans").onblur = goBack;
	document.onkeydown = keyHit;
	document.getElementById("start").onclick = showTime;
}

function randomNum(num) {
	return Math.floor(Math.random() * num);
}

function changeImage() {
	var images = document.getElementsByTagName("img");
	var count = [0,5,3,2,4,1];
	images[count[hintCount]].src = myPix[randNum][count[hintCount]];
	hintCount++;
	score = score - 20;
	document.getElementById("score").innerHTML = score;
	if(score == 0) {
		window.alert("YOU LOSE");
		document.getElementById("correct").innerHTML = "Correct Answer is: " + celeb[randNum];
		document.getElementById("correct").style.backgroundColor = "rgba(9,181,103,0.5)";
		document.getElementById("correct").style.width = "auto";
		document.getElementById("correct").style.paddingLeft = "2%";
		document.getElementById("ans").onfocus = blurFeild;
	}
}

function checkAns() {
	var answer = document.getElementById("ans").value;
	if(answer == celeb[randNum]) {
		document.getElementById("mainContent").style.display = "none";
		document.getElementById("cong").style.display = "inline";
	}
	else {
		window.alert("Wrong choice");
	}
}

function keyHit(evt) {
	var enterKey = 13;
	var escKey = 27;
	var thisKey;
	if(evt) {
		thisKey = evt.which;
	}
	else {
		thisKey = window.event.keycode;
	}
	if(thisKey == enterKey) {
		checkAns();
	}
	if(thisKey == escKey) {
		window.location = "index.html";
	}
}


function blurFeild() {
	this.style.backgroundColor = "#FFFF99";
	this.blur();
}

function fillArray(col,name) {
	for(var i = 0; i < 6; i++) {
		myPix[col][i] = "images/" + name + "/" + name + i + ".png" ;
	}
}

function clearFeild() {
	this.value = "";
	this.style.backgroundColor = "rgba(9,181,103,0.5)";
}

function goBack() {
	this.style.backgroundColor = "rgba(360,360,360,0.8)";
}

function showTime() {
	document.getElementById("start").style.display = "none";
	document.getElementById("mainContent").style.display = "inline";
}