let fileContent;
const url = 'http://127.0.0.1:8000/egg';
var myChart;

document.getElementById('datainputbtn').addEventListener('change', function (e) {
    let file = document.getElementById('datainputbtn').files[0];
    (async () => {
        fileContent = await file.text();
        console.log("done");
    })();
});

document.addEventListener("DOMContentLoaded", function () {
    let eggnames = document.getElementById('eggs')
    let names = sessionStorage.getItem('Eggnames');
    names = names.split("/")
    for (let i = 0; i < names.length; i++) {
        option = document.createElement('option');
        option.value = option.text = names[i];
        eggnames.add(option);
    }
    updateDatatypes();
});

function updateDatatypes() {
    let sensortype = document.getElementById("eggs");
    console.log(sensortype.value);

    if (sensortype.value.substring(0, 2) == "ss") {
        document.getElementById("opt1").style.display = "block";
        document.getElementById("opt2").style.display = "block";
        document.getElementById("opt3").style.display = "block";
        document.getElementById("opt4").style.display = "none";
    } else if (sensortype.value.substring(0, 2) == "as") {
        document.getElementById("opt1").style.display = "none";
        document.getElementById("opt2").style.display = "none";
        document.getElementById("opt3").style.display = "none";
        document.getElementById("opt4").style.display = "block";
    } else {
        document.getElementById("opt1").style.display = "block";
        document.getElementById("opt2").style.display = "block";
        document.getElementById("opt3").style.display = "block";
        document.getElementById("opt4").style.display = "none";
    }

}
function uploadData() {
    parseforapi(fileContent);
}

