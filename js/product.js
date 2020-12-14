/**
 * file: product.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/product.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {
  // ... Kode start ...
  
    /*Samler reference til billede og knappe container i et array*/
    var productPic = document.getElementsByClassName("product_pic");
    var picButtons = document.getElementsByClassName("pic_button");
    
    /*Laver en variable til at fortælle funktionen "showPicture()" hvilket billede der skal vises, og starter funktionen, så det kun er det første billede der bliver vist når man åbner siden*/
    var pictureIndex = 0;
    showPicture(pictureIndex);
    
    /*Laver en funktion, som kanpperne skal bruge for at kunne fortælle hvad billede der skal vises*/
    function currentPicture(n) {
        showPicture(pictureIndex = n);
    }
    
    /*Denne funktion er den funktion der først skjulder alle billederne, så fjerne ".active" class fra alle knapper.
    Derefter viser den det valgte billede, og giver ".active" class stylingen til den knap der blev klikket på*/
    function showPicture(n) {
        var i;
        for (i = 0; i < productPic.length; i++) {
            productPic[i].style.display = "none";
        }
        for (i = 0; i < picButtons.length; i++) {
            picButtons[i].className = picButtons[i].className.replace(" active", "");
        }
        productPic[pictureIndex].style.display = "block";
        picButtons[pictureIndex].className += " active";
    }
    
    /*Her fortæller jeg knapperne hvilket billede der skal vises når man klikker på dem*/
    $('#front_pic').click(function(){currentPicture(0)});
    $('#side_pic').click(function(){currentPicture(1)});
    $('#back_pic').click(function(){currentPicture(2)});
  // ... Kode slut ...
});
