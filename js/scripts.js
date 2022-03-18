const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "Hello VueJs",
            classe: "benvenuto",
            linkImg: "/img/vue_js_logo.png",
        },
        methods: {
            saluta: function () {
                alert(this.message);
            }
        }
    }
);


