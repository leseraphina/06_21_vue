const App = Vue.createApp({
data(){
    return{
        name: 'click'
    }
},
methods:{
    myAction(mgs){
        console.log(mgs);
        this.name = mgs
    }
}
})

App.mount('#app')