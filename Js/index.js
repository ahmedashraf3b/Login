//       All inputs
var EmailInput = document.getElementById("signinEmail");
var PasswordInput = document.getElementById("signinPassword");

var button = document.querySelector(".btn-outline-primary");
button.addEventListener("click", function () {
  CheckAccount();
});



//                                *//*  Check Accounts   *//*

function CheckAccount() {
  var test = EmailInput.value;
  var test2 = PasswordInput.value;
  for (var i = 0; i < localStorage.length; i++) {
    sessionStorage.setItem("num",JSON.stringify(i))
    if (
      (EmailInput.value == "",PasswordInput.value == "")
    ) {
      document.getElementById("send").innerHTML =
        "<P class='text-danger'>Please Compelete Inputs</P>";
    }
    else if ((JSON.parse(localStorage.getItem("x", 1))[0].email).includes(test) &&(JSON.parse(localStorage.getItem("x", 1))[0].Passwor).includes(test2)
        ){
        window.location.href = 'welcom.html'
        document.getElementById("send").innerHTML =
          "<P class='text-success'>Success</P>";
      }
     else {
      console.log("ll");
      document.getElementById("send").innerHTML =
        "<P class='text-danger'>The data is wrong.</P>";
    }
  }
  clear()
}
function clear() {
  EmailInput.value = null;
  PasswordInput.value = null;
}
