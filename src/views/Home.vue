<template>
 <div class="home">
   <div class="container">
   <div class="row d-flex justify-content-center" id="cardview">
   <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
        <!-- <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a> -->
        <h1 class="text-center">Welcome to our Blog</h1>
          <div class="d-flex justify-content-center">
            <div class="spinner-grow text-primary" role="status">
               <span class="sr-only">Loading...</span>
            </div>
          <div class="spinner-grow text-secondary" role="status">
              <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
              <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
             <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
             <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#cardview{
margin-top: 10rem
}
</style>
