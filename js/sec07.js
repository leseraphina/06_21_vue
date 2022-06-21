
const App = {
    data(){
        return {
            product:[
                {
                name:'flower01',
                decription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                pic:'./images/source01.JPG'
            },{
                name:'flower02',
                decription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                pic:'./images/source02.JPG'
            },{
                name:'flower03',
                decription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                pic:'./images/source03.JPG'
            },{
                name:'flower04',
                decription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                pic:'./images/source04.JPG'
            },{
                name:'flower05',
                decription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                pic:'./images/source05.JPG'
            }]
        }
    }
}

Vue.createApp(App).mount('#app')