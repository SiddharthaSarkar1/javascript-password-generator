var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "@#$%^&*()!";

function getPasswords() {
  document.querySelector(".result-section").style.visibility = "visible";
  var ul = document.getElementById("passwords");
  ul.innerHTML = "";
  var count = document.generator.count.value;
  for (var i = 0; i < count; i++) {
    var li = document.createElement("li");
    li.textContent = generatePassword();
    ul.appendChild(li);
  }
}

function generatePassword() {
  var allowed = "";
  if (document.generator.uppercase.checked) {
    allowed += uppercase;
  }
  if (document.generator.lowercase.checked) {
    allowed += lowercase;
  }
  if (document.generator.numbers.checked) {
    allowed += numbers;
  }
  if (document.generator.symbols.checked) {
    allowed += symbols;
  }

  var password = "";
  var length = parseInt(document.generator.length.value);
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }

  return password;
}


const handleClearData = () => {
  let ul = document.getElementById("passwords");
  ul.innerHTML = "";
  document.querySelector(".result-section").style.visibility = "hidden";
}