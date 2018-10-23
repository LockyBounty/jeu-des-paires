let objetImages = {};
let tableauCartes = ["images/anehihan.jpg","images/chatminou.jpg","images/chientoutou.jpg","images/lamacrachat.jpg","images/lapinscrottes.jpg","images/lionnegraou.jpg","images/oursbaby.jpg"];
let setImg = [];
for (i=0;i<tableauCartes;i++){
    setImg = document.querySelector(`#card-${i}`).src = tableauCartes[i];
    console.log(setImg);
}
let a = document.querySelector("#card-1");
let attribution = () => {


// for (i=0; i<tableauCartes.length; i++){
//    a[i].src = `"${tableauCartes[i]}"`;
// }

// console.log(i);

// }

a.addEventListener("click", attribution);