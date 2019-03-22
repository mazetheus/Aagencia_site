<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer id="footer"></Footer>
    <a href="https://api.whatsapp.com/send?phone=558433018085" @click="clickWpp()" class="float-wpp mobile" target="_blank">
        <font-awesome-icon class="my-float-wp" :icon="['fab', 'whatsapp']" size="lg"></font-awesome-icon>
    </a>
    <a href="tel:+558433018085" class="float-tel bg-primary mobile" @click="clickTel()" target="_blank">
        <font-awesome-icon class="my-float-tel" :icon="['fas', 'phone']" size="lg"></font-awesome-icon>
    </a>
  </div>
</template>

<script type="text/javascript">
  import Navbar from './components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    },
    methods: {
      clickWpp() {
        this.$ga.event({
          eventCategory: 'Social',
          eventAction: 'click',
          eventLabel: 'Whatsapp'
        });
      },
      clickTel() {
        this.$ga.event({
          eventCategory: 'Social',
          eventAction: 'click',
          eventLabel: 'Telefone'
        });
      }
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

.mobile{
  display: none;
}

.float-wpp{
  position:fixed;
  width:40px;
  height:40px;
  bottom: 100px;
  right:10px;
  background-color:#25d366;
  color:#fff;
  border-radius:50px; 
  font-size: 24px;
  text-align:center;
  box-shadow: 18px 31px 61px 0px rgba(0,0,0,0.43);
  
  z-index:100000;
}

.float-tel{
  position:fixed;
  width:40px;
  height:40px;
  bottom: 50px;
  right:10px;
  color:#FFF;
  background-color: aquamarine;
  border-radius:50px;
  text-align:center;
  font-size:18px;
  box-shadow: 18px 31px 61px 0px rgba(0,0,0,0.43);
  opacity: 0.8;
  z-index:100000;
}


.float-wpp:hover, .float-tel:hover {
  color: #fff;
  opacity: 1;
  box-shadow: 2px 2px 3px #666;
}

.float-wpp:hover {
  background-color: #1ea851;
}

.my-float-wp{
  margin-top:4px;
  margin-left: 1px;
}

.my-float-tel{
  margin-top:8px;
  margin-left: 2px;
}

@media (max-width: 576px) {
  .mobile{
    display:block;
  }
}
</style>
