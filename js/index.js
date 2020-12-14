/**
 * file: index.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/index.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... Kode start ...
    /*Gemmer reference til video på pop-up skærmen i en variable*/
    var blackBoxVideo = document.getElementById("blackBoxVideo");
    
    /*Når der bliver klikket på TV rammen og indenfor, vil videoen starte og afspilnings ikonet gemt.
    Er videoen igang vil den blive sat på pause og afspilnings ikonet blive vist igen*/
    $("#position-relative").click(function () {
        if (blackBoxVideo.paused) {
            blackBoxVideo.play();
            $("#play-button").hide();
        } else {
            blackBoxVideo.pause();
            $("#play-button").show();
        }
    });
    
    /*Fjerner pop-up skærmen og pauser dens video, når man klikker på knappen "#start-button"*/
    $("#start-button").click(function () {
        blackBoxVideo.pause();
        $("#black-box").css("display", "none");
    });
    
    /*Gemmer reference til videoen med det spindende logo i en variable*/
    var video = document.getElementById("logo_spin");

    /*Når musen trækkes hen over videoen vil den starte.
    Når musen trækkes væk vil den pause*/
   $(video).mouseover(function () {
        video.play();
    });
    $(video).mouseout(function () {
        video.pause();
    });

    /*Når der klikkes på den samme video vil den starte.
    Hvis den allerede er igang vil den blive sat på pause*/
    $(video).click(function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
    
    /*Når man trækker musen hen over et billede, vil en tekst boks der er gemt bag billedet komme frem, og billede og tekstboksen vil blive forstørret en smule.
    Når man trækker musen væk vil billede og tekstboksen blive sat tilbage til udgangspunktet*/
    $(".img_product").mouseover(function () {
        $(this).children(".see-more-text").css("z-index", "10");
        $(this).css("transform", "scale(1.1)");
    });
    $(".img_product").mouseout(function () {
        $(this).children(".see-more-text").css("z-index", "-10");
        $(this).css("transform", "scale(1)");
    });
    // ... Kode slut ...

});
