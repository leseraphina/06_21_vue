const App = Vue.createApp({
    data(){
        return {
            myArray : [20,30,40,50,60, 80,90]
        }
    },
    methods:{
        arrayAction(){
            // 배열.filter(() => {return 배열})
            // 배열.filter(() => 배열)
            return this.myArray.filter(
                 item => (item < 50)
            )
        }
    }
})
App.mount('#app')