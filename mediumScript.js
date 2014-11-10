// JavaScript Document
window.onload = initAll;
var hintCount = 1;
var score = 100;
var randNum = randomNum(2);

var myPix = [["images/robert/robert1.png","images/robert/robert2.png","images/robert/robert3.png","images/robert/robert4.png","images/robert/robert5.png","images/robert/robert6.png","images/robert/robert7.png","images/robert/robert8.png","images/robert/robert9.png"],
["images/pine/pine0.png","images/pine/pine1.png","images/pine/pine2.png","images/pine/pine3.png","images/pine/pine4.png","images/pine/pine5.png","images/pine/pine6.png","images/pine/pine7.png","images/pine/pine8.png"]];

var celeb = ["Robert Downey Junior","Chris Pine"];

function initAll() {
	document.getElementById("hint").onclick = changeImage;
	document.getElementById("sub").onclick = checkAns;
	document.getElementsByTagName("img")[0].src = myPix[randNum][0];
	//document.getElementsByTagName("img")[0].style.display = "initial";
	document.getElementById("ans").onkeydown = keyHit;
	document.getElementById("ans").onblur = goBack;
	document.onkeydown = keyHit;
	document.getElementById("ans").onfocus = clearFeild;
	document.getElementById("start").onclick = showTime;
}

function randomNum(num) {
	return Math.floor(Math.random() * num);
}

function changeImage() {
	var images = document.getElementsByTagName("img");
	var count = [0,7,6,2,3,8,5,1,4];
	images[count[hintCount]].src = myPix[randNum][count[hintCount]];
	//images[count[hintCount]].style.display = "initial";
	hintCount++;
	score = score - 100/8;
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

