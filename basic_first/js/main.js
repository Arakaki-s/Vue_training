const app = Vue.createApp({
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
        template: "cat"
    }),
    methods: {
        onClick: function() {
            this.now = new Date().toLocaleString()
        }    
    }
})
app.mount('#app')
