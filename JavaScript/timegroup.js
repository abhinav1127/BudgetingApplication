document.getElementById("settingsdiv").style.display = "none";

function displaySettings() {
	document.getElementById("settingsdiv").style.display = "block";
}

document.getElementById("home").addEventListener("click", function() {window.location.href="../HTML/home.html";});
document.getElementById("settingsgear").addEventListener("click", displaySettings);