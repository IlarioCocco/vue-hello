const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            benvenuto: "Vue Hello",
            classe: "red-hello",
            linkImg: "https://v1.vuejs.org/images/logo.png",
        },
        methods: {
            saluta: function () {
                alert(this.benvenuto);
            }
        }
    }
);


