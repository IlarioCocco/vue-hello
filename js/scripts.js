const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "HELLO VUE",
            linkImg: "/img/vueBW.png",
            classeBottoneBiancoNero: "black_white",
            classeBottoneColore: "color", 
            classeBkgInput: "input",
            classeColore: "text-white",
            vediImagine: false,
        },
        methods: {
            visual: function() {
                document.getElementById("vueHello").innerHTML = this.message;
            },
            myFunction: function() {
                window.location.reload()
            },
            changeColor: function() {
                if (this.classeColore == "text-white") {
                    this.classeColore = "text-blue";
                } else if (this.classeColore == "text-blue") {
                    this.classeColore = "text-yellow";
                } else if (this.classeColore == "text-yellow") {
                    this.classeColore = "text-red";
                } else if (this.classeColore == "text-red") {
                    this.classeColore = "text-white"
                }
            },
                mySeeFunction: function() {
                this.vediImagine = (this.vediImagine == false)? true : false; // operatore ternario in function
            },
           
        },
    }
);


