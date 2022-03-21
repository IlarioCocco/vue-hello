const app = new Vue(
    {
        el: "#root",//si puo  dare l'id che si vuole
        data: {
            message: "HELLO VUE JS",
            linkImg: "/img/vue.svg",
            classeBottoneBiancoNero: "black_white",
            classeBottoneColore: "color", 
            classeBkgInput: "input",
            classeColore: "text-white",
            vediImagine: false,
            todosColors: [
            {codiceColore: "#ffffff"},
            {codiceColore: "#0095ff"},
            {codiceColore: "#e8da3d"},
            {codiceColore: "#c95054"},
            {codiceColore: "#0b9547"},
        ],  
            string: []
        },
        methods: {
            mySeeFunction: function() {
            this.vediImagine = (this.vediImagine == false)? true : false; // operatore ternario in function
            },

            changeColor: function() {
                if (this.classeColore == "text-white") {
                    this.classeColore = "text-blue";
                } else if (this.classeColore == "text-blue") {
                    this.classeColore = "text-yellow";
                } else if (this.classeColore == "text-yellow") {
                    this.classeColore = "text-red";
                } else if (this.classeColore == "text-red") {
                    this.classeColore = "text-green"
                } else {
                    this.classeColore = "text-white"
                }
            },

            myFunctionReload: function() {
                window.location.reload()
            },

            visual: function() {
                document.getElementById("vueHello").innerHTML = this.codiceColore;
            },
            
            
            
        },
    }
);


