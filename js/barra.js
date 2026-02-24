document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navbar").innerHTML = `
  
  <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle margin-top ">
    <div class="container">
      <a class="navbar-brand" href="#"> Sabores del Campo</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="menu.html">Menú</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="reserva.html">Reserva</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  `;
});