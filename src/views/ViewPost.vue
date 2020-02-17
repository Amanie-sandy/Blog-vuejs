<template>
    <div>
        <div>
            <div v-for="(person, index) in persons" :key='index'>
                <div class="border-0" v-if="display">
                  <div class="container border bg-white">
                        <h4 class="card-title text-primary mt-2">{{person.title}}</h4>
                    <p> {{person.contents}} </p>
                    <footer class="blockquote-footer float-right">
                        <small class="text-primary">
                            {{person.authors}} <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    <button type="button" class="btn btn-secondary btn-sm mb-2" @click="editPost(index)">Edit</button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-1 mb-2" @click="deletePost(person.id)">Delete</button>
                  </div>
                </div>
            </div>
            <div v-if="disp">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card shadow p-4 ml-2">
                            <h2 class="mb-4">UPDATE POST</h2>
                            <form @submit.prevent>
                                <div class="form-group">
                                    <label>Post Title</label>
                                    <input type="text" v-model="userData.title" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Contents</label>
                                    <textarea class="form-control" v-model="userData.contents" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Author Name</label>
                                    <input type="text" v-model="userData.authors" class="form-control col-md-6" />
                                </div>
                                <div class="form-group">
                                <div class="form-group">
                                   <button @click="updatePost()" type="submit" class="btn btn-primary">
                                    Update
                                    </button> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import axois from 'axios'
export default {
   data() {
       return{
            userData:{
        title:"",
        contents:"",
        authors:"",
       },
            persons:[],
            display: true,
            disp: false,
            postUpdate: null,
            personId: null
       }
   },
   methods: {
       deletePost(i){
           axois.delete(`https://blog-post-e5e73.firebaseio.com/user/${i}.json`)
           .then(function(res){
               console.log(res)
               location.reload()
           }, function(error){
               console.log(error)
           })
       },
       editPost(ID){
        this.display = false
        this.disp = true
        this.userData = this.persons[ID]
        this.postUpdate = this.persons.indexOf(ID)
        this.personId = this.persons[ID].id
       },
       updatePost(){
        //  console.log(this.personId)  
        axois.put(`https://blog-post-e5e73.firebaseio.com/user/${this.personId}.json`, this.userData) 
          .then(function(res){
                console.log(res)
                location.reload()
           }, function(error){
               console.log(error)
           })
       }
   },
   created(){
       axois.get('https://blog-post-e5e73.firebaseio.com/user.json')
       .then(res =>{
        console.log(res)
        const data = res.data
        for (let key in data){
         const post = data[key]
        post.id = key 
        this.persons.unshift(post)
        }
       }).catch(error=>{
           console.log(error);
       })
   }
}
</script>