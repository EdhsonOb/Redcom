<!-- <template>
    <div class="container text-center">
      <h2>Carrito de compras</h2>
      <ul v-if="carrito.length > 0">
        <li v-for="producto in carrito" :key="producto.id">
          {{ producto.nombre }}
          <button @click="eliminarDelCarrito(producto)">Eliminar</button>
        </li>
      </ul>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      carrito: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      eliminarDelCarrito(producto) {
        this.$emit('eliminar-del-carrito', producto);
      },
      volver() {
        this.$emit('volver');
      },
    },
  };
  </script> -->