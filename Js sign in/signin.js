//       All inputs
var EmailInput = document.getElementById("signinEmail");
var PasswordInput = document.getElementById("signinPassword");
var NameInput = document.getElementById("signinName");
var signA = document.getElementById("OP");

// localStorage.clear()

var signlist = [];

//                                *//*  LOGIN   *//*

var btn = document.querySelector(".btn-outline-primary");
btn.addEventListener("click", function (e) {
  testInput();
});
// document.addEventListener("keydown", function (e) {
//   if (e.key == "Enter") {
//     testInput();
//   }
// });

//                                *//* Check Inputs *//*

function testInput() {
  var myRegx = /^[a-z]{6,}@gmail.com$/i;
  var test = EmailInput.value;
  var Email = myRegx.test(test);
  for (var i = 0; i < localStorage.length; i++) {
    if (
      (Email == false,
      EmailInput.value == "",
      NameInput.value == "",
      PasswordInput.value == "")
    ) {
      document.getElementById("send").innerHTML =
        "<P class='text-danger'>Please Compelete Inputs</P>";
    }
    else if ((JSON.parse(localStorage.getItem("x", 1))[i].email).includes(test)
    ) {
      console.log("xx");
      document.getElementById("send").innerHTML =
        "<P class='text-danger'>This data is used</P>";
    } else {
      console.log("ll");
      document.getElementById("send").innerHTML =
        "<P class='text-success'>Success</P>";
      AddAccounts(true);
    }
  }
}

//                                  *//* Add account *//*
/**
 *
 *  Add account
 */
function AddAccounts(e) {
  var x = {
    name: NameInput.value,
    email: EmailInput.value,
    Passwor: PasswordInput.value,
  };
  if (e == true) {
    signlist.push(x);
    localStorage.setItem("x", JSON.stringify(signlist));
    // console.log(signlist);
  }
  clear();
}
//                                *//* Helper function *//*
function clear() {
  EmailInput.value = null;
  PasswordInput.value = null;
  NameInput.value = null;
}
var test = "jacksonxx300@gmail.com";
// var Email = myRegx.test(test);
console.log((JSON.parse(localStorage.getItem("x", 1))[1].email));
