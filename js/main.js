const app = new Vue({
        el: "#root", //si puo  dare l'id che si vuole
        data: {
            classeColore: "text-white",
            message: "HELLO VUE JS",
            linkImg: "/img/vue.svg",
            classeBkgInput: "input",
            vediImagine: false,
            todosColors: [
            {codiceColore: "#ffffff"},
            {codiceColore: "#0095ff"},
            {codiceColore: "#e8da3d"},
            {codiceColore: "#c95054"},
            {codiceColore: "#0b9547"},
        ],  
            string: [],

            images: [
            "/img/vue.svg", 
            "/img/vue_pink.png",
            "/img/vue_red.png",
            "/img/vue_blue.png",
            "/img/vue_viola.png",
        ],

            indexImage: 0

        },
        methods: {
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

            visual: function() {
                document.getElementById("vueHello").innerHTML = this.message;
            },

            leftImg: function() {
                this.indexImage++;

                if( this.indexImage >=  this.images.length ) {
                    this.indexImage = 0;
                }
            },

            rightImg: function() {
                this.indexImage--;

                if ( this.indexImage == - 1 ) {
                    this.indexImage = this.images.length - 1;
                }
            },

            isCircleActive: function(indexCircle) {
                if ( this.indexImage == indexCircle ) {
                    return 'active';
                } 
                else {
                    return '';
                }
            },

            changeImage: function(indexCircle) {
                this.indexImage = indexCircle;
            },
        },
    }
);

