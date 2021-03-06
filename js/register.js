var loggedIn = false;

/*
    Using the documentation provided on the EmailJS website, this page can recieve user input from a HTML form and send an automatic email to the address provided.
    Here is the link to the docs that we used: 
    https://www.emailjs.com/docs/tutorial/creating-contact-form/ 

*/

// this function includes the code I was provided with on the EmailJS docs
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

// this is a function I used from CA2 to ensure the user is aware that the password must not be blank
function validateForm() {

    //setting x to the value of username in the login form
    var x = document.forms["sign-up-form"]["password"].value;

    //checking if the variable x is left blank 
    if (x == null || x == "") {

        // update the HTML to display en error to the user
        document.getElementById("error").innerHTML = "Error: Password cannot be blank";
        return false;
    }
}

// this function will ensure the user has entered a valid email address
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
        document.getElementById("error").innerHTML = "Error: Invalid email address <br>";
    }
}

// this function is responsible for saving the users information to local storage
function store() {

    // getting the HTML element with an id of firstname 
    var firstname = document.getElementById("firstname").value;

    // getting the HTML element with an id of surname 
    var surname = document.getElementById("surname").value;

    // getting the HTML element with an id of email
    var email = document.getElementById("email").value;

    // getting the HTML element with an id of password
    var password = document.getElementById("password").value;

    // creating a space in the users browser to store their firstname 
    localStorage.firstname = firstname;

    // creating a space in the users browser to store their surname 
    localStorage.surname = surname;

    // creating a space in the users browser to store their password 
    localStorage.password = password;

    // creating a space in the users browser to store their email 
    localStorage.email = email;

    // creating a space in the users browser to store their log in status
    localStorage.loggedIn = true;

    // setting loggedIn to true
    loggedIn = true;

    // redirecting the user back to the homepage 
    window.location.href = "index.html"
}

// this function is called when the user clicks sign up and begins the form validation 
function signIn() {

    //calling the validateForm() function
    validateForm();

    // getting the HTML element with an id of password
    var password = document.getElementById("password").value;

    // getting the HTML element with an id of password-check
    var passwordCheck = document.getElementById("password-check").value;
    
    // getting the HTML element with an id of email
    var email = document.getElementById("email").value;

    // checking if the length is >=8
    if (password.length >= 8) {

        // found this method on w3schools.com when researching the best way to compare strings 
        var x = password.localeCompare(passwordCheck);

        // locale compare returns 0 or 1, 0 if the strings are the same or 1 if they are incorrect
        // checking if x = 0
        if (x == 0) {
            // calling the validate email function
            validateEmail(email);
        } else {
            // update the HTML to display an error to the user
            document.getElementById("error").innerHTML = "Error: Passwords must match. <br>";
        }

    } else {
        // update the HTML to display an error to the user
        document.getElementById("error").innerHTML = "Error: Password must be 8 characters in length. <br>"
    }
}