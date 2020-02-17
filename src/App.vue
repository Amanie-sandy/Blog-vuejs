<template>
  <div id="app">
  <div class="wrapper">
    <app-Header/>
    <div class="content">
       <router-view/>
    </div>
    <app-Footer/>
  </div>
  </div>
</template>



<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default{
  components:{
    "app-Header":Header,
    "app-Footer":Footer
  }
}
</script>



<style>
body{
background-color: rgb(189, 184, 184)
}
</style>
