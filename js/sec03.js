const App = {
 data(){
return {
    name:'welcome1'
}
 }
}

Vue.createApp(App).mount('#app')

const AppSec = {
data(){
    return {
        name:'welcome2'
    }
}
}
Vue.createApp(AppSec).mount('#appSec')