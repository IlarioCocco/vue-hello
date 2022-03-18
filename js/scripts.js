const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "Hello Vue",
            linkImg: "/img/vueBW.png",
            classeBottoneBiancoNero: "black_white",
            classeBottoneColore: "color", 
            classeBkgInput: "input",
        },
        methods: {
            alert: function () {
                alert(this.message);
            }
        }
    }
);


