const app = new Vue(
    {
        el: "#root",
        data: {
            benvenuto: "Vue Hello",
            classe: "red-hello",
        },
        methods: {
            benvenuto: function () {
                alert(this.benvenuto);
            }
        }
    }
);


