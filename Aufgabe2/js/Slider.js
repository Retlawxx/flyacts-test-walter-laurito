/**
 * Author: Walter Laurito
 *
 * Slider
 * @type {{currentPart: number, switchImageInterval: number, aboutUsUrl: string, imageDevelopmentUrl: string, imageMarketingUrl: string, imageTeam: string, init: Slider.init, initImages: Slider.initImages, slide: Slider.slide}}
 */
var Slider = {
       currentPart: 0,
       // switch image every 4 seconds
       switchImageInterval: 4000,

       aboutUsUrl: "img/about.jpg",
       imageDevelopmentUrl: "img/entwicklung.jpg",
       imageMarketingUrl: "img/marketing.jpg",
       imageTeam: "img/team.jpg",

        init: function() {
            Slider.initImages();
        },

        /**
        * initImages
        * Add images to slider via javascript without src, for later loading
        * (Task: Use javascript only)
        */
        initImages: function () {
            var parts = document.getElementsByClassName("part");

            var imageAboutUs = document.createElement("img");
            imageAboutUs.dataset.src = Slider.aboutUsUrl;
            parts[0].appendChild(imageAboutUs);

            var imageDevelopment = document.createElement("img");
            imageDevelopment.dataset.src = Slider.imageDevelopmentUrl;
            parts[1].appendChild(imageDevelopment);

            var imageMarketing = document.createElement("img");
            imageMarketing.dataset.src = Slider.imageMarketingUrl;
            parts[2].appendChild(imageMarketing);

            var imageTeam = document.createElement("img");
            imageTeam.dataset.src = Slider.imageTeam;
            parts[3].appendChild(imageTeam);

            var images = document.getElementsByTagName("img");
            for(var i=0; i<images.length; i++){
                images[i].style.width = "100%";
            }
        },

        /**
         * slide()
         * Switch image after a specific time
         */
        slide: function() {
            var parts = document.getElementsByClassName("part");

            for (var i = 0; i < parts.length; i++) {
                parts[i].style.display = "none";
            }

            Slider.currentPart++;
            if (Slider.currentPart > parts.length) {
                Slider.currentPart = 1
            }

            parts[Slider.currentPart-1].style.display = "block";

            // load current image by setting src only once after slide swap
            var img = parts[Slider.currentPart-1].querySelector("img");
            if(img !== null && !img.src && img.src == ""){
                img.setAttribute('src', img.getAttribute('data-src'));
            }

            // change part every five seconds
            setTimeout(Slider.slide, Slider.switchImageInterval);
        }
    };

