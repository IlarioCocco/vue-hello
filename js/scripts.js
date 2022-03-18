const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "HELLO VUE",
            linkImg: "/img/vueBW.png",
            classeBottoneBiancoNero: "black_white",
            classeBottoneColore: "color", 
            classeBkgInput: "input",
            classeColore: "text-white"
        },
        methods: {
            visual: function() {
                document.getElementById("vueHello").innerHTML = this.message;
            },
            myFunction: function() {
                window.location.reload()
            },
            changeColor: function() {
                this.classeColore = "text-yellow";
            },
        },
    }
);


