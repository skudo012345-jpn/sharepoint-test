console.log("JS loaded");

window.__test = "OK";

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.innerText = "Click me";

  btn.onclick = function () {
    alert("ボタンが押された");
  };

  document.body.appendChild(btn);
});
