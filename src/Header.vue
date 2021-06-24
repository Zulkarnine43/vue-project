<template>
  <ul class="nav nav-pills bg-primary">
 
   <router-link active-class="active" tag="li" exact class=" nav-item nav-link text-white" to="/">{{bName1}}</router-link>
    <router-link active-class="active" tag="li" exact class=" nav-item nav-link text-white" to="/bookList2">{{bName2}}</router-link>
    <button @click="updateName">Click Me</button>
</ul>
</template>
<script>
export default {
  props:{
      bName1:String,
      bName2:String
  },
 methods:{
     updateName(){
        this.$emit('updateValue','BookList3')
     }
}
}
</script>