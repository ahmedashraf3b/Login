//       All inputs
var EmailInput = document.getElementById("signinEmail");
var PasswordInput = document.getElementById("signinPassword");

var button = document.querySelector(".btn-outline-primary");
button.addEventListener("click", function () {
  CheckAccount();
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
  CheckAccount();
  }
});


//                                *//*  Check Accounts   *//*

function CheckAccount() {
  var test = EmailInput.value;
  var test2 = PasswordInput.value;
  for (var i = 0; i < localStorage.length; i++) {
    sessionStorage.setItem("num",JSON.stringify(i))
    if (
      JSON.parse( localStorage
        .getItem("x", i)).includes(test)
        &&
        JSON.parse( localStorage
        .getItem("x", i)).includes(test2)
        ){
      if (EmailInput.value == "", PasswordInput.value == "") {
        document.getElementById("send").innerHTML =
        "<P class='text-danger'>The data is wrong.</P>";
      }else{
        console.log("xx");
        // open("welcom.html")
        window.location.href = 'welcom.html'
        document.getElementById("send").innerHTML =
          "<P class='text-success'>Success</P>";
      }
    } else {
      console.log("ll");
      document.getElementById("send").innerHTML =
        "<P class='text-danger'>The data is wrong.</P>";
      //   AddAccounts(true);
    }
  }
}
