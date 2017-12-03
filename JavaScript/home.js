
//settings
function toggleSettings() {
    console.log("hey");
	document.getElementById("settings").classList.toggle("hide");
}

document.getElementById("settings").classList.toggle("hide");
document.getElementById("settingsicon").addEventListener("click", toggleSettings);

//dropTime
var period = "";
document.getElementById('perioddropcontent').classList.toggle("hide");
function dropTime() {
    document.getElementById('perioddropcontent').classList.toggle("hide");
    if (this.id !== 'perioddrop') {
        period = this.id;
    }
}
document.getElementById('perioddrop').addEventListener("click", dropTime);

//dropDay
function dropSituation() {
    document.getElementById('perioddropcontent').classList.toggle("hide");
}
document.getElementById('day').addEventListener("click", dropSituation);
document.getElementById('week').addEventListener("click", dropSituation);
document.getElementById('month').addEventListener("click", dropSituation);
document.getElementById('year').addEventListener("click", dropSituation);

//addTimeGroup
var countgroup = 0;

function saveTimeGroup() {
    var newtimegroup = document.createElement('div');
    newtimegroup.setAttribute('id', ("timegroup" + countgroup + ""));

    var newsettitle = document.createElement('p');
    newsettitle.setAttribute('id','settitle' + countgroup + "");
    newsettitle.innerHTML = document.getElementById("settitleinput").value;
    newtimegroup.appendChild(newsettitle);

    var spendinglimit = document.createElement('p');
    spendinglimit.setAttribute('id','spendinglimit' + countgroup + "");
    spendinglimit.innerHTML = document.getElementById("spendinglimitinput").value + "per" + period + "";
    newtimegroup.appendChild(spendinglimit);

    //alerts
    var alerts = document.createElement('p');
    alerts.setAttribute('id','alerts' + countgroup + "");

    var alertable = document.createElement('table');
    alertable.setAttribute('id', 'alertable' + countgroup + "");
    alerts.appendChild(alertable);

    var tr1 = document.createElement('tr');
    tr1.setAttribute('id', 'tr1' + countgroup + "");

    var frequency = document.createElement('td');
    frequency.setAttribute('id', 'frequency' + countgroup + "");
    frequency.innerHTML = dayOfWeek;
    tr1.appendChild(frequency);
    newtimegroup.appendChild(alerts);

    document.getElementById('timegroups').appendChild(newtimegroup);

    document.getElementById('newtimegroup').style.display = "none";
    //document.getElementById('newtimegroup').style.value =

    countgroup += 1;
}

var time = 0;
function addTime() {
    var time = document.createElement('td');
    time.setAttribute('id', 'time' + time + "");
    time += 1;
}
document.getElementById("addClock").addEventListener("click", addTime);

function unhide() {
    document.getElementById('newtimegroup').style.display = "block";
}
document.getElementById("plusbutton").addEventListener("click", unhide);

document.getElementById("checkbutton").addEventListener("click", saveTimeGroup);

function hide() {
    document.getElementById('newtimegroup').style.display = "none";
    //document.getElementById().style.value saves value and then save value to thing set
}
document.getElementById("cancelbutton").addEventListener("click", hide);


// function
// document.getElementById("plusbutton").addEventListener("click", stayHome);
//     function stayHome () {
//         document.getElementById("newtimegroup").classlist.toggle("show");
//     }
//     function plusbutton() {
//         var element = document.getElementById("newtimegroup")
//         element.classList.toggle("show")
//     }
//
// //do tutorial after firebase
