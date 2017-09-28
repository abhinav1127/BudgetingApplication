var categorytoggle = 0;
var settingstoggle = 0;

function displaySettings() {
	document.getElementById("settingsdiv").style.display = "block";
}

document.getElementById("settingsgear").addEventListener("click", displaySettings);

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
	if (categorytoggle === 0) {
		document.getElementById("categoryitems").style.display = "block";
		categorytoggle = 1;
	}
	
	else {
		document.getElementById("categoryitems").style.display = "none";
		categorytoggle = 0;
	}
}

document.getElementById("showcategories").addEventListener("click", toggleCategories);

function toggleSettings() {
	if (settingstoggle === 0) {
		document.getElementById("settingsdiv").style.display = "block";
		settingstoggle = 1;
	}
	
	else {
		document.getElementById("settingsdiv").style.display = "none";
		settingstoggle = 0;
	}
}

document.getElementById("settingsgear").addEventListener("click", toggleSettings);

function hideNewRow() {
	document.getElementById("newrow").style.display = "none";
	document.getElementById("categoryitems").style.display = "none";
}

document.getElementById("addbutton").addEventListener("click", hideNewRow);