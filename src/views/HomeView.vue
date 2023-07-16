<template>
    <div>
    <cuerpo/>
    <catalogo />
    <pie />
  </div>
</template>

<script>
import cuerpo from "@/components/PresVet.vue"
import catalogo from "@/components/ProdVue.vue";
import pie from "@/components/FootVue.vue";
export default {



  components: {
    cuerpo,
    catalogo,
    pie,
  },
};

</script>

<style>

</style>