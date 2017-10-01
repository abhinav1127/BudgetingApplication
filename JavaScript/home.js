function signOut() {
    window.location.href = "../HTML/signing.html";
}




function settingsdisplay() {
    document.getElementById("settings").classList.toggle.("hide");
}
document.getElementById("settings").classList.toggle.("hide");
document.getElementById("settingsicon").addEventListener("click", settingsdisplay);








document.getElementById("plusbutton").addEventListener("click", stayHome);
    function stayHome () {
        document.getElementById("newtimegroup").classlist.toggle("show");
    }
    function plusbutton() {
        var element = document.getElementById("newtimegroup")
        element.classList.toggle("show")
    }
