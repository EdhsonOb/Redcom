<template>
<nav class="navbar navbar-expand-lg navbar-light bg-color">
  <div class="container-fluid">
    <img src="@/assets/logoVet3.png" alt="Bootstrap" class="logo-img black-img">
    <a class="navbar-brand">HOME PETS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars custom-toggle-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
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
          <a class="nav-link" href="#">Acerca de</a>
        </li>
      </ul>
      <div class="nav-links ms-auto">
        <router-link to="/carrito" class="nav-link">carrito</router-link>
        <a class="nav-link" href="#">Iniciar sesión</a>
      </div>
    </div>
  </div>
</nav>
  <router-view />
</template>

<script>


export default {

};
</script>

<style>
.nav-links {
  display: flex;
}
.nav-links .nav-link {
  margin-left: 10px;
}
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
