<template>
    <div id="app">
        <compHeader :bName1="Book1" :bName2="Book2" @updateValue="Book2 =$event" />
            <router-view></router-view>
        <!-- <compBookListOne ></compBookListOne>
        <compBookListTwo ></compBookListTwo> -->
    </div>
</template>

<script>
// import compBookListOne from "./components/BookListOne"
// import compBookListTwo from "./components/BookListTwo"
import CompHeader from './Header.vue'
export default {
    data(){
     return{
     Book1:'BookList1',
     Book2:'BookList2'
     }
    },
    components:{
    //   compBookListOne,
    //   compBookListTwo,
      CompHeader
    }
}
</script>
