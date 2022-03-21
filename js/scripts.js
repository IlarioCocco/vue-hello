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
            {message: "#ffffff"},
            {message: "#0095ff"},
            {message: "#e8da3d"},
            {message: "#c95054"},
            {message: "#0b9547"},
        ],  
            string: []
        },
        methods: {
            visual: function() {
                document.getElementById("vueHello").innerHTML = this.message;
            },
            myFunctionReload: function() {
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
                    this.classeColore = "text-green"
                } else {
                    this.classeColore = "text-white"
                }
            },
            mySeeFunction: function() {
            this.vediImagine = (this.vediImagine == false)? true : false; // operatore ternario in function
            },

            // addString: function(i) {
            //     this.string.push(i);
            //     console.log(string);
            // }

        },
    }
);


