console.log("Working");
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("CLicked");
  console.log(username.value, password.value);
  let password = localStorage.getItem("password");
  console.log(password);
  if (password) {
    let json = [];
    json.push({ username: username.value, password: password.value });
    alert("password saved");
  } else {
    let json = [];
    localStorage.setItem(password);
  }
});
