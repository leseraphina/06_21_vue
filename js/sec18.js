const App = Vue.createApp({
    data(){
       return {
        myArray : [20,30,40,50,60,70,80,90]
       } 
    },
    computed:{
        arrayNum(){
            return this.myArray.filter(item => (item < 50))
        }
    },
    methods:{
        
    }
})
App.mount('#app')