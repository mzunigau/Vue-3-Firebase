const app = Vue.createApp({
    // data functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'Artist',
            author: 'Freddy',
            age: 45
        };
    }
});

app.mount('#app');