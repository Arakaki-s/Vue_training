// const app = Vue.createApp({
//     // options
//     data: () => ({
//         message: 'Hello Vue.js!'
//     }) 
// })
// app.mount('#app')


const animal = "cat"
const app = Vue.createApp({
    // options
    data: () => ({
message: 'Hello! Vue.js!',
        toggle: true,
        colors: ['Red', 'Green', 'Blue'],
        user: {
            firstName: "Taro",
            lastName: "Yamada",
            age: 23,
        },
        now: '-',
        template: animal
    }),
    methods: {
        onClick: function() {
            // console.log('onClick!')
            this.now = new Date().toLocaleString()
            console.log(this)
        }    
    }
})
// const animal = "cat"
// app.component('hello-component', {
//     template: animal
// })
app.mount('#app')