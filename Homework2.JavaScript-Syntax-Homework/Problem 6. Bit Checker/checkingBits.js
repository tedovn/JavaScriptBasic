/**
 * Created by Tedo on 19.7.2014 г..
 */
function bitChecker(value){
    var bitCheck = value >> 3 & 1 ;

    return (bitCheck == 1);
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));