function parseforapi(datastring) {
    if (datastring == "") {
        alert("cannot send empyty message");
    }
    if (sessionStorage) {
        if (!sessionStorage.getItem("Username")) {
            alert("not logged in yet...");
            return;
        }
    }


    let username = sessionStorage.getItem("EggId");



    const response = new XMLHttpRequest();

    const data = JSON.stringify({
        'eggId': username,
        'data': datastring
    }
    );

    response.open("POST", url)
    response.setRequestHeader('Content-Type', 'application/json');

    response.send(data);

    response.onload = (e) => {

        console.log(response);
    }
}
const temp_clock = [
    "2022-01-06 22:00:00", "2022-01-06 22:10:00", "2022-01-06 22:20:00", "2022-01-06 22:30:00", "2022-01-06 22:40:00", "2022-01-06 22:50:00", "2022-01-06 23:00:00", "2022-01-06 23:10:00", "2022-01-06 23:20:00", "2022-01-06 23:30:00", "2022-01-06 23:40:00", "2022-01-06 23:50:00", "2022-01-07 00:00:00", "2022-01-07 00:10:00", "2022-01-07 00:20:00", "2022-01-07 00:30:00", "2022-01-07 00:40:00", "2022-01-07 00:50:00", "2022-01-07 01:00:00", "2022-01-07 01:10:00", "2022-01-07 01:20:00", "2022-01-07 01:30:00", "2022-01-07 01:40:00", "2022-01-07 01:50:00", "2022-01-07 02:00:00", "2022-01-07 02:10:00", "2022-01-07 02:20:00", "2022-01-07 02:30:00", "2022-01-07 02:40:00", "2022-01-07 02:50:00", "2022-01-07 03:00:00", "2022-01-07 03:10:00", "2022-01-07 03:20:00", "2022-01-07 03:30:00", "2022-01-07 03:40:00", "2022-01-07 03:50:00", "2022-01-07 04:00:00", "2022-01-07 04:10:00", "2022-01-07 04:20:00", "2022-01-07 04:30:00", "2022-01-07 04:40:00", "2022-01-07 04:50:00", "2022-01-07 05:00:00", "2022-01-07 05:10:00", "2022-01-07 05:20:00", "2022-01-07 05:30:00", "2022-01-07 05:40:00", "2022-01-07 05:50:00", "2022-01-07 06:00:00", "2022-01-07 06:10:00", "2022-01-07 06:20:00", "2022-01-07 06:30:00", "2022-01-07 06:40:00", "2022-01-07 06:50:00", "2022-01-07 07:00:00", "2022-01-07 07:10:00", "2022-01-07 07:20:00", "2022-01-07 07:30:00", "2022-01-07 07:40:00", "2022-01-07 07:50:00", "2022-01-07 08:00:00", "2022-01-07 08:10:00", "2022-01-07 08:20:00", "2022-01-07 08:30:00", "2022-01-07 08:40:00", "2022-01-07 08:50:00", "2022-01-07 09:00:00", "2022-01-07 09:10:00", "2022-01-07 09:20:00", "2022-01-07 09:30:00", "2022-01-07 09:40:00", "2022-01-07 09:50:00", "2022-01-07 10:00:00", "2022-01-07 10:10:00", "2022-01-07 10:20:00", "2022-01-07 10:30:00", "2022-01-07 10:40:00", "2022-01-07 10:50:00", "2022-01-07 11:00:00", "2022-01-07 11:10:00", "2022-01-07 11:20:00", "2022-01-07 11:30:00", "2022-01-07 11:40:00", "2022-01-07 11:50:00", "2022-01-07 12:00:00", "2022-01-07 12:10:00", "2022-01-07 12:20:00", "2022-01-07 12:30:00", "2022-01-07 12:40:00", "2022-01-07 12:50:00", "2022-01-07 13:00:00", "2022-01-07 13:10:00", "2022-01-07 13:20:00", "2022-01-07 13:30:00", "2022-01-07 13:40:00", "2022-01-07 13:50:00", "2022-01-07 14:00:00", "2022-01-07 14:10:00", "2022-01-07 14:20:00", "2022-01-07 14:30:00", "2022-01-07 14:40:00", "2022-01-07 14:50:00", "2022-01-07 15:00:00", "2022-01-07 15:10:00", "2022-01-07 15:20:00", "2022-01-07 15:30:00", "2022-01-07 15:40:00", "2022-01-07 15:50:00", "2022-01-07 16:00:00", "2022-01-07 16:10:00", "2022-01-07 16:20:00", "2022-01-07 16:30:00", "2022-01-07 16:40:00", "2022-01-07 16:50:00", "2022-01-07 17:00:00", "2022-01-07 17:10:00", "2022-01-07 17:20:00", "2022-01-07 17:30:00", "2022-01-07 17:40:00", "2022-01-07 17:50:00", "2022-01-07 18:00:00", "2022-01-07 18:10:00", "2022-01-07 18:20:00", "2022-01-07 18:30:00", "2022-01-07 18:40:00", "2022-01-07 18:50:00", "2022-01-07 19:00:00", "2022-01-07 19:10:00", "2022-01-07 19:20:00", "2022-01-07 19:30:00", "2022-01-07 19:40:00", "2022-01-07 19:50:00", "2022-01-07 20:00:00", "2022-01-07 20:10:00", "2022-01-07 20:20:00", "2022-01-07 20:30:00", "2022-01-07 20:40:00", "2022-01-07 20:50:00", "2022-01-07 21:00:00", "2022-01-07 21:10:00", "2022-01-07 21:20:00", "2022-01-07 21:30:00", "2022-01-07 21:40:00", "2022-01-07 21:50:00", "2022-01-07 22:00:00", "2022-01-07 22:10:00", "2022-01-07 22:20:00", "2022-01-07 22:30:00", "2022-01-07 22:40:00", "2022-01-07 22:50:00", "2022-01-07 23:00:00", "2022-01-07 23:10:00", "2022-01-07 23:20:00", "2022-01-07 23:30:00", "2022-01-07 23:40:00", "2022-01-07 23:50:00", "2022-01-08 00:00:00", "2022-01-08 00:10:00", "2022-01-08 00:20:00", "2022-01-08 00:30:00", "2022-01-08 00:40:00", "2022-01-08 00:50:00", "2022-01-08 01:00:00", "2022-01-08 01:10:00", "2022-01-08 01:20:00", "2022-01-08 01:30:00", "2022-01-08 01:40:00", "2022-01-08 01:50:00", "2022-01-08 02:00:00", "2022-01-08 02:10:00", "2022-01-08 02:20:00", "2022-01-08 02:30:00", "2022-01-08 02:40:00", "2022-01-08 02:50:00", "2022-01-08 03:00:00", "2022-01-08 03:10:00", "2022-01-08 03:20:00", "2022-01-08 03:30:00", "2022-01-08 03:40:00", "2022-01-08 03:50:00", "2022-01-08 04:00:00", "2022-01-08 04:10:00", "2022-01-08 04:20:00", "2022-01-08 04:30:00", "2022-01-08 04:40:00", "2022-01-08 04:50:00", "2022-01-08 05:00:00", "2022-01-08 05:10:00", "2022-01-08 05:20:00", "2022-01-08 05:30:00", "2022-01-08 05:40:00", "2022-01-08 05:50:00", "2022-01-08 06:00:00", "2022-01-08 06:10:00", "2022-01-08 06:20:00", "2022-01-08 06:30:00", "2022-01-08 06:40:00", "2022-01-08 06:50:00", "2022-01-08 07:00:00", "2022-01-08 07:10:00", "2022-01-08 07:20:00", "2022-01-08 07:30:00", "2022-01-08 07:40:00", "2022-01-08 07:50:00", "2022-01-08 08:00:00", "2022-01-08 08:10:00", "2022-01-08 08:20:00", "2022-01-08 08:30:00", "2022-01-08 08:40:00", "2022-01-08 08:50:00", "2022-01-08 09:00:00", "2022-01-08 09:10:00", "2022-01-08 09:20:00", "2022-01-08 09:30:00", "2022-01-08 09:40:00", "2022-01-08 09:50:00", "2022-01-08 10:00:00", "2022-01-08 10:10:00", "2022-01-08 10:20:00", "2022-01-08 10:30:00", "2022-01-08 10:40:00", "2022-01-08 10:50:00", "2022-01-08 11:00:00", "2022-01-08 11:10:00", "2022-01-08 11:20:00", "2022-01-08 11:30:00", "2022-01-08 11:40:00", "2022-01-08 11:50:00", "2022-01-08 12:00:00", "2022-01-08 12:10:00", "2022-01-08 12:20:00", "2022-01-08 12:30:00", "2022-01-08 12:40:00", "2022-01-08 12:50:00", "2022-01-08 13:00:00", "2022-01-08 13:10:00", "2022-01-08 13:20:00", "2022-01-08 13:30:00", "2022-01-08 13:40:00", "2022-01-08 13:50:00", "2022-01-08 14:00:00", "2022-01-08 14:10:00", "2022-01-08 14:20:00", "2022-01-08 14:30:00", "2022-01-08 14:40:00", "2022-01-08 14:50:00", "2022-01-08 15:00:00", "2022-01-08 15:10:00", "2022-01-08 15:20:00", "2022-01-08 15:30:00", "2022-01-08 15:40:00", "2022-01-08 15:50:00", "2022-01-08 16:00:00", "2022-01-08 16:10:00", "2022-01-08 16:20:00", "2022-01-08 16:30:00", "2022-01-08 16:40:00", "2022-01-08 16:50:00", "2022-01-08 17:00:00", "2022-01-08 17:10:00", "2022-01-08 17:20:00", "2022-01-08 17:30:00", "2022-01-08 17:40:00", "2022-01-08 17:50:00", "2022-01-08 18:00:00", "2022-01-08 18:10:00", "2022-01-08 18:20:00", "2022-01-08 18:30:00", "2022-01-08 18:40:00", "2022-01-08 18:50:00", "2022-01-08 19:00:00", "2022-01-08 19:10:00", "2022-01-08 19:20:00", "2022-01-08 19:30:00", "2022-01-08 19:40:00", "2022-01-08 19:50:00", "2022-01-08 20:00:00", "2022-01-08 20:10:00", "2022-01-08 20:20:00", "2022-01-08 20:30:00", "2022-01-08 20:40:00", "2022-01-08 20:50:00", "2022-01-08 21:00:00", "2022-01-08 21:10:00", "2022-01-08 21:20:00", "2022-01-08 21:30:00", "2022-01-08 21:40:00", "2022-01-08 21:50:00", "2022-01-08 22:00:00", "2022-01-08 22:10:00", "2022-01-08 22:20:00", "2022-01-08 22:30:00", "2022-01-08 22:40:00", "2022-01-08 22:50:00", "2022-01-08 23:00:00", "2022-01-08 23:10:00", "2022-01-08 23:20:00", "2022-01-08 23:30:00", "2022-01-08 23:40:00", "2022-01-08 23:50:00", "2022-01-09 00:00:00", "2022-01-09 00:10:00", "2022-01-09 00:20:00", "2022-01-09 00:30:00", "2022-01-09 00:40:00", "2022-01-09 00:50:00", "2022-01-09 01:00:00", "2022-01-09 01:10:00", "2022-01-09 01:20:00", "2022-01-09 01:30:00", "2022-01-09 01:40:00", "2022-01-09 01:50:00", "2022-01-09 02:00:00", "2022-01-09 02:10:00", "2022-01-09 02:20:00", "2022-01-09 02:30:00", "2022-01-09 02:40:00", "2022-01-09 02:50:00", "2022-01-09 03:00:00", "2022-01-09 03:10:00", "2022-01-09 03:20:00", "2022-01-09 03:30:00", "2022-01-09 03:40:00", "2022-01-09 03:50:00", "2022-01-09 04:00:00", "2022-01-09 04:10:00", "2022-01-09 04:20:00", "2022-01-09 04:30:00", "2022-01-09 04:40:00", "2022-01-09 04:50:00", "2022-01-09 05:00:00", "2022-01-09 05:10:00", "2022-01-09 05:20:00", "2022-01-09 05:30:00", "2022-01-09 05:40:00", "2022-01-09 05:50:00", "2022-01-09 06:00:00", "2022-01-09 06:10:00", "2022-01-09 06:20:00", "2022-01-09 06:30:00", "2022-01-09 06:40:00", "2022-01-09 06:50:00", "2022-01-09 07:00:00", "2022-01-09 07:10:00", "2022-01-09 07:20:00", "2022-01-09 07:30:00", "2022-01-09 07:40:00", "2022-01-09 07:50:00", "2022-01-09 08:00:00", "2022-01-09 08:10:00", "2022-01-09 08:20:00", "2022-01-09 08:30:00", "2022-01-09 08:40:00", "2022-01-09 08:50:00", "2022-01-09 09:00:00", "2022-01-09 09:10:00", "2022-01-09 09:20:00", "2022-01-09 09:30:00", "2022-01-09 09:40:00", "2022-01-09 09:50:00", "2022-01-09 10:00:00", "2022-01-09 10:10:00", "2022-01-09 10:20:00", "2022-01-09 10:30:00", "2022-01-09 10:40:00", "2022-01-09 10:50:00", "2022-01-09 11:00:00", "2022-01-09 11:10:00", "2022-01-09 11:20:00", "2022-01-09 11:30:00", "2022-01-09 11:40:00", "2022-01-09 11:50:00", "2022-01-09 12:00:00", "2022-01-09 12:10:00", "2022-01-09 12:20:00", "2022-01-09 12:30:00", "2022-01-09 12:40:00", "2022-01-09 12:50:00", "2022-01-09 13:00:00", "2022-01-09 13:10:00", "2022-01-09 13:20:00", "2022-01-09 13:30:00", "2022-01-09 13:40:00", "2022-01-09 13:50:00", "2022-01-09 14:00:00", "2022-01-09 14:10:00", "2022-01-09 14:20:00", "2022-01-09 14:30:00", "2022-01-09 14:40:00", "2022-01-09 14:50:00", "2022-01-09 15:00:00", "2022-01-09 15:10:00", "2022-01-09 15:20:00", "2022-01-09 15:30:00", "2022-01-09 15:40:00", "2022-01-09 15:50:00", "2022-01-09 16:00:00", "2022-01-09 16:10:00", "2022-01-09 16:20:00", "2022-01-09 16:30:00", "2022-01-09 16:40:00", "2022-01-09 16:50:00", "2022-01-09 17:00:00", "2022-01-09 17:10:00", "2022-01-09 17:20:00", "2022-01-09 17:30:00", "2022-01-09 17:40:00", "2022-01-09 17:50:00", "2022-01-09 18:00:00", "2022-01-09 18:10:00", "2022-01-09 18:20:00", "2022-01-09 18:30:00", "2022-01-09 18:40:00", "2022-01-09 18:50:00", "2022-01-09 19:00:00", "2022-01-09 19:10:00", "2022-01-09 19:20:00", "2022-01-09 19:30:00", "2022-01-09 19:40:00", "2022-01-09 19:50:00", "2022-01-09 20:00:00", "2022-01-09 20:10:00", "2022-01-09 20:20:00", "2022-01-09 20:30:00", "2022-01-09 20:40:00", "2022-01-09 20:50:00", "2022-01-09 21:00:00", "2022-01-09 21:10:00", "2022-01-09 21:20:00", "2022-01-09 21:30:00", "2022-01-09 21:40:00", "2022-01-09 21:50:00", "2022-01-09 22:00:00", "2022-01-09 22:10:00", "2022-01-09 22:20:00", "2022-01-09 22:30:00", "2022-01-09 22:40:00", "2022-01-09 22:50:00", "2022-01-09 23:00:00", "2022-01-09 23:10:00", "2022-01-09 23:20:00", "2022-01-09 23:30:00", "2022-01-09 23:40:00", "2022-01-09 23:50:00", "2022-01-10 00:00:00", "2022-01-10 00:10:00", "2022-01-10 00:20:00", "2022-01-10 00:30:00", "2022-01-10 00:40:00", "2022-01-10 00:50:00", "2022-01-10 01:00:00", "2022-01-10 01:10:00", "2022-01-10 01:20:00", "2022-01-10 01:30:00", "2022-01-10 01:40:00", "2022-01-10 01:50:00", "2022-01-10 02:00:00", "2022-01-10 02:10:00", "2022-01-10 02:20:00", "2022-01-10 02:30:00", "2022-01-10 02:40:00", "2022-01-10 02:50:00", "2022-01-10 03:00:00", "2022-01-10 03:10:00", "2022-01-10 03:20:00", "2022-01-10 03:30:00", "2022-01-10 03:40:00", "2022-01-10 03:50:00", "2022-01-10 04:00:00", "2022-01-10 04:10:00", "2022-01-10 04:20:00", "2022-01-10 04:30:00", "2022-01-10 04:40:00", "2022-01-10 04:50:00", "2022-01-10 05:00:00", "2022-01-10 05:10:00", "2022-01-10 05:20:00", "2022-01-10 05:30:00", "2022-01-10 05:40:00", "2022-01-10 05:50:00", "2022-01-10 06:00:00", "2022-01-10 06:10:00", "2022-01-10 06:20:00", "2022-01-10 06:30:00", "2022-01-10 06:40:00", "2022-01-10 06:50:00", "2022-01-10 07:00:00", "2022-01-10 07:10:00", "2022-01-10 07:20:00", "2022-01-10 07:30:00", "2022-01-10 07:40:00", "2022-01-10 07:50:00", "2022-01-10 08:00:00", "2022-01-10 08:10:00", "2022-01-10 08:20:00", "2022-01-10 08:30:00", "2022-01-10 08:40:00", "2022-01-10 08:50:00", "2022-01-10 09:00:00", "2022-01-10 09:10:00", "2022-01-10 09:20:00", "2022-01-10 09:30:00", "2022-01-10 09:40:00", "2022-01-10 09:50:00", "2022-01-10 10:00:00", "2022-01-10 10:10:00", "2022-01-10 10:20:00", "2022-01-10 10:30:00", "2022-01-10 10:40:00", "2022-01-10 10:50:00", "2022-01-10 11:00:00", "2022-01-10 11:10:00", "2022-01-10 11:20:00", "2022-01-10 11:30:00", "2022-01-10 11:40:00", "2022-01-10 11:50:00", "2022-01-10 12:00:00", "2022-01-10 12:10:00", "2022-01-10 12:20:00", "2022-01-10 12:30:00", "2022-01-10 12:40:00", "2022-01-10 12:50:00", "2022-01-10 13:00:00", "2022-01-10 13:10:00", "2022-01-10 13:20:00", "2022-01-10 13:30:00", "2022-01-10 13:40:00", "2022-01-10 13:50:00", "2022-01-10 14:00:00", "2022-01-10 14:10:00", "2022-01-10 14:20:00", "2022-01-10 14:30:00", "2022-01-10 14:40:00", "2022-01-10 14:50:00", "2022-01-10 15:00:00", "2022-01-10 15:10:00", "2022-01-10 15:20:00", "2022-01-10 15:30:00", "2022-01-10 15:40:00", "2022-01-10 15:50:00", "2022-01-10 16:00:00", "2022-01-10 16:10:00", "2022-01-10 16:20:00", "2022-01-10 16:30:00", "2022-01-10 16:40:00", "2022-01-10 16:50:00", "2022-01-10 17:00:00", "2022-01-10 17:10:00", "2022-01-10 17:20:00", "2022-01-10 17:30:00", "2022-01-10 17:40:00", "2022-01-10 17:50:00", "2022-01-10 18:00:00", "2022-01-10 18:10:00", "2022-01-10 18:20:00", "2022-01-10 18:30:00", "2022-01-10 18:40:00", "2022-01-10 18:50:00", "2022-01-10 19:00:00", "2022-01-10 19:10:00", "2022-01-10 19:20:00", "2022-01-10 19:30:00", "2022-01-10 19:40:00", "2022-01-10 19:50:00", "2022-01-10 20:00:00", "2022-01-10 20:10:00", "2022-01-10 20:20:00", "2022-01-10 20:30:00", "2022-01-10 20:40:00", "2022-01-10 20:50:00", "2022-01-10 21:00:00", "2022-01-10 21:10:00", "2022-01-10 21:20:00", "2022-01-10 21:30:00", "2022-01-10 21:40:00", "2022-01-10 21:50:00"
]
const temp_data = [
    8.6, 9.2, 7.1, 9.7, 4.3, 9.4, 8.5, 9.4, 8.7, 8.3, 9.3, 6.3, 7, 6.9, 8, 9.2, 8.2, 4.3, 5.1, 5.3, 5.3, 8.1, 8.3, 4.9, 5.4, 9.6, 6.6, 7, 6.9, 9.4, 4.4, 4.2, 6.4, 4.7, 9.6, 4.1, 6.8, 6.1, 5.2, 8.3, 7.5, 5.9, 4.3, 5.6, 6.6, 7.9, 8.9, 5.3, 5.8, 8, 5, 7.4, 4.5, 9.9, 8.1, 8.9, 6.3, 6.8, 9.1, 4.8, 8.5, 4.7, 8.9, 6.2, 7.8, 8.4, 5.5, 5.3, 8.8, 5.9, 9.2, 8.8, 4.5, 8.7, 8.7, 4.4, 7.4, 9.2, 6.5, 7.9, 9.9, 5.6, 6.7, 4.5, 10, 6.2, 5.2, 5.3, 8.8, 7, 6.2, 9.1, 9.2, 8.2, 8, 5.5, 5.7, 8.4, 5.5, 7.4, 8.6, 4.8, 7.8, 8.6, 9.6, 4.5, 6.3, 9.8, 4.7, 4.8, 9.2, 4.4, 6, 9.2, 5.7, 6.2, 10, 5, 6.7, 4.4, 7.7, 8.4, 6.4, 8.1, 4.5, 7, 7.2, 6.3, 6.9, 7.1, 7.9, 8.6, 7.5, 4.2, 9, 6.1, 6.8, 8.1, 6.9, 8.2, 7.2, 6.1, 6.9, 8.8, 8.4, 7, 9.2, 4.4, 9.8, 9.5, 7.1, 9.3, 5.7, 4.1, 4.7, 9, 7.9, 6.1, 9.8, 8, 7.9, 5, 4.7, 8, 5.9, 8.9, 4.6, 6.9, 6.5, 8.3, 7.3, 9.1, 7, 9.8, 6.7, 7.3, 8, 5.4, 4.6, 6.5, 4.2, 9.5, 7.4, 4.5, 8.4, 10, 9.8, 6.9, 7.6, 9.5, 8.4, 4, 8.4, 6.2, 6.3, 9.7, 4.8, 7.2, 5.3, 4.3, 9.7, 6.2, 5.6, 8.9, 8.5, 4.5, 8.9, 9.4, 7.4, 6, 9.8, 5.2, 7.2, 9.8, 5.9, 4.4, 5.5, 9.3, 5.6, 7.4, 6.1, 5, 8.9, 5.4, 9.8, 8, 6.8, 8.1, 5.1, 5.5, 9.3, 9.4, 8.6, 4.3, 9.8, 7.6, 9.5, 9.5, 7.9, 4.3, 7.4, 8.7, 4.7, 9.9, 9, 7.3, 4.2, 8.7, 7, 7.1, 5.6, 4.7, 8.4, 4.3, 7.3, 8.9, 7.7, 9.6, 5.2, 4.6, 7.5, 9.6, 7.2, 7.6, 7.9, 5.6, 7.9, 10, 4.9, 7.9, 6.1, 8.1, 6.9, 9, 6.7, 5.3, 4.5, 8.7, 8.7, 5.9, 6.4, 4.2, 8.5, 8.7, 5.8, 6.1, 9, 9.6, 9.4, 6.2, 4.1, 5, 7.5, 4.5, 9.3, 9.6, 8.8, 4.8, 4.8, 6.3, 5, 6.6, 10, 5.1, 5.2, 9.5, 4.1, 8.3, 6, 4.1, 4.5, 9.3, 5.5, 9.4, 8.7, 4.5, 7, 7.3, 9.5, 5.7, 6.4, 4.4, 8.6, 5.3, 8, 6.9, 8, 5.7, 9.8, 9.3, 4.4, 8.1, 6.2, 6.5, 9.7, 4.7, 6.6, 8.7, 9.2, 5.4, 6.8, 5.6, 7.6, 4.4, 7.1, 9, 6, 9.1, 8.5, 9.3, 4, 4.6, 5, 6.5, 9.9, 8.3, 5.2, 7.6, 10, 8.2, 6.3, 4.3, 7.8, 9.7, 9.5, 7.8, 8.6, 5.1, 8.9, 4.3, 5.9, 4.2, 9.5, 9.2, 7.5, 8.9, 8.9, 9.9, 4.4, 5.6, 9.1, 7.8, 4.4, 6.9, 6.5, 8.2, 4.2, 4.6, 7.2, 7.8, 4.6, 9.3, 8.2, 5.6, 4.6, 9.5, 4.4, 4.3, 6.4, 8.2, 5, 7.7, 6.1, 9.8, 7.5, 7.4, 8.7, 8.9, 6.2, 9.6, 7.6, 7.8, 6.8, 5.5, 4.1, 8.5, 9.4, 5.5, 7.3, 9.8, 5.9, 8.1, 7.9, 6.2, 5.4, 9.3, 7.1, 7.5, 5.8, 9.4, 7, 6, 6.1, 6.1, 4.6, 8, 5.2, 4.5, 6.6, 8, 8, 6.4, 9.2, 6.4, 8.7, 4.7, 4.9, 5.8, 9.8, 6, 9.6, 9.1, 4.3, 9.2, 5.7, 7.7, 6.6, 7.8, 7.7, 6, 8.3, 9.4, 4.7, 9.1, 9.2, 6.7, 7.2, 5, 5.6, 6, 6.6, 6.5, 9.9, 5.7, 4.4, 7.3, 5.2, 6.4, 4.5, 9.1, 7, 8.7, 8.9, 7.5, 7.1, 8.3, 5.5, 6.4, 5.8, 8.1, 9.6, 9.9, 9.4, 5.9, 4.4, 9.6, 5.8, 6.6, 8.2, 6.5, 5.8, 9.1, 7.6, 6, 5.2, 8, 5.9, 4.1, 6.6, 7.5, 6.6, 6.7, 6.1, 6.7, 4.4, 7.7, 5.1, 7.1, 7.5, 5.8, 4, 4.1, 6.8, 8.4, 10, 9.8, 9.2, 7.8, 7.3, 9.7, 4.9, 4.2, 4.7, 10, 7.7, 9.4, 5.1, 7, 7.4, 7.9, 7.1, 5.6, 8.8, 4.9, 4.7, 9.6, 7.4, 5.8, 8.3, 7.7, 8.9, 5.7, 5.9, 8.9, 8.5, 6.2, 4.9, 5.2, 4.7, 4.6, 5.5, 8.9, 6.6, 4.6, 8.3, 7.6, 9.6, 9.1, 7.5, 5.2, 4.2, 9.8, 7.5, 6.1, 8.3, 9.6
]

