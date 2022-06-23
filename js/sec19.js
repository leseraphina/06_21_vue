const App = Vue.createApp({
data(){
    return {
        max:10
    }
}
})
App.mount('#app')

const Text = Vue.createApp({
data(){
    return {
        str : ''
    }
}
})
Text.mount('#text')