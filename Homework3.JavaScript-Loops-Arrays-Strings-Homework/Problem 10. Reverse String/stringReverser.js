/**
 * Created by Tedo on 20.7.2014 г..
 */
function reverseString(value) {
    var str = "";
    for(var i = value.length - 1 ; i >= 0  ; i--){
        str += value[i];
    }
    return str;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));