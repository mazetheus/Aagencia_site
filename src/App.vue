<template>
  <div id="app">
    <Navbar></Navbar>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
    <Footer id="footer"></Footer>
  </div>
</template>

<script type="text/javascript">
  import Navbar from './components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');

#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  margin-top: 32px;
}
</style>
