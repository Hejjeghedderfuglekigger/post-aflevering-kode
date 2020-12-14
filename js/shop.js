/**
 * file: shop.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/shop.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... Kode start ...
    
    /*Når man trækker musen hen over et billede, vil en tekst boks der er gemt bag billedet komme frem.
    Når man trækker musen væk vil tekstboksen blive sat tilbage til udgangspunktet*/
    $(".product_showcase").mouseover(function () {
        $(this).children(".see-more-text").css("z-index", "-1");
    });
    $(".product_showcase").mouseout(function () {
        $(this).children(".see-more-text").css("z-index", "-10");
    });
    // ... Kode slut ...

});
