<template>
  <div class="container">
    <div class="filters">
  <div class="form-group">
    <div class="show-label">
      <label for="filterCount">Mostrar:</label>
    </div>
    <div class="show-options">
      <select v-model="selectedCount" id="filterCount" class="form-control">
        <option v-for="count in countOptions" :value="count" :key="count">{{ count }}</option>
      </select>
    </div>
  </div>
  <div class="form-group order-search-group">
    <div class="order-group">
      <label for="filterSort">Ordenar por:</label>
      <select v-model="selectedSort" id="filterSort" class="form-control">
        <option value="priceAsc">Precio (menor a mayor)</option>
        <option value="priceDesc">Precio (mayor a menor)</option>
      </select>
    </div>
    <div class="search-group">
      <label for="filterSearch">Buscar:</label>
      <input type="text" v-model="searchText" id="filterSearch" class="form-control">
    </div>
  </div>
</div>

    <div class="products row text-center">
      <div v-for="product in paginatedProducts" :key="product.id" class="product col-md-4">
        <div class="card mb-3">
          <img :src="product.image" :alt="product.name" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Precio: {{ product.price }} MXN</p>
            <button class="btn btn-primary">Ver información</button>
          </div>
        </div>
      </div>
    </div>

    <nav v-if="totalPages > 1">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" href="#" @click="changePage(currentPage - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" href="#" @click="changePage(currentPage + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
      { id: 1, name: 'Producto 1', price: 10, image: require('@/assets/imagen1.png') },
          { id: 2, name: 'Producto 2', price: 20, image: require('@/assets/imagen2.png') },
          { id: 3, name: 'Producto 1', price: 10, image: require('@/assets/imagen3.png') },
          { id: 4, name: 'Producto 2', price: 20, image: require('@/assets/imagen4.png') },
          { id: 5, name: 'Producto 1', price: 10, image: require('@/assets/imagen4.png') },
          { id: 6, name: 'Producto 2', price: 20, image: require('@/assets/imagen6.png') },
          { id: 7, name: 'Producto 1', price: 10, image: require('@/assets/imagen7.png') },
          { id: 8, name: 'Producto 2', price: 20, image: require('@/assets/imagen8.png') },
          { id: 9, name: 'Producto 1', price: 10, image: require('@/assets/imagen9.png') },
          { id: 10, name: 'Producto 2', price: 20, image: require('@/assets/imagen10.png') },
          { id: 11, name: 'Producto 1', price: 10, image: require('@/assets/imagen11.png') },
          { id: 12, name: 'Producto 2', price: 20, image: require('@/assets/imagen12.png') },
          { id: 13, name: 'Producto 1', price: 10, image: require('@/assets/imagen13.png') },
          { id: 14, name: 'Producto 2', price: 20, image: require('@/assets/imagen14.png') },
          { id: 15, name: 'Producto 1', price: 10, image: require('@/assets/imagen15.png') },
          { id: 16, name: 'Producto 2', price: 20, image: require('@/assets/imagen16.png') },
          { id: 17, name: 'Producto 1', price: 10, image: require('@/assets/imagen16.png') },
          { id: 18, name: 'Producto 2', price: 20, image: require('@/assets/imagen16.png') },
          { id: 19, name: 'Producto 1', price: 10, image: require('@/assets/imagen16.png') },
          { id: 20, name: 'Producto 2', price: 20, image: require('@/assets/imagen16.png') },
      ],
      selectedCount: 20, // Cantidad seleccionada para mostrar
      searchText: '', // Texto de búsqueda
      selectedSort: '', // Orden seleccionado para ordenar los productos
      currentPage: 1, // Página actual
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;

      // Filtrar por texto de búsqueda
      if (this.searchText) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }

      // Ordenar productos
      if (this.selectedSort === 'priceAsc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (this.selectedSort === 'priceDesc') {
        filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    },
    paginatedProducts() {
      // Paginación de productos
      const startIndex = (this.currentPage - 1) * this.selectedCount;
      const endIndex = startIndex + this.selectedCount;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    totalPages() {
      // Calcular el número total de páginas
      return Math.ceil(this.filteredProducts.length / this.selectedCount);
    },
    countOptions() {
      // Opciones de cantidad para mostrar
      return [3, 5, 10, 20, 30, 50];
    },
  },
  methods: {
    changePage(page) {
      // Cambiar a la página seleccionada
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.show-label {
  margin-right: 10px;
}

.show-options {
  flex: 1;
}

.order-search-group {
  display: flex;
  align-items: center;
}

.order-group,
.search-group {
  margin-left: 10px;
}
.filters .form-group {
  margin-right: 15px;
}

.filters label {
  font-weight: bold;
  margin-right: 5px;
}

.filters select,
.filters input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  width: 30%;
  margin-bottom: 0px;
}

.pagination {
  margin-top: 20px;
}

@media (max-width: 991px) {
  .product {
    width: 45%;
  }
}

@media (max-width: 767px) {
  .product {
    width: 100%;
  }
}
</style>