function getchoice() {

    //sample example data
    //chartIt(temp_clock, temp_data, "ph");
    //return; //just for testing purposes

    if (sessionStorage) {
        if (!sessionStorage.getItem("Username")) {
            alert("not logged in yet...");
            return;
        }
    }
    let ele = document.getElementsByName('datatype');
    let eggId = sessionStorage.getItem("EggId");
    let username = sessionStorage.getItem("Username")
    let datatype;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            datatype = ele[i].value;
    }
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;

    if (!startdate || !enddate) {
        alert("dates not input correctly");
        return;
    } else {
        startdate = new Date(startdate);
        enddate = new Date(enddate);
    }

    var datastring = `${url}?eggId=${eggId}&datatype=${datatype}&username=${username}`

    const response = new XMLHttpRequest();
    response.open("GET", datastring)

    let data;
    response.send();
    response.onload = (e) => {
        data = JSON.parse(response.response);


        if (data) {

            let starti = null;
            let endi = null;
            let clock_x = data.clock_data.split(";");
            clock_x.pop() //last element always null       
            clock_x = clock_x.map(function (ele) {
                ele = ele.slice(0, -1)
                return ele
            });


            let data_y = data.data.split(";");
            data_y.pop() //last elemtn always null            
            data_y = data_y.map(function (ele) {
                return parseFloat(ele);
            });


            document.getElementById('date-range').textContent = `date range is from ${clock_x[0]} to ${clock_x[clock_x.length - 1]}`;

            if (startdate.valueOf() < new Date(clock_x[0]).valueOf() || startdate.valueOf() > new Date(clock_x[clock_x.length - 1]).valueOf()) {
                alert("start date not in range");
                return;
            }
            if (enddate.valueOf() < new Date(clock_x[0]).valueOf() || enddate.valueOf() > new Date(clock_x[clock_x.length - 1]).valueOf()) {
                alert("end date not in range");
                return;
            }

            startstop = false;
            endstop = false;
            for (let i = 0; i < clock_x.length; i++) {
                const element = new Date(clock_x[i]);
                if (element.valueOf() >= startdate.valueOf() && !startstop) {
                    starti = i;
                    startstop = true;
                } else if (element.valueOf() >= enddate.valueOf() && !endstop) {
                    endi = i;
                    endstop = true;
                }
            }
            if (!starti || !endi) {
                alert("date not in range");
                return;
            }
            if (starti >= endi) {
                alert("startdate is equal to or greater than end date and that's just not possible");
                return;
            }

            clock_x = clock_x.slice(starti, endi);
            data_y = data_y.slice(starti, endi);
            console.log(clock_x);
            console.log(data_y);
            chartIt(clock_x, data_y, datatype);

        } else {
            alert("no data was recieved");
            return;
        }

    }

}


