function bringShingara(taka) {
    console.log('singarar jonno taka dise', taka);
    console.log('mama sinara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 500;
var singaraQuantity = bringShingara(money);
console.log('singara nen mama', singaraQuantity);
