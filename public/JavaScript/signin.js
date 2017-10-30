var database = firebase.database();

document.getElementById("namerow").style.display = "none";
document.getElementById("loginbutton").addEventListener("click", login);
document.getElementById("signupbutton").addEventListener("click", signUp);

function signUp() {
	if (document.getElementById("namerow").style.display !== "none") {
		var email = document.getElementById("emailinput").value;
		var password = document.getElementById("passwordinput").value;
		var fullname = document.getElementById("nameinput").value;

		if (email !== "" && password !== "") {
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(error.message);
			});

			console.log("Account Created");

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					var user = firebase.auth().currentUser;
					firebase.database().ref('users/' + user.uid).set({
						email: user.email,
						name: fullname
					});

					var updates = {};
					updates['/firsttime/' + user.uid] = true;

					firebase.database().ref().update(updates);
					console.log("Data pushed");
				}
			});

			document.getElementById("emailinput").value = "";
			document.getElementById("passwordinput").value = "";
			document.getElementById("nameinput").value = "";

			//take you to next page if logged in
		}

		//prompt you to fill in email/password if they are empty
		//create alerts for different errors
	}

	else {
		document.getElementById("namerow").style.display = "table-row";
		console.log("change to sign up");
	}	
}

function login() {
	if (document.getElementById("namerow").style.display === "none") {
		var email = document.getElementById("emailinput").value;
		var password = document.getElementById("passwordinput").value;	

		if (email !== "" && password !== "") {
			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					var user = firebase.auth().currentUser;
					console.log(user);
					console.log("logged in");
				}
			});	

			//take you to next page if logged in
		}

		//prompt you to fill in email/password if they are empty
		//create alerts for different errors
	}

	else {
		document.getElementById("namerow").style.display = "table-row";
		console.log("change to login");
	}
}