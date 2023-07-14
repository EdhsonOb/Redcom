<template>
  <Nav/>
  <div>
    <cuerpo></cuerpo>
  <catalogo/>
  <pie/>
  </div>
  <compras/>
  
</template>

<script>

import Nav from "./components/NavVet.vue"
import cuerpo from "./components/PresVet.vue"
import catalogo from "./components/ProdVue.vue"
import  pie from "./components/FootVue.vue"


export default {
  components:{
    Nav,
    cuerpo,
    catalogo,
    pie,

  },

  
}
</script>

<style>

</style>