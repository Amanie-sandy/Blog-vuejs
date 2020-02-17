<template>
    <div>
        <div class="container">
          <div class="row">
         <div class="col-md-4">
           <div class="card shadow p-4">
              <h2 class="mb-4">Please Add New Post</h2>
             <form @submit.prevent>
                <div class="form-group">
                  <label>Post Title</label>
                  <input type="text" v-model="userData.title" class="form-control" />
                </div>
                 <div class="form-group">
               <label for="exampleFormControlTextarea1">contents</label>
              <textarea class="form-control" v-model="userData.contents" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
               <div class="form-group">
                  <label>Author Name</label>
                  <input type="text" v-model="userData.authors" class="form-control col-md-6" />
                </div>
               <div class="form-group">
                <div class="form-group">
                  <button @click="submitPost" type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <!-- <button  type="submit" class="btn btn-info ml-3">
                    Update
                  </button> -->
                </div>
                </div>
              </form>
           </div>
         </div>
         <div class="col-md-6">
          <div class="border" v-for="(person, index) in persons" :key='index'>
            <h4 class="card-title">{{person.title}}</h4>
            <p> {{person.contents}} </p>
             <footer class="blockquote-footer float-right">
                 <small class="text-muted">
                    {{person.authors}} <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
            <button>Edit</button>
            <button class="ml-1">Del</button>
          </div>
         </div>
        </div>
     </div>
    </div>
</template>



<script>
import axios from 'axios'
export default{
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
       userData:{
        title:"",
        contents:"",
        authors:"",
       },
      persons:[]
    }
  },
  methods:{
    submitPost(){
        // this.persons.push(this.userData)
      axios.post('https://blog-post-e5e73.firebaseio.com/user.json',this.userData)
      .then(function(res){
       console.log(res)
      }).catch(function(error){
          console.log(error)
      })
       this.userData = {
        title:"",
        contents:"",
        authors:"",
       }
    }
  }    
  }
</script>