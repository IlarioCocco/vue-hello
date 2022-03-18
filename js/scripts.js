const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "Hello VueJs",
            classe: "benvenuto",
            linkImg: "/img/vueJsLogo.png",
        },
        methods: {
            saluta: function () {
                alert(this.message);
            }
        }
    }
);


