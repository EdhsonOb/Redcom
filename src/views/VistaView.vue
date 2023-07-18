<template>
    <div class="container prods">
    <div class="producto-detalle">
      <div class="producto-imagen">
        <img v-if="producto && producto.image" :src="producto.image" :alt="producto.name">
      </div>
      <div class="producto-info">
        <div class="producto-detalles">
          <h2 v-if="producto && producto.name" class="producto-nombre">{{ producto.name }}</h2>
          <h5 class="producto-descripcion">descripción:</h5>
          <p v-if="producto" class="producto-descripcion"> {{ producto.description }}</p>
          <div class="producto-cantidad-precio">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-primary btn-cantidad" @click="decrementarCantidad" :disabled="cantidad === 1">-</button>
              </div>
              <input type="number" class="form-control input-cantidad" v-model="cantidad" min="1" max="10">
              <div class="input-group-append">
                <button class="btn btn-primary btn-cantidad" @click="incrementarCantidad" :disabled="cantidad === 10">+</button>
              </div>
            </div>
            <p v-if="producto" class="producto-precio">Precio: {{ producto.price }} MXN</p>
          </div>
        </div>
        <div class="producto-botones">
            <button class="btn btn-primary btn-agregar" @click="agregarProductoAlCarrito">Agregar al carrito</button>
          <router-link to="/" class="btn btn-secondary btn-volver">Volver</router-link>
        </div>
      </div>
    </div>
</div>

  </template>
  
  
  <script>
  import { mapActions } from 'vuex';
 
 import { products } from '@/components/products'
  

 export default {
  data() {
    return {
      producto: null,
      cantidad: 1,
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    this.producto = this.getProductById(productId);
  },
  methods: {
    ...mapActions(['agregarAlCarrito']),
    agregarProductoAlCarrito() {
      const productoEnCarrito = {
        producto: this.producto,
        cantidad: this.cantidad,
      };
      this.agregarAlCarrito(productoEnCarrito);
    },
    getProductById(productId) {
  // Verificar si productId es válido y products es un array no vacío
  if (productId && Array.isArray(products) && products.length > 0) {
    // Buscar el producto por su ID
    return products.find(product => product.id === Number(productId));
  } else {
    // Si no se encuentra el producto, puedes retornar un valor por defecto o lanzar una excepción
    return null; // o lanzar una excepción new Error('Producto no encontrado');
  }
},
    incrementarCantidad() {
        if (this.cantidad < 10) {
        this.cantidad++;
      }
    },
    decrementarCantidad() {
        if (this.cantidad > 1) {
        this.cantidad--;
      }
        },
  },
};

  </script>


<style scoped>
.producto-detalle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-right: 150px;
}

.producto-imagen img {
  width: 500px;
  height: auto;
}

.producto-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.producto-detalles {
  text-align: center;
}

.producto-nombre {
  font-size: 24px;
  margin-bottom: 10px;
}

.producto-descripcion {
  margin-bottom: 10px;
}

.producto-precio {
  font-size: 18px;
  margin-bottom: 10px;
}

.input-group {
  margin-bottom: 10px;
}

.input-cantidad {
  text-align: center;
}

.btn-cantidad {
  width: 40px;
  height: 40px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;
}

.producto-botones {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.btn-agregar {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
}

.btn-volver {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>