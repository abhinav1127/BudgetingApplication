var categorytoggle = 0;

function signOut() {
	//firebase code to sign out a user
	//if user is signed out:
	window.location.href = "signin.html";
}

/*
	Include something here to hide settings div if rest of page is clicked


	function hideSettings() {
		if (settingstoggle === 1) {
			document.getElementById("settingsdiv").style.display = "none";
		}
	}

	document.addEventListener("click", hideSettings);
*/

function newRow() {
	document.getElementById("table").appendChild(document.getElementById("newrow"));
	document.getElementById("newrow").style.display = "table-row";
}

document.getElementById("plusbutton").addEventListener("click", newRow);

function toggleCategories() {
	document.getElementById("categorydiv").classList.toggle("hide");
}

document.getElementById("categorydiv").classList.toggle("hide");
document.getElementById("categorydrop").addEventListener("click", toggleCategories);

function toggleSettings() {
	document.getElementById("settingsdiv").classList.toggle("hide");
}

document.getElementById("settingsdiv").classList.toggle("hide");
document.getElementById("settingsgear").addEventListener("click", toggleSettings);


function hideNewRow() {
	document.getElementById("newrow").style.display = "none";
	document.getElementById("categorydiv").classList.toggle("hide");
}

document.getElementById("addbutton").addEventListener("click", hideNewRow);