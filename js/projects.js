/**
 * file: projects.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/projects.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... Kode start ...
    
    /*Gemmer reference til projekt videoen i en variable*/
    var video = document.getElementById("video");

    /*Når der bliver klikket på TV rammen og indenfor, vil videoen starte og afspilnings ikonet gemt.
    Er videoen igang vil den blive sat på pause og afspilnings ikonet blive vist igen*/
    $("#media1").click(function () {
        if (video.paused) {
            video.play();
            $("#play-button").hide();
        } else {
            video.pause();
            $("#play-button").show();
        }
    });
    // ... Kode slut ...

});
