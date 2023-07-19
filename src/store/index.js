import { createStore } from 'vuex';
import { loadStripe } from '@stripe/stripe-js';

export default createStore({
  state: {
    carrito: [],
    pagoConfirmado: false,
  },
  mutations: {
    agregarAlCarrito(state, { producto, cantidad }) {
      const itemEnCarrito = state.carrito.find(item => item.producto.id === producto.id);
      if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
      } else {
        state.carrito.push({ producto, cantidad });
      }
    },
    quitarDelCarrito(state, producto) {
      const index = state.carrito.findIndex(item => item.producto.id === producto.id);
      if (index !== -1) {
        state.carrito.splice(index, 1);
      }
    },
    vaciarCarrito(state) {
      state.carrito = [];
    },
    confirmarPago(state) {
      state.pagoConfirmado = true;
    },
  },
  actions: {
    agregarAlCarrito({ commit }, { producto, cantidad }) {
      commit('agregarAlCarrito', { producto, cantidad });
    },
    quitarDelCarrito({ commit }, producto) {
      commit('quitarDelCarrito', producto);
    },
    vaciarCarrito({ commit }) {
      commit('vaciarCarrito');
    },
    async procesarPago({ commit, getters, dispatch }) {
      const publicKey = 'pk_test_51NCc1hKUhoIrfZMvxnY5Q5rdn7RSQoGyZz1Us8tSGjRuKuLUJZb51LtHKk1hYwokozmphS083m2vREyLk2blPuYr00gOz4p8Yv';
      const stripe = await loadStripe(publicKey);
    
      if (this.state.pagoConfirmado) {
        console.log('Pago ya confirmado, no se puede procesar nuevamente.');
        return;
      }
    
      try {
        // Crear el pago y obtener el client_secret desde la respuesta
        const response = await stripe.paymentIntents.create({
          amount: Math.round(getters.calcularTotal * 100),
          currency: 'MXN',
          payment_method_types: ['card'],
          description: 'Compra en tienda en línea',
        });
    
        const clientSecret = response.client_secret;
    
        // Confirmar el pago usando el client_secret correcto
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: {
              number: this.cardNumber,
              exp_month: this.expMonth,
              exp_year: this.expYear,
              cvc: this.cvc,
            },
          },
        });
    
        await dispatch('mostrarMensajeExito', paymentResult);
        commit('confirmarPago');
      } catch (error) {
        await dispatch('mostrarMensajeError', error);
      }
    },
    async mostrarMensajeError(_, error) {
      console.log('Error al procesar el pago:', error);
    },
    
  },
  getters: {
    productosEnCarrito(state) {
      return state.carrito;
    },
    calcularSubtotal(state) {
      return state.carrito.reduce((subtotal, item) => subtotal + (item.producto.price * item.cantidad), 0);
    },
    calcularIVA(_, getters) {
      return getters.calcularSubtotal * 0.16;
    },
    calcularTotal(_, getters) {
      return getters.calcularSubtotal + getters.calcularIVA;
    },
    pagoConfirmado(state) {
      return state.pagoConfirmado;
    },
  },
});
