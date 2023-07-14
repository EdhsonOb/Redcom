<template>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>Información de contacto</h3>
        <p><i class="fas fa-map-marker-alt"></i> Dirección: 123 Calle Principal, Ciudad, País</p>
        <p><i class="fas fa-envelope"></i> Email: HomePets@HomePets.com</p>
        <p><i class="fas fa-phone"></i> Teléfono: +52 3331316465</p>
      </div>
      <div class="col-md-4">
        <h3>Enlaces útiles</h3>
        <ul class="footer-links">
          <li><a href="#">Acerca de nosotros</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3>Síguenos en redes sociales</h3>
        <ul class="social-icons">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background-color: #ff9d56;
    padding: 50px 0;
    color: black;
}
.footer h3 {
  font-size: 18px;
  margin-bottom: 20px;
}

.footer p {
  font-size: 14px;
  margin-bottom: 10px;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #555;
  text-decoration: none;
}

.footer-links a:hover {
  color: #222;
}

.social-icons li {
  display: inline-block;
  margin-right: 10px;
}

.social-icons li:last-child {
  margin-right: 0;
}

.social-icons a {
  color: #555;
  font-size: 24px;
}

.social-icons a:hover {
  color: #222;
}
</style>