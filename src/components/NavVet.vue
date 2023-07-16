<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <nav class="navbar navbar-expand-lg navbar-light bg-color">
  <div class="container-fluid">
    <img src="@/assets/logoVet3.png" alt="Bootstrap" class="logo-img black-img"> <a class="navbar-brand">HOME PETS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars custom-toggle-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Productos</a></li>
            <li><a class="dropdown-item" href="#">Agendar citas</a></li>
            <li><a class="dropdown-item" href="#">Ubicación</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Acerca de</a>
        </li>
      </ul>
      <router-link to="/Compra">carrito</router-link>
      <a class="nav-link ms-auto active" href="#">Iniciar sesión</a>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  
}
</script>

<style>
.logo-img {
  width: 40px;
  height: 40px;
  object-fit: none;
}
.black-img {
  filter: brightness(0%);;
}
.custom-toggle-icon {
  font-size: 20px;
  color: black;
  /* Otros estilos personalizados */
}
.navbar-toggler{
  border-style: none;
  
}
.navbar-toggler:focus,
  .navbar-toggler:active {
    outline: none !important;
    box-shadow: none !important;
  }

  .bg-color {
  background-color: #ff9d56;
}

</style>