$(document).ready(function () {
    $('.menu-item, #cRetour').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 250) ? "cVisible" : "cInvisible";
    };
});

var pASHM = document.getElementById('prixAdulteSHM');
var pESHM = document.getElementById('prixEnfantSHM');
var pAWM = document.getElementById('prixAdulteWM');
var pEWM = document.getElementById('prixEnfantWM');
var pGSHM = document.getElementById('prixGroupeSHM');
var pGWM = document.getElementById('prixGroupeWM');


var prixAdulte = 20;
var prixEnfant = 10;
var prixAdulteWM = 25;
var prixEnfantWM = 15;
var prixGroupe = 16;
var prixGroupeWM = 18;


function plus(nbPersonne) {
    
    if (nbPersonne.id=="countAdulte" || nbPersonne.id=="countEnfant") {
    if (nbPersonne.value < 9) {
        nbPersonne.value++;
        majPrix(nbPersonne);
    }
    }
    else if (nbPersonne.id=="countAdulte") {
        console.log(nbPersonne.value);
    }
        if (nbPersonne.value > 9 && nbPersonne.value < 25) {
        nbPersonne.value++;
        majPrix(nbPersonne);
    }
}


function minus(nbPersonne) {
    if (nbPersonne.value > 0) {
        nbPersonne.value--;
        majPrix(nbPersonne);
    }
}

function majPrix(client) {

    if (client.id == 'countAdulte') {
        totalAdulte = prixAdulte * client.value;
        pASHM.innerHTML = totalAdulte + " €";
        totalAdulte2 = prixAdulteWM * client.value;
        pAWM.innerHTML = totalAdulte2 + " €";


    } else if (client.id == 'countEnfant') {

        totalEnfant = prixEnfant * client.value;
        pESHM.innerHTML = totalEnfant + " €";
        totalEnfant2 = prixEnfantWM * client.value;
        pEWM.innerHTML = totalEnfant2 + " €";
    }
    else if (client.id == 'countGroupe') {

        totalGroupe = prixGroupe * client.value;
        pGSHM.innerHTML = totalGroupe + " €";
        totalGroupe2 = prixGroupeWM * client.value;
        pGWM.innerHTML = totalGroupe2 + " €"
    }
    

}
