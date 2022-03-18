const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "Hello Vue",
            linkImg: "/img/vueBW.png",
            classeBottoneBiancoNero: "bw",
            classeBottoneColore: "c", 
            classeBkgInput: "input",
        },
        methods: {
            alert: function () {
                alert(this.message);
            }
        }
    }
);


