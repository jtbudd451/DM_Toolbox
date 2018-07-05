var i = 6;
var DIE_MIN = 1;
var Alltext = "";

// Roll a # sided die
function roll_die(max){
	console.log("Rolling die " + max);
	return Math.floor(Math.random() * (max - DIE_MIN)) + DIE_MIN;
}

function add_text(text) {
	Alltext += text + "\n";
	document.getElementById("story").value = Alltext
}

function clear_text() {
	Alltext = "";
	document.getElementById("story").value = Alltext
}