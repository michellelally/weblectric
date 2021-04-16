var errorMsg = document.getElementById("error");

var loggedIn = false;

window.onload = function () {

    // using an eventListener to register when the user clicks the submit button
    document.getElementById('sign-up-form').addEventListener('submit', function (event) {

        event.preventDefault();

        // getting the users email address from the form
        //var email = document.getElementById("email").value;

        // getting the users name from the form
        //var name = document.getElementById("firstname").value;

        // this is an object that is used by the EmailJS template for the email
        // these are needed to have the users name displayed in the email and to send it to their inbox
        // setting the variables to the users email and name
        var email = document.getElementById("email").value;
        var firstname = document.getElementById("firstname").value;


        var templateParams = {
            email: email,
            name: firstname
        };

        // this function is responsible for sending the email 
        // the paramters are unique identifiers provided on our EmailJS account
        // the first parameter is a service id, which is what connects our email address with EmailJS 
        // the second is the template id, this will determine what the email says and is set up on the EmailJS dashboard
        if (loggedIn == true) {
            emailjs.send('service_he5dnbc', 'template_9hbccd7', templateParams)
                .then(function () {
                    // displays success to the console if the email was sent
                    console.log('SUCCESS!');
                }, function (error) {
                    // displays failed to the console if the email was not sent
                    console.log('FAILED...', error);
                });
        }

    });
}

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

function validateEmail(email) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // using a code snippet from the stack overflow link above, I used regular expression matching 
    // to check that the email address is valid
    // this expression will pass anything that matches this syntax:
    // anystring@anystring.anystring
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
        // once the email is validated, call the store() function 
        store();
    } else {
        // if email is invalid, display this error message 
        errorMsg.innerHTML += "Error: Invalid email address <br>";
    }
}

function store() {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    localStorage.firstname = firstname;
    localStorage.surname = surname;
    localStorage.password = password;
    localStorage.email = email;
    localStorage.loggedIn = true;
    loggedIn = true;
    // window.open("index.html");
}

function signIn() {
    //calling the validateForm() function
    validateForm();

    var password = document.getElementById("password").value;
    var passwordCheck = document.getElementById("password-check").value;
    var email = document.getElementById("email").value;

    // checking if the length is >=8
    if (password.length >= 8) {

        // found this method on w3schools.com when researching the best way to compare strings 
        var x = password.localeCompare(passwordCheck);

        // locale compare returns 0 or 1, 0 if the strings are the same or 1 if they are incorrect
        // checking if x = 0
        if (x == 0) {
            validateEmail(email);
            store();
        } else {
            errorMsg.innerHTML += "Error: Passwords must match. <br>";
        }

    } else {
        // update the html of the elements with id of error and login_error
        errorMsg.innerHTML += "Error: Password must be 8 characters in length. <br>"
    }
}


