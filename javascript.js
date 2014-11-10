// JavaScript Document
window.onload = initForm;
window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = jumpPage;
	document.getElementById("disp").onmouseover = display;
	document.getElementById("disp").onmouseout = hide;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;
	
	if(newPage == "easy.html") {
		newPage.onselect = document.getElementById("write").innerHTML = "You choose easy";
	}
	if(newPage != "") {
		window.location = newPage;
	}
}


function display() {
	document.getElementById("rules").style.display = "inline";
	//document.getElementById("write").style.color = "#FF0975";
}

function hide() {
	document.getElementById("rules").style.display = "none";
	//document.getElementById("write").style.color = "#00FFAA";
}

/*$("#write").mouseenter(function() {
	$("#rules").slideDown();
});

$("#write").mouseleave(function() {
	$("#rules").slideUp();
});*/