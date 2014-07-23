/**
 * Created by Tedo on 19.7.2014 г..
 */
function divisionBy3(value) {
    var sumOfdigits = 0;
    while (value > 0) {
        sumOfdigits += value % 10;
        value = Math.floor(value / 10);

    }
    if (sumOfdigits % 3 == 0){
        return("the number is divided by 3 without remainder");
    }
    else{
        return("the number is not divided by 3 without remainder");
    }


}
//console.log(divisionBy3(12));
console.log(divisionBy3(188));
//console.log(divisionBy3(591));
