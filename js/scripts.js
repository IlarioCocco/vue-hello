const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
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


