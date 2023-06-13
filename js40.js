// SPREAD OPERATOR
// tool used to spread array item and join objects together


let top3 = [
"Bali",
"Paris",
"Tulum"
];
function showItenary(place1, place2, place3) {
    consol.log("visit" + place1);
    consol.log("Then visit" + place2);
    consol.log("Finish with a visit to" + place3);
}
showItenary(...top3);