/**
 * file: js.js
 * purpose: interactivity
 **/
console.log("JavaScript from js/js.js: up and running!");

// Tjek at DOM er indlæst
$(document).ready(function () {

    // ... Kode start ...
    //Laver en boolean for at tjekke om dropdown menuen er aktiv
    var isActive = false;
    
    //Samler de to ikoner der skal skiftes imellem i et array
    var iconArray = [
        '<img src="images/burger-icon.svg" alt="Menu icon" />',
        '<img src="images/cross-icon.svg" alt="Menu icon" />'
    ];

    //Tjekker om der bliver klikket på bruger ikonet
    $('#burger-icon').click(function () {
        
        //Hvis dropdown menuen er aktiv, ændre ikonet til en burger menu, og sig at dropdown menuen ikke er aktiv
        if (isActive) {
            $(this).html(iconArray[0]);
            isActive = false;
        } 
        //Hvis dropdown menuen ikke er aktiv, ændre ikonet til en et kryds, og sig at dropdown menuen er aktiv
        else {
            $(this).html(iconArray[1]);
            isActive = true;
        }
    });
    
    //Skjuler dropdown menuen i starten
    $("#dropdown-menu").hide();
    
    //Når der bliver klikket på burger ikonet, skift mellem at skjule og vise dropdown menuen
    $("#burger-icon").click(function () {
        $("#dropdown-menu").toggle();
    });

    //Beder scriptet holde øje med om der bliver scrollet
    window.addEventListener('scroll', function () {
        
        //Samler alle boblere i et array
        var target = document.getElementsByClassName('bobble');

        //Laver en index variable så der bliver ændret på alle boblerne ved hjælp af et loop
        var index = 0;
        
        //Loop igennem alle boblerne
        for (index; index < target.length; index++) {
            
            //Laver en variabel som skal bruges til at ændre boblens position på siden
            var pos = window.pageYOffset * target[index].dataset.rate;
            
            //Ændre boblens position på siden
            target[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
        }
    });
    // ... Kode slut ...

});
