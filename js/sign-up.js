function store() {
    console.log("store()");

    var firstname = document.getElementById("firstname");
    var surname = document.getElementById("surname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    localStorage.firstname = firstname.value;
    localStorage.surname = surname.value;
    localStorage.password = password.value;
    localStorage.email = email.value;

    console.log("email:" + email.value);
    //  window.open("LandingPage.html");
}


function checkPasswordLength() {

    var password = document.getElementById("password").value;
    var passwordCheck = document.getElementById("password-check").value;


    if (password.length < 8) {
        alert("passwordlength if");

        // update the html of the elements with id of error and login_error
        document.getElementById("error").innerHTML = "Error:";
        document.getElementById("length-error").innerHTML = "Password must be 8 characters in length";
        return false;

    } else {
        alert("passwordlength else");
        confirmPasswords();
    }

}

function confirmPasswords() {
    alert("confirmPasswords");
    var password = document.getElementById("password").value;

    var passwordCheck = document.getElementById("password-check").value;

    // checking if the passwords match
    if (passwordCheck != password) {
        // alert the user
        alert("confirmPasswords if");

        // update the html of the elements with id of error and login_error
        document.getElementById("error").innerHTML = "Error:";
        document.getElementById("match-error").innerHTML = "Passwords must match.";
        return false;
    } else {
        // removing the error messages
        alert("confirmPasswords else");
        store();

        // document.getElementById("error").innerHTML = ""
        // document.getElementById("match-error").innerHTML = ""
    }

}

function validateEmail(email) {

    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
        console.log("correct email");
    }


}

function signIn() {

    //calling the validateForm() function
    checkPasswordLength();    //  validateEmail();
    // store();
}
