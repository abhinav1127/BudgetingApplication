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

/*document.getElementById('dropdown').addEventListener('click', showHideDropdown);

function showHideDropdown() {
    docuemnt.getElementById('sort').style.display= 'block';
}*/

document.getElementById('datadate').addEventListener('click', function(){
    var sortingBy = document.getElementById('datadate');
    sortData(sortingBy);
});

document.getElementById('datatitle').addEventListener('click', function(){
    var sortingBy = document.getElementById('datatitle');
    sortData(sortingBy);
});

document.getElementById('datacategory').addEventListener('click', function(){
    var sortingBy = document.getElementById('datacategory');
    sortData(sortingBy);
});

document.getElementById('dataamount').addEventListener('click', function(){
    var sortingBy = document.getElementById('dataamount');
    sortData(sortingBy);
});

document.getElementById('datareason').addEventListener('click', function(){
    var sortingBy = document.getElementById('datareason');
    sortData(sortingBy);
});

document.getElementById('datacashcredit').addEventListener('click', function(){
    var sortingBy = document.getElementById('datacashcredit');
    sortData(sortingBy);
});

function sortData (sortingBy) {
    //sort the data lol
}
