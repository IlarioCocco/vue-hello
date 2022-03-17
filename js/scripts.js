const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            benvenuto: "Hello VueJs! Clicca su Cambia",
            classe: "red-hello",
            linkImg: "/img/vueJsLogo.png",
        },
        methods: {
            saluta: function () {
                alert(this.benvenuto);
            }
        }
    }
);


