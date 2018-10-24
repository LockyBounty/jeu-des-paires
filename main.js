let objetImages = {};
let tableauCartes = ["images/anehihan.jpg", "images/chatminou.jpg", "images/chientoutou.jpg", "images/lamacrachat.jpg", "images/lapinscrottes.jpg", "images/lionnegraou.jpg", "images/oursbaby.jpg"];
let tableauCartesclone = tableauCartes;
let tableauConcatenation = tableauCartes.concat(tableauCartesclone);
let imgCache = "images/what1.png";

let clickToWatch = document.querySelector("[id*='card']");
let deviner = [];
let cpt = true;
console.log(tableauConcatenation);

let allImg = document.querySelectorAll("img");

let attribution = () => {
    for (i = 0; i < tableauConcatenation.length; i++) {
        allImg[i].src = `${tableauConcatenation[Math.floor((i)*1)]}`;

    }
}

let cacheStart = () => {

    for (i = 0; i < tableauConcatenation.length; i++) {
        allImg[i].src = `${imgCache}`;
    }
}

let unVeil = () => {
    if (cpt === true) {

        cpt = false;
        return this;
    }

else {
    for (i = 0; i < tableauConcatenation.length; i++) {
        cacheStart();
        cpt = true;
    }
}
}

/*Cacher toutes les images au depart */
cacheStart();
attribution();
clickToWatch.addEventListener("click", attribution);