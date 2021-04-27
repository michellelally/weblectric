
//JavaScript for About page

//function to display discount code modal on page load
$(document).ready(function () {
  setTimeout(function () {//cause modal to appear after a 3 second delay to give the user a chance to see the page first
    $("#myModal").modal('show');
  }, 3000);
});

//triggers modal box where user may subscribe 
$(".popup-btn").click(function (e) {//the popup-btn id triggers event
  e.preventDefault();
  var linkID = this.hash.replace("#", "");//variable
  $(".modal").each(function () {//grabs modal by id
    var modalID = $(this).attr("id");//variable
    if (linkID === modalID) {//if statement
      $(this).fadeIn(200);//creates fade in effect
      $("body, html").addClass("modal-open");//opens modal
      $(".modal-backdrop").addClass("in");//triggers change to backdrop
      $(this).addClass("in");//introduces class in
    } else {
      $(this).fadeOut();//triggers fade out of modal
      $(this).removeClass("in");//removes class 
    }
  });

});

$("body, button.close, .modal-footer button.btn").click(function () {//makes the 'close' button functional
  $("body, html").removeClass("modal-open");//causes modal-open class to be removed
  $(".modal-backdrop").removeClass("in");//removes backdrop effect
  $(".modal").fadeOut();//causes modal to fade out
  $(".modal").removeClass("in");//removes modal class in
});

$(".modal-content, .popup-btn, .modal-header .close, .modal-footer .btn").click(
  function (e) {
    e.stopPropagation();//prevent further propogation of current event
  }
);

window.onload = function () {

  // using an eventListener to register when the user clicks the submit button
  document.getElementById('contact-form').addEventListener('submit', function (event) {

    event.preventDefault();

    // getting the users email address from the form
    var email = document.getElementById("email").value;

    // getting the users name from the form
    var name = document.getElementById("name").value;

    // this is an object that is used by the EmailJS template for the email
    // these are needed to have the users name displayed in the email and to send it to their inbox
    // setting the variables to the users email and name
    var templateParams = {
      email: email,
      name: name,
    };

    // this function is responsible for sending the email 
    // the paramters are unique identifiers provided on our EmailJS account
    // the first parameter is a service id, which is what connects our email address with EmailJS 
    // the second is the template id, this will determine what the email says and is set up on the EmailJS dashboard
    emailjs.send('service_he5dnbc', 'template_4pcuphb', templateParams)
      .then(function () {
        // displays success to the console if the email was sent
        console.log('SUCCESS!');
      }, function (error) {
        // displays failed to the console if the email was not sent
        console.log('FAILED...', error);
      });
  });
}

//to ensure value entered is a valid email address format
function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))//If a combination of these characters joined by an @ symbol, return true
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)//
}

function validateForm()//to ensure both fields are filled in by user
	{
		var name = document.getElementById("name");//grabs 'name' by id
		var email = document.getElementById("email");//grabs 'email' by id
		
			if(name.value.trim()=="")//if name empty string return false
			{
				alert("Oops! You forgot to enter your name.");
				return false;//alert displayed to user
			}
			else if(email.value.trim()=="")//if email empty string return false
			{
				alert("Don't forget to enter your email!");
				return false;//alert displayed to user
			}
			else
			{
				return true;//otherwise return true
			}
		
	}			
