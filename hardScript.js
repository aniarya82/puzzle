// JavaScript Document
window.onload = initAll;
document.getElementsByTagName("input").onkeydown = keyHit;
window.onunload = function() {};
var hintCount = 1;
var score = 100;
var rand = randomNum(3);

var myPix = [["images/jr/jr0.png","images/jr/jr1.png","images/jr/jr2.png","images/jr/jr3.png","images/jr/jr4.png","images/jr/jr5.png","images/jr/jr6.png","images/jr/jr7.png","images/jr/jr8.png","images/jr/jr9.png","images/jr/jr10.png","images/jr/jr11.png","images/jr/jr12.png","images/jr/jr13.png","images/jr/jr14.png","images/jr/jr15.png"],
["images/cooper/cooper0.png","images/cooper/cooper1.png","images/cooper/cooper2.png","images/cooper/cooper3.png","images/cooper/cooper4.png","images/cooper/cooper5.png","images/cooper/cooper6.png","images/cooper/cooper7.png","images/cooper/cooper8.png","images/cooper/cooper9.png","images/cooper/cooper10.png","images/cooper/cooper11.png","images/cooper/cooper12.png","images/cooper/cooper13.png","images/cooper/cooper14.png","images/cooper/cooper15.png"],
["images/depp/depp0.png","images/depp/depp1.png","images/depp/depp2.png","images/depp/depp3.png","images/depp/depp4.png","images/depp/depp5.png","images/depp/depp6.png","images/depp/depp7.png","images/depp/depp8.png","images/depp/depp9.png","images/depp/depp10.png","images/depp/depp11.png","images/depp/depp12.png","images/depp/depp13.png","images/depp/depp14.png","images/depp/depp15.png"]];

var celeb = ["Robert Downey Junior","Bradely Cooper","Johnny Depp"];

function initAll() {
	document.getElementById("hint").onclick = changeImage;
	document.getElementById("sub").onclick = checkAns;
	document.getElementsByTagName("img")[0].src = myPix[rand][0];
	document.getElementById("ans").onfocus = clearFeild;
	//document.getElementById("ans").oninput = newThing;
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
	var count = [0,15,9,7,4,11,1,13,3,6,12,10,8,14,5,2];
	images[count[hintCount]].src = myPix[rand][count[hintCount]];
	hintCount++;
	score = score - 6.66;
	document.getElementById("score").innerHTML = Math.floor(score);
	if(Math.floor(score) === 0) {
		window.alert("YOU LOSE");
		document.getElementById("correct").innerHTML = "Correct Answer is: " + celeb[rand];
		document.getElementById("correct").style.backgroundColor = "rgba(9,181,103,0.5)";
		document.getElementById("correct").style.width = "auto";
		document.getElementById("correct").style.paddingLeft = "2%";
		document.getElementById("ans").onfocus = blurFeild;
	}
	//document.getElementById("ans").style.backgroundColor = "#000000";
}

function checkAns() {
	var answer = document.getElementById("ans").value;
	if(answer == celeb[rand]) {
		document.getElementById("mainContent").style.display = "none";
		document.getElementById("cong").style.display = "inline";
	}
	else {
		window.alert("Wrong choice");
	}
}

function blurFeild() {
	this.style.backgroundColor = "#FFFF99";
	this.blur();
}

function fillArray(col,name) {
	for(var i = 0; i < 16; i++) {
		myPix[col][i] = "images/" + name + "/" + name + i + ".png" ;
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

function clearFeild() {
	this.value = "";
	this.style.backgroundColor = "rgba(6,252,149,0.5)";
}

function newThing() {
	this.style.backgroundColor = "rgba(9,181,103,0.5)";
}

function goBack() {
	this.style.backgroundColor = "rgba(360,360,360,0.8)";
}

function showTime() {
	document.getElementById("start").style.display = "none";
	document.getElementById("mainContent").style.display = "inline";
}

function congrats() {
	document.getElementById("mainContent").style.display = "none";
	document.getElementById("cong").style.display = "inline";
}
