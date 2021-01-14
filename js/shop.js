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
    
    
    var productPic = $('.product-and-info');
    var picButtons = $('.category-button');
    setButtonActive(0);
    
    function showProducts(n) {
        var productToShow = $(n);
        var i;
        
        for (i = 0; i < productPic.length; i++) {
            productPic[i].style.display = "none";
        }
        
        for (i = 0; i < productToShow.length; i++) {
            productToShow[i].style.display = "block";
        }
    }
    
    function setButtonActive(n) {
        var i;
        
        for (i = 0; i < picButtons.length; i++) {
            picButtons[i].className = picButtons[i].className.replace(" active", "");
        }
        
        picButtons[n].className += " active";
    }
    
    $('#all').click(function(){showProducts('.product-and-info'); setButtonActive(0)});
    $('#female').click(function(){showProducts('.female'); setButtonActive(1)});
    $('#male').click(function(){showProducts('.male'); setButtonActive(2)});
    $('#tops').click(function(){showProducts('.top'); setButtonActive(3)});
    $('#t-shirts').click(function(){showProducts('.t-shirt'); setButtonActive(4)});
    $('#blazers').click(function(){showProducts('.blazer'); setButtonActive(5)});
    $('#kimonos').click(function(){showProducts('.kimono'); setButtonActive(5)});
    
    
    // ... Kode slut ...

});
