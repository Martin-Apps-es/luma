document.getElementById("log-out").addEventListener("click", function () {
    localStorage.removeItem("lumaEstado");
    window.location.href = "login.html";
  });
  