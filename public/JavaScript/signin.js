var database = firebase.database();

document.getElementById("namerow").style.display = "none";
document.getElementById("loginbutton").addEventListener("click", login);
document.getElementById("signupbutton").addEventListener("click", signUp);

function signUp() {
	if (document.getElementById("namerow").style.display !== "none") {
		var email = document.getElementById("emailinput").value;
		var password = document.getElementById("passwordinput").value;
		var fullname = document.getElementById("nameinput").value;

		var authflag = false;

		if (email !== "" && password !== "") {
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(error.message);
			});

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					var user = firebase.auth().currentUser;

					if (authflag === false) {
						console.log("Account Created");
						firebase.database().ref('users/' + user.uid).set({
							email: user.email,
							name: fullname
						});
						console.log("Data pushed");
						authflag = true;
					}
				}
			});
		}
	}

	else {
		document.getElementById("namerow").style.display = "table-row";
		console.log("change to sign in");
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
		}	
	}

	else {
		document.getElementById("namerow").style.display = "table-row";
		console.log("change to login");
	}
}