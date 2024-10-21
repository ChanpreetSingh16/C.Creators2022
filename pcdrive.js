document.title = "Enter Password 1";
//pass1
var pas2 = document.getElementById("in2");
var e2 = document.getElementById("e2");
var v2 = document.getElementById("v2");

function pass2() {
	if(pas2.value === "chanr14a"){
		document.getElementById("p2").style.display = "none";
		document.getElementById("p1").style.display = "block";
		document.title = "Enter Password 2";
	}
	else{
		document.getElementById("container").style.display = "none";
		alert("Wrong password");
		in2.value = "";
		in2.select();
	}
}

//pass2
var pas1 = document.getElementById("in1");
var e1 = document.getElementById("e1");
var v1 = document.getElementById("v1");

function pass1() {
	if(pas1.value === "1520"){
		document.getElementById("container").style.display = "block";
		document.getElementById("p1").style.display = "none";
		document.title = "Chanpreet Singh's link drive";
	}
	else{
		document.getElementById("container").style.display = "none";
		alert("Wrong password");
		in1.value = "";
		in1.select();
	}
}