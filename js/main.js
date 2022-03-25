const app = new Vue({
        el: "#root",
        data: {
            classeColore: "text-white",
            message: "VUE JS AUTO",
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
            {src: "/img/vue.svg", title: "Verde"},
            {src: "/img/vue_pink.png", title: "Pink"},
            {src: "/img/vue_red.png", title: "Red"},
            {src: "/img/vue_blue.png", title: "Blue"},
            {src: "/img/vue_viola.png", title: "Viola"},
        ],
            indexImage: 0,
            replayId: null
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
            
            rightImg: function() {
                this.indexImage++;

                if( this.indexImage >=  this.images.length ) {
                    this.indexImage = 0;
                }
            },

            leftImg: function() {
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

            play: function() {
                this.replayId = setInterval( this.rightImg, 2000 ) 
            },

            stop: function() {
                if (this.replayId != null) {
                    clearInterval(this.replayId);
                }
            }
            
        },

            // metodo non usato a favore del ternario (vedi html) = @click="indexImage = index" 
            // changeImage: function(indexCircle) {
            //     this.indexImage = indexCircle;
            // },

//----------------------------MOUNTED HOOK-------------------------------//
            mounted: function() {
                this.play(); 
            }

});