/*
    To create a shopping cart for our website to allow ticket sales, I followed a YouTube tutorial - JavaScript Shopping Cart Tutorial for Beginners 
    Here is the link to the video: https://www.youtube.com/watch?v=YeFzkC2awTM
*/


// this is to ensure that the document has loaded before running any JS that involves updating a HTML element
// check the state of the document
if (document.readyState == 'loading') {

    // if it's loading, add an eventListener 
    // listen out for the DOMContentLoaded event which fires when the page has loaded
    document.addEventListener('DOMContentLoaded', ready)
} else {
    // if the page is already loaded
    // calling the ready() function
    ready()
}



// this function is responsible for displaying the items the user adds to the cart
function ready() {



    // getting element with a class name of btn-danger and storing them to a variable
    // this returns a list of objects with this class name
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')

    // looping over each item in the list of objects stored in removeCartItemButtons
    for (var i = 0; i < removeCartItemButtons.length; i++) {

        // setting the value of button to the item i in the list
        var button = removeCartItemButtons[i]

        // listen out for when the button is clicked
        // when it is clicked, call the removeCartItem function
        button.addEventListener('click', removeCartItem)
    }

    // getting element with a class name of storing cart-quantity and storing them to a variable
    // this returns a list of objects with this class name
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {

        // setting the input of button to the item i in the list
        var input = quantityInputs[i]

        // listen out for when the input value has been changed
        // when it is changed, call the quantityChanged function
        input.addEventListener('change', quantityChanged)
    }

    // getting element with a class name of ticket-button and storing them to a variable
    // this returns a list of objects with this class name
    var addToCartButtons = document.getElementsByClassName('ticket-button')
    for (var i = 0; i < addToCartButtons.length; i++) {

        // setting the value of button to the item i in the list
        var button = addToCartButtons[i]

        // listen out for when the button is clicked
        // when it is clicked, call the addToCartClicked function
        button.addEventListener('click', addToCartClicked)
    }

    // getting element with a class name of btn-purchase and
    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

// this commented code block was used to try set up an automatic email to confirm purchase, which I didn't get working in time for presenting. 

// // this function includes the code I was provided with on the EmailJS docs
// window.onload = function () {

//     // using an eventListener to register when the user clicks the submit button
//     document.getElementById('purchase-button-form').addEventListener('submit', function (event) {

//         event.preventDefault();

//         // getting the users email address from the form
//         //var email = document.getElementById("email").value;

//         // getting the users name from the form
//         //var name = document.getElementById("firstname").value;

//         // this is an object that is used by the EmailJS template for the email
//         // these are needed to have the users name displayed in the email and to send it to their inbox
//         // setting the variables to the users email and name

        
//         var email = localStorage.getItem("email");
//         var firstname = localStorage.getItem("firstname");

//         var templateParams = {
//             email: email,
//             name: firstname
//         };

//         // this function is responsible for sending the email 
//         // the paramters are unique identifiers provided on our EmailJS account
//         // the first parameter is a service id, which is what connects our email address with EmailJS 
//         // the second is the template id, this will determine what the email says and is set up on the EmailJS dashboard

//         emailjs.send('service_he5dnbc', 'template_9hbccd7', templateParams)
//             .then(function () {
//                 // displays success to the console if the email was sent
//                 console.log('SUCCESS!');
//             }, function (error) {
//                 // displays failed to the console if the email was not sent
//                 console.log('FAILED...', error);
//             });


//     });
// }


// // removes items from the cart once they're purchased
// // redirects to PayPal 
// function purchaseClicked() {


//     // getting element with a class name of cart-items and storing the item at index 0 to a variable
//     var cartItems = document.getElementsByClassName('cart-items')[0]

//     // while the element has other elements inside it,
//     while (cartItems.hasChildNodes()) {

//         // remove the first element 
//         cartItems.removeChild(cartItems.firstChild)
//     }

//     // updating the total 
//     updateCartTotal()

// }

// this function is for removing the items when the user clicks the remove button
function removeCartItem(event) {

    // setting the button to an event target 
    // when the button is clicked run this event
    var buttonClicked = event.target

    // selecting the parent element 
    // getting the buttons calling the remove function 
    // the button is inside 2 div tags, so to remove the entire div the button has to get the parent element twice
    buttonClicked.parentElement.parentElement.remove()

    // calling this function to update the new total 
    updateCartTotal()
}

// this function is responsible for the quantity 
// it makes sure that the quanitiy is never less than 1
function quantityChanged(event) {

    // setting the button to an event target 
    // when the button is clicked run this event
    var input = event.target

    // checking is the input value is null or a negative number
    if (isNaN(input.value) || input.value <= 0) {

        // if it is, set the quantity to 1
        input.value = 1
    }

    // calling this function to update the new total 
    updateCartTotal()
}


// this function adds the item to the cart once the button is clicked
function addToCartClicked(event) {

    // setting the button to an event target 
    // when the button is clicked run this event
    var button = event.target

    // get the parent of the buttons parent 
    // this selects the item that the button belongs to 
    var shopItem = button.parentElement.parentElement

    // getting element with a class name of ticket-name and storing the text value of the item at index 0 to a variable
    var title = shopItem.getElementsByClassName('ticket-name')[0].innerText

    // getting element with a class name of ticket-price and storing the text value of the item at index 0 to a variable
    var price = shopItem.getElementsByClassName('ticket-price')[0].innerText

    // calling the addItemToCart() function and passing the title and price of the item
    addItemToCart(title, price)

    // calling the updateCartTotal() function 
    updateCartTotal()
}


// this function updates the HTML to display the item in the cart
function addItemToCart(title, price) {

    // create a row in the HTML document for the item
    var cartRow = document.createElement('div')

    // set the class name for the new div to cart-row
    cartRow.classList.add('cart-row')

    // getting element with a class name of cart-items and storing the item at index 0 to a variable
    var cartItems = document.getElementsByClassName('cart-items')[0]

    // getting element with a class name of cart-item-title 
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

    // looping over the cartItems
    for (var i = 0; i < cartItemNames.length; i++) {

        // check if the title of the item being added to the row already exists 
        if (cartItemNames[i].innerText == title) {

            // alert the user
            alert('This item is already added to the cart')

            // exit the function 
            return
        }
    }

    // this contains the HTML code for displaying the item on the page
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`

    // setting the innerHTML of cartRow to the value of cartRowContents
    cartRow.innerHTML = cartRowContents

    // add this row to the end of the cart-items
    cartItems.append(cartRow)

    // getting element with a class name of cart-items and storing the item at index 0 to a variable
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)

    // getting element with a class name of cart-quantity-input and adding an event listener that calls quanitityChanged() when the value changes
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


// changed the total displayed to the user if an item is added, removed or changed
function updateCartTotal() {

    // getting element with a class name of cart-items and storing the item at index 0 to a variable
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]

    // getting element with a class name of cart-row and storing them to a variable
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')

    // for storing the total
    var total = 0

    // looping over the cart-row elements
    for (var i = 0; i < cartRows.length; i++) {

        // creating a variable to store the item at index i 
        var cartRow = cartRows[i]

        // getting element with a class name of cart-price and storing the storing the item at index 0 to a variable
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]

        // getting element with a class name of cart-quantity-input and storing the storing the item at index 0 to a variable
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        // getting the innerText from the price element and removing the euro symbol
        var price = parseFloat(priceElement.innerText.replace('€', ''))

        // getting the value of the quantity element 
        var quantity = quantityElement.value

        // updating the total to the elements price multiplied by the quantity
        total = total + (price * quantity)
    }

    // using the Math class to round the total to the nearest 100 
    total = Math.round(total * 100) / 100

    // updating the value of the amount input the the total calculated in the updateCartTotal() function 
    document.getElementById("paypal-price").value = total;

    // getting element with a class name of cart-items and storing the item at index 0 to a variable
    // updating the inner text to the updated total 
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
}
