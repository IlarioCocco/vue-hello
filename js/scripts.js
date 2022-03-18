const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "HELLO VUE",
            linkImg: "/img/vueBW.png",
            classeBottoneBiancoNero: "black_white",
            classeBottoneColore: "color", 
            classeBkgInput: "input",
        },
        methods: {
            visual: function () {
                document.getElementById("vueHello").innerHTML = this.message;
            }
        }
    }
);


