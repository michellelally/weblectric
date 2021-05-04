
// this function includes the code I was provided with on the EmailJS docs
window.onload = function () {

    // using an eventListener to register when the user clicks the submit button
    document.getElementById('login-form').addEventListener('onclick', function (event) {

        var loggedIn = localStorage.getItem("loggedIn")

        if (!loggedIn) {
            alert("You must have an account to purchase!")
            // redirecting the user back to the account page 
            window.location.href = "account.html"
        }

    });
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailLS = localStorage.getItem("email");
    var passwordLS = localStorage.getItem("password");

    if (email == emailLS) {
        if (password == passwordLS) {
            alert("logged in ")
            // redirecting the user back to the homepage 
            window.location.href = "index.html"
        } else {
            // update the HTML to display an error to the user
            document.getElementById("error").innerHTML = "Error: Incorrect Password. <br>";
        }
    } else {
        // update the HTML to display an error to the user
        document.getElementById("error").innerHTML = "Error: Incorrect Email. <br>";
    }
}

function signup() {
    // redirecting the user back to the homepage 
    window.location.href = "register.html"
}