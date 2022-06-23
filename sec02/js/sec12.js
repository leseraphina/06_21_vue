const App = Vue.createApp(
    {
    data(){
        return {
            count : 0,
            num : 20
        }
    },
    methods:{
        myAction(){
            this.count ++ ;
        },
        myPuls(){
            this.num += 10;
        }
    }
    }
)

App.mount('#app');