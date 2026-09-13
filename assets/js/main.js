// Mobile navigation toggle + footer year.
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var list = document.querySelector(".site-nav ul");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
