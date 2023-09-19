console.log("Working");
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("CLicked");
  console.log(username.value, password.value);
});
