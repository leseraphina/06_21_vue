const App = {
    data(){
        return{
            count : 0,
            name : 'welcome'
        }
    }
}

Vue.createApp(App).mount('#app')