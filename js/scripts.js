const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "Hello VueJs",
            linkImg: "/img/vueBW.png",
        },
        methods: {
            alert: function () {
                alert(this.message);
            }
        }
    }
);


