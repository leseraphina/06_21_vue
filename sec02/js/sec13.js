const App = Vue.createApp(
    {
      data(){
        return {
            name :'click'
        }
      },
      methods:{
        myAction(meg){
            console.log(meg);
            this.name = meg
        }
      }
    }
    )

App.mount('#app')