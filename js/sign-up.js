
function store() {
    console.log("store()")

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


function validatePassword() {

    var password = document.getElementById("password").value;

    var passwordCheck = document.getElementById("password-check").value;


    if (password.length < 8) {
        // update the html of the elements with id of error and login_error
        document.getElementById("error").innerHTML = "Error:"
        document.getElementById("length-error").innerHTML = "Password must be 8 characters in length"
        return false;
    } else {
        // removing the error messages
        document.getElementById("error").innerHTML = ""
        document.getElementById("login_error").innerHTML = ""
    }

    // //checking if the password is left blank 
    // if (password == null || password == "") {

    //     console.log(password)

    //     // alert the user
    //     alert("Password can not be blank.");
    //     return false; 

    // } 


    // // checking if the passwords match
    // if (passwordCheck != password) {
    //     // alert the user
    //     alert("Password match");

    //     // update the html of the elements with id of error and login_error
    //     document.getElementById("error").innerHTML = "Error:"
    //     document.getElementById("match-error").innerHTML = "Passwords must match."
    //     return false;
    // }

}

function validateEmail(email) {

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function signIn() {

    //calling the validateForm() function
    validatePassword();
    //  validateEmail();
    // store();
}
