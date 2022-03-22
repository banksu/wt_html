const btns = document.querySelectorAll("button");

function dev(event) {
  console.log(event.target.parentNode);
  const div = event.target.parentNode;
  div.classList.add("papap");
}
for (const btn of btns) {
  btn.addEventListener("click", dev);
}
