let id = 1;
const App = Vue.createApp({
data(){
    return {
        newTodo:'',
        todos:[{
            id: id++,
            text:'html배우기'
        },{
            id: id++,
            text:'javascript배우기'
        },{
            id: id++,
            text:'Vue 배우기'
        },{
            id: id++,
            text:'React배우기'
        }]
    }
},
methods:{
addTodo(){
    this.todos.push({
        id: id++,
        text : this.newTodo
    })
    this.newTodo=''
},
removeTodo(todo){
 this.todos = this.todos.filter( item => item !== todo )
}
}
})

App.mount('#app')