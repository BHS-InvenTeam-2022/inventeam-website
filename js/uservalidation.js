const url = 'https://cors-anywhere.herokuapp.com/http://66.228.40.119/user';
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    const response = new XMLHttpRequest();

    const data = JSON.stringify({
        "username": username,
        "password": password,
        "eggId":username+"1",
        "email": email
    }
    );

    response.open("POST", url)
    response.setRequestHeader('Content-Type', 'application/json');

    response.send(data);

    response.onload = (e) => {
        console.log(response.response);
        window.location.href = "./login.html";
    }


}

