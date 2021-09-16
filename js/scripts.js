const app = new Vue(
    {
        el: "#root",
        data: {
            benvenuto: "Vue Hello",
            classe: "red-hello",
        },
        methods: {
            saluta: function () {
                alert(this.benvenuto);
            }
        }
    }
);


