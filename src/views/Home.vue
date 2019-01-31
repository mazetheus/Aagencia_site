<template>
  <div>
    <banner></banner>
    <b-container class="home" fluid>
      <fazemos></fazemos>
      <nos></nos>
      <cases></cases>
      <contato></contato>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Fazemos from '@/components/Fazemos.vue'
import Nos from '@/components/Nos.vue'
import Cases from '@/components/Cases.vue'
import Contato from '@/components/Contato.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Fazemos,
    Nos,
    Cases,
    Contato
  }
}
</script>

<style type="text/css" scoped>
  .container-fluid {
  }
</style>