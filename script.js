document.getElementById("appointment").addEventListener("click", function() {
    location.reload();
  });

  var toggler = document.querySelector(".navbar-toggler");
  var nav = document.querySelector("#navbarNavAltMarkup");

  toggler.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("show");
  });