function chartIt(xs, ys, inputtype) {
    const ctx = document.getElementById('chart').getContext('2d');
    if (myChart) {
        myChart.destroy();
    }
    let typename;
    let minrange;
    let maxrange;
    switch (inputtype) {
        case "temp":
            typename = "Temperature";
            minrange = 0;
            maxrange = 100;
            break;
        case "ph":
            typename = "pH";
            minrange = 0;
            maxrange = 14;
            break;
        case "salinity":
            typename = "Salinity";
            minrange = 0;
            maxrange = 1;
            break;
        case "angle":
            typename = "Angle";
            minrange = 0;
            maxrange = 180;
            break;
        default:
            break;
    }

    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d');
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = 'rgba(250,250,250,0.8)';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    };

    //animation code begin here
    const totalDuration = 4000;
    const delayBetweenPoints = totalDuration / xs.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };
    //end here


    const timeFormat = 'YYYY/MM/DD HH:MM:SS';

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xs,
            datasets: [{
                label: typename,
                data: ys,
                backgroundColor: 'rgba(59, 137, 255, 0.3)',
                pointStyle: 'circle',
                pointRadius: 0,//set to any number to show
                borderColor: 'rgba(59, 137, 255)',
                borderWidth: 1
            }]
        },
        options: {
            layout: {
                padding: 0
            },
            animation,
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'nearest',
                axis: 'x',
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: "rgb(43, 71, 50)"
                    },
                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax) and for minimum is Math.min(dataMin, suggestedMin)
                    suggestedMin: minrange,
                    suggestedMax: maxrange,
                    title: {
                        display: true,
                        text: 'Value',
                        color: 'rgb(0, 77, 18)',
                        font: {
                            family: 'Times',
                            size: 20,
                            weight: 'normal',
                            lineHeight: 1.2,
                        },
                    },
                    grid: {
                        drawBorder: false,
                        color: "rgba(51,51,51,1)"
                    },

                },
                x: {
                    grid: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Date',
                        color: 'rgb(0, 77, 18)',
                        font: {
                            family: 'Times',
                            size: 20,
                            weight: 'normal',
                            lineHeight: 1.2,
                        },
                    },
                    ticks: {
                        maxTicksLimit: 50,  //sets numbers of max ticks on screen                        
                        color: "rgb(43, 71, 50)"
                    },
                }

            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${typename} Graph`,
                    font: {
                        family: 'Times',
                        size: 25,
                        weight: 'bold',
                        lineHeight: 1.2,
                    }
                }
            }
        },
        plugins: [plugin],
    });

}

function readFromUpload() {
    if (!fileContent) {
        alert("no file uploaded");
        return;
    }

    let temp = "";
    let ph = "";
    let salinity = "";
    let clock = "";
    let lines = fileContent.split("\n");
    let data_y = [];
    var ele = document.getElementsByName('datatype');
    let datatype;
    let starti = 0;
    let endi = 0;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            datatype = ele[i].value;
    }

    for (let i = 0; i < lines.length; i++) {
        let nums = lines[i].split(";");
        temp += nums[0] + ";";
        ph += nums[1] + ";";
        salinity += nums[2] + ";";

        clock += nums[3].slice(0, 20) + ";";
    }

    clock = clock.split(";");
    clock = clock.map((ele) => {
        return ele.slice(0, 19);
    });

    switch (datatype) {
        case "temp":
            data_y = temp.split(";");
            break;
        case "ph":
            data_y = ph.split(";");
            break;
        case "salinity":
            data_y = salinity.split(";");
            break;
        default:
            break;
    }

    clock.pop();
    data_y.pop();

    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;

    if (!startdate || !enddate) {
        alert("dates not input correctly");
        return;
    } else {
        startdate = new Date(startdate);
        enddate = new Date(enddate);
    }



    document.getElementById('date-range').textContent = `date range is from ${clock[0]} to ${clock[clock.length - 1]}`;
    if (startdate.valueOf() < new Date(clock[0]).valueOf() || startdate.valueOf() > new Date(clock[clock.length - 1]).valueOf()) {
        alert("start date not in range");
        return;
    }
    if (enddate.valueOf() < new Date(clock[0]).valueOf() || enddate.valueOf() > new Date(clock[clock.length - 1]).valueOf()) {
        alert("end date not in range");
        return;
    }

    startstop = false;
    endstop = false;
    for (let i = 0; i < clock.length; i++) {
        const element = new Date(clock[i]);
        if (element.valueOf() >= startdate.valueOf() && !startstop) {
            starti = i;
            startstop = true;
        } else if (element.valueOf() >= enddate.valueOf() && !endstop) {
            endi = i;
            endstop = false;
        }
    }
    if (!starti || !endi) {
        alert("date not in range");
        return;
    }
    if (starti >= endi) {
        alert("startdate is equal to or greater than end date and that's just not possible");
        return;
    }
    clock = clock.slice(starti, endi);
    data_y = data_y.slice(starti, endi);

    chartIt(clock, data_y, datatype);
}