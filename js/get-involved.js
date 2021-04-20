function validateForm(){
  var x=document.forms["myForm"]["gname"].value;
  if (x==null || x=="")
    {
    alert("Please fill out all sections of the form");
    }
  {
  var y=document.forms["myForm"]["gname"].value;
  if (y==null || y=="")
    {
    alert("Please fill out your act name");

    }
  var z=document.forms["myForm"]["name"].value;
  if (z==null || z=="")
    {
    alert("Please fill out your contact name");
    return false;
}
  var p=document.forms["myForm"]["description"].value;
  if (p==null || p=="")
    {
    alert("Please write a description of your act");
    }
  var a=document.forms["myForm"]["phone"].value;
  if (a==null || a=="")
    {
    alert("Please enter your phone number");
    }
  var b=document.forms["myForm"]["email"].value;
  if (b==null || b=="")
    {
    alert("Please enter your email address");
    }
  }
}
