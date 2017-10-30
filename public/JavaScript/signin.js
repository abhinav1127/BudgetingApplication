var database = firebase.database();

document.getElementById("loginbutton").addEventListener("click", login);
document.getElementById("signupbutton").addEventListener("click", signUp);

function login() {
	if (document.getElementById("login").style.display === "block") {
		var email = document.getElementById("loginemail").value;
		var password = document.getElementById("loginpassword").value;		
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (error) {
				console.log(errorMessage);
			}
		});

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				var user = firebase.auth().currentUser;
				console.log(user);
				console.log("logged in");
			}
		});
	}

	else {
		document.getElementById("login").style.display = "block";
		document.getElementById("signup").style.display = "none";
		console.log("change to login");
	}
}

function signUp() {
	if (document.getElementById("signup").style.display !== "none") {
		var email = document.getElementById("signupemail").value;
		var password = document.getElementById("signuppassword").value;
		var fullname = document.getElementById("name").value;

		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(error.message);
		});

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				var user = firebase.auth().currentUser;
				console.log("Account Created");
				console.log(user);
				console.log(user.auth);

				firebase.database().ref('users/' + user.uid).set({
					email: user.email,
					name: fullname
				});
			}
		});
	}

	else {
		document.getElementById("signup").style.display = "block";
		document.getElementById("login").style.display = "none";
		console.log("change to sign in");
	}	
}