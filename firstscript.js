let Hellobtn = document.querySelector("button");
Hellobtn.addEventListener("click", inputmsg);

function inputmsg() {
  let name = prompt("Enter Your Name");
  Hellobtn.textContent = "Hello " + name;
}
