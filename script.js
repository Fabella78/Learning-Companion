function signIn() {
  const enteredName = document.getElementById("username").value;
  const enteredPin = document.getElementById("pin").value;

  const savedName = localStorage.getItem("username");
  const savedPin = localStorage.getItem("pin");

  if (enteredName === savedName && enteredPin === savedPin) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect name or PIN");
  }
}
