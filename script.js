function finishSetup() {
  const name = document.getElementById("newUsername").value;
  const pin = document.getElementById("newPin").value;

  if (name === "" || pin === "") {
    alert("Please enter a name and PIN");
    return;
  }

  localStorage.setItem("username", name);
  localStorage.setItem("pin", pin);

  alert("Account created! Please sign in.");

  window.location.href = "index.html";
}
