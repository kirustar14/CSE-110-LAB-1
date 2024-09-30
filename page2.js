

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc() {
    let email=  document.getElementById("email");
    let emailValue = email.value;
    alert(emailValue); 
  }

