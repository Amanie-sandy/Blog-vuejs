<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-2">
  <div>
      <img src="../assets/logo.png"  class="photo" alt="" srcset="">
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
          <router-link to="../Admin">
        <a class="nav-link" id="admin" href="#">Add Post<span class="sr-only">(current)</span></a>
         </router-link>
      </li>
      <li class="nav-item" id="navlink">
        <a class="nav-link" id="admin" href="#">|</a>
      </li>
      <li class="nav-item">
          <router-link to="../ViewPost">
        <a class="nav-link" id="admin" href="#">View Post</a>
         </router-link>
      </li>
    </ul>
  </div>
</nav>
    </div>
</template>


<style scoped>
    .photo{
        height: 32px;
    }
    #admin{
        color: rgb(120, 65, 250);
        font-size: 20px
    }
    @media (max-width: 775.98px){
    #navlink{
        display: none
    }
    }

</style>

