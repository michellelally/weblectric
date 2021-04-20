
//JavaScript for Home and About pages

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