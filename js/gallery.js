/**
 * file: gallery.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/gallery.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... Kode start ...
    /*Dette event skal være på alle billederne.
    Når man trækker musen hen over et billede, vil tekst en boks der er gemt bag billedet komme frem, og billede og tekstboksen vil blive forstørret en smule.
    Når man trækker musen væk vil billede og tekstboksen blive sat tilbage til udgangspunktet*/
    $(".position-relative").mouseover(function () {
        $(this).children(".pop-up-text").css("z-index", "5");
        $(this).css("transform", "scale(1.1)")
    });
    $(".position-relative").mouseout(function () {
        $(this).children(".pop-up-text").css("z-index", "-10");
        $(this).css("transform", "scale(1)");
    });
    
    /*Midlertidig billede effekt, indtil tekst er tilføjet på alle billederne*/
    $(".hover-effect").children("picture").children("img").mouseover(function () {
        $(this).css("transform", "scale(1.1)");
    });
    $(".hover-effect").children("picture").children("img").mouseout(function () {
        $(this).css("transform", "scale(1)");
    });
    // ... Kode slut ...

});
