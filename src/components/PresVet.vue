<template>
  <div class="container inicio">
    <div class="image-container">
    <img src="@/assets/fondoVet.jpg" alt="Fondo de imagen">
    <div class="text-container">
        <h1 class="title">Home Pets</h1>
  <p class="description">¡Bienvenido a Home Pets! Somos un equipo apasionado por el cuidado y bienestar de tus mascotas. Ofrecemos servicios de calidad y atención personalizada para garantizar la felicidad y salud de tus peludos compañeros. ¡Confía en nosotros para cuidar a tus mascotas como si fueran parte de nuestra familia!</p>
    </div>
  </div>
  </div>
  <div class="container text-center">
  <h2>Productos más vendidos en juguetes</h2>
  <div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 col-lg-3" v-for="(producto, index) in productos" :key="producto.id">
      <div class="card mb-3" :class="index === 2 ? 'small-card' : ''">
        <img class="card-img-top" :src="producto.imagen" alt="" style="object-fit: cover; height: 200px;">
        <div class="card-body">
          <h5 class="card-title">{{ producto.nombre }}</h5>
          <p class="card-text">$ {{ producto.precio }} MXN</p>
          <button class="btn btn-primary" @click="agregarAlCarrito(producto)">Ver información</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        { id: 1,precio:50, nombre: 'Zanahoria de plástico', imagen: require('@/assets/imagen1.png') },
        { id: 2,precio:50, nombre: 'Pollo de plástico', imagen: require('@/assets/imagen2.png') },
        { id: 3,precio:50, nombre: 'Pelota de plástico', imagen: require('@/assets/imagen4.png') },
      ],
      carrito: [],
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      this.$emit('agregar-al-carrito', producto);
    },
    verCarrito() {
      this.$emit('ver-carrito');
    },
  },

};
</script>

<style>

.vendidos{
  width: 100%;
  height: 80%;
  
}
button{
  background: none;
  border: 0px;
}
.contenedor{
  width: 100%;
  height: 400px;
  padding-top: 10px;
  color: #ffffff;
}
.butom{
  padding-top: 20px;
}
.inicio {
  max-width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0px;
  margin: 0 auto;
}

.image-container {
  position: relative;
  width: 100%;
}
.title {
  font-size: 32px;
  color: white;
}

.description {
  font-size: 18px;
  color: white;
  margin-top: 10px;
}
.image-container img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    -webkit-filter: brightness(50%);
filter: brightness(50%);
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  min-width: 350px;
 
}

.text-container h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.text-container p {
  font-size: 16px;
  margin-bottom: 20px;
}

label{
  color: black;
}
</style>