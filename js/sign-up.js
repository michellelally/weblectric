function validateForm() {

    //setting x to the value of username in the login form
    var x = document.forms["sign-up-form"]["password"].value;

    //checking if the variable x is left blank 
    if (x == null || x == "") {

        // alert the user
        alert("Password can not be blank.");
        return false;
    }
}

// function validateEmail(email) {
//     alert("validateEmail()");

//     var re = /\S+@\S+\.\S+/;
//     if (re.test(email)) {
//         console.log("correct email");
//         store();
//     }
// }

function store() {
    alert("store()");

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

function signIn() {

    alert("signIn");

    //calling the validateForm() function
    validateForm();

    // getting the length of the value of the element with an id of password from the HTML 
    var password = document.getElementById("password").value;
    var passwordCheck = document.getElementById("password-check").value;

    alert(password);
    alert(passwordCheck);
    // checking if the length is >=8

    if (password.length >= 8) {

        // found this method on w3schools.com when researching the best way to compare strings 
        var x = password.localeCompare(passwordCheck);

        // locale compare returns 0 or 1, 0 if the strings are the same or 1 if they are incorrect
        // checking if x = 0
        alert(x)
        if (x == 0) {
            store();
        } else {
            document.getElementById("error").innerHTML = "Error:";
            document.getElementById("match-error").innerHTML = "Passwords must match.";
        }

    } else {
        // update the html of the elements with id of error and login_error
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("length-error").innerHTML = "Password must be 8 characters in length"
    }
}


