const app = Vue.createApp({
    // data functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'Artist',
            author: 'Freddy',
            age: 45,
            show: true,
            x: 0,
            y: 0
        };
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        toggleShow() {
            this.show = !this.show;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;

        }
    }
});

app.mount('#app');