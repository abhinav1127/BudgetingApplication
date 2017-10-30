var settingsCounter = 0;

document.getElementById('settingsgear').addEventListener('click', showHideSettings);

function showHideSettings() {
    if (settingsCounter % 2 == 0) {
        console.log('1');
        document.getElementById('settingsdiv').style.display= 'block';
    } else {
        console.log('2');
        document.getElementById('settingsdiv').style.display= 'none';
    }
    settingsCounter++;
}

document.getElementById('editbutton').addEventListener('click', showHideEditScreen);

function showHideEditScreen() {
    document.getElementById('editdiv').style.display= 'block';
    document.getElementById('editbutton').style.display = 'none';
    var displayinfo = document.getElementsByClassName('displayinfo');
    for (let i = 0; i < displayinfo.length; i++) {
        displayinfo[i].style.display = "none";
    }
    var editinfo = document.getElementsByClassName('editinfo');
    for (let i = 0; i <editinfo.length; i++) {
        editinfo[i].style.display = "block";
    }

}

document.getElementById('deletebutton').addEventListener('click', showHideDeleteScreen);

function showHideDeleteScreen(){
    document.getElementById('deletediv').style.display= 'block';
}

document.getElementById('cancelbutton').addEventListener('click', showHideCancel);

function showHideCancel() {
    document.getElementById('editdiv').style.display= 'none';
    document.getElementById('editbutton').style.display = 'block';
    var displayinfo = document.getElementsByClassName('displayinfo');
    for (let i = 0; i < displayinfo.length; i++) {
        displayinfo[i].style.display = "block";
    }
    var editinfo = document.getElementsByClassName('editinfo');
    for (let i = 0; i <editinfo.length; i++) {
        editinfo[i].style.display = "none";
    }
}

document.getElementById('savebutton').addEventListener('click', showHideSaveChanges);

function showHideSaveChanges() {
    showHideCancel();
    alert("Your changes have been saved!");
}

document.getElementById('deleteyes').addEventListener('click', showHideDeleteYes);

function showHideDeleteYes() {
    //Reference to account deleted page
    window.location.href = "accountdeleted.html";
}

document.getElementById('deleteno').addEventListener('click', showHideDeleteNo);

function showHideDeleteNo() {
    document.getElementById('deletediv').style.display= 'none';
}
