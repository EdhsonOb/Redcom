<template>
  <div class="carrito">
    <h2 class="carrito-titulo">Carrito de compras</h2>

    <div v-if="productos.length === 0" class="carrito-vacio">
      <p>No hay productos en el carrito.</p>
    </div>

    <div v-else>
      <div class="carrito-productos">
        <div v-for="item in productos" :key="item?.producto?.id" class="carrito-item">
          <div class="carrito-item-info">
            <div class="carrito-item-imagen">
              <img :src="item?.producto?.image" :alt="item?.producto?.name" />
            </div>
            <div class="carrito-item-detalles">
              <h3 class="carrito-item-nombre">{{ item?.producto?.name }}</h3>
              <p class="carrito-item-precio">Precio: {{ item?.producto?.price }} MXN</p>
              <p class="carrito-item-cantidad">Cantidad: {{ item?.cantidad }}</p>
              <button class="carrito-item-quitar" @click="quitarDelCarrito(item?.producto)">Quitar del carrito</button>
            </div>
          </div>
        </div>
      </div>

      <p class="carrito-subtotal">Subtotal: {{ calcularSubtotal() }} MXN</p>
      <p class="carrito-iva">IVA (16%): {{ calcularIVA() }} MXN</p>
      <p class="carrito-total">Total: {{ calcularTotal() }} MXN</p>

      <button class="carrito-vaciar" @click="vaciarCarrito">Vaciar carrito</button>


      <form @submit.prevent="procesarPago">
        <label>
          Número de tarjeta:
          <input type="text" v-model="cardNumber" />
        </label>
        <label>
          Fecha de vencimiento:
          <input type="text" v-model="expMonth" placeholder="MM" style="width: 30px;" />
          <input type="text" v-model="expYear" placeholder="YYYY" style="width: 50px;" />
        </label>
        <label>
          Código CVC:
          <input type="text" v-model="cvc" />
        </label>
        <button type="submit">Pagar</button>
      </form>
    </div>

    <router-link to="/" class="carrito-volver">Volver</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';

export default {
  data() {
    return {
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvc: '',
      stripe: null,
    };
  },
  computed: {
    ...mapGetters(['productosEnCarrito', 'pagoConfirmado']),
    productos() {
      const productosUnicos = [];
      this.productosEnCarrito.forEach(item => {
        const productoExistente = productosUnicos.find(p => p.producto.id === item.producto.id);
        if (!productoExistente) {
          productosUnicos.push(item);
        }
      });
      return productosUnicos.map(item => ({
        producto: item.producto,
        cantidad: item.cantidad,
      }));
    },
  },
  methods: {
    ...mapActions(['quitarDelCarrito', 'vaciarCarrito', 'confirmarPago']),
    calcularSubtotal() {
      const subtotal = this.productos.reduce((subtotal, item) => {
        const precio = item?.producto?.price || 0;
        const cantidad = item?.cantidad || 0;
        return subtotal + (precio * cantidad);
      }, 0);

      console.log('Subtotal:', subtotal); // Agregar esta línea para imprimir el valor en la consola

      return subtotal;
    },
    calcularIVA() {
      return this.calcularSubtotal() * 0.16; // 16% de IVA
    },
    calcularTotal() {
      return this.calcularSubtotal() + this.calcularIVA();
    },
    async initializeStripe() {
      const publicKey = 'pk_test_51NCc1hKUhoIrfZMvxnY5Q5rdn7RSQoGyZz1Us8tSGjRuKuLUJZb51LtHKk1hYwokozmphS083m2vREyLk2blPuYr00gOz4p8Yv';
      this.stripe = await loadStripe(publicKey);
    },
    async procesarPago() {
      try {
        if (!this.stripe) {
          await this.initializeStripe();
        }

        if (this.pagoConfirmado) {
          console.log('Pago ya confirmado, no se puede procesar nuevamente.');
          return;
        }

        const response = await this.stripe.paymentIntents.create({
          amount: Math.round(this.calcularTotal() * 100),
          currency: 'MXN',
          payment_method_types: ['card'],
          description: 'Compra en tienda en línea',
        });

        const clientSecret = response.client_secret;

        const paymentResult = await this.stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: {
              number: this.cardNumber,
              exp_month: this.expMonth,
              exp_year: this.expYear,
              cvc: this.cvc,
            },
          },
        });

        await this.mostrarMensajeExito(paymentResult);
        this.confirmarPago();
      } catch (error) {
        await this.mostrarMensajeError(error);
      }
    },
    async mostrarMensajeExito(response) {
      alert('Pago exitoso: ' + response.id);
    },
    async mostrarMensajeError(error) {
      alert('Error al procesar el pago: ' + error.message);
    },
  },
};
</script>

<style scoped>
.carrito {
  margin-top: 40px;
}

.carrito-titulo {
  text-align: center;
  font-size: 24px;
}

.carrito-vacio {
  text-align: center;
  margin-top: 20px;
}

.carrito-productos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.carrito-item {
  border: 1px solid #ddd;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carrito-item-imagen img {
  width: 100px;
  height: auto;
}

.carrito-item-detalles {
  flex-grow: 1;
  margin-left: 10px;
}

.carrito-item-nombre {
  font-size: 18px;
  margin-bottom: 5px;
}

.carrito-item-precio {
  margin-bottom: 5px;
}

.carrito-item-cantidad {
  margin-bottom: 5px;
}

.carrito-item-quitar {
  padding: 5px 10px;
  font-size: 14px;
}

.carrito-subtotal {
  text-align: right;
  margin-top: 20px;
  font-size: 18px;
}

.carrito-iva {
  text-align: right;
  font-size: 18px;
}

.carrito-total {
  text-align: right;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.carrito-vaciar {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
}

.carrito-pagar {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
}

.carrito-volver {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}
</style>
