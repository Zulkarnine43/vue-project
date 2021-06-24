import BookList1 from './components/BookListOne.vue'
import BookList2 from './components/BookListTwo.vue'
export const routes=[
    {
        path:'',
        component:BookList1
    },
    {
        path:'/bookList2',
        component:BookList2
    }
]