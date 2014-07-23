/**
 * Created by Tedo on 20.7.2014 г..
 */
function compareChars(value1,value2){
    if (value1.length != value2.length){
        return "Not Equal";
    }
    for(var i = 0 ; i < value2.length ; i++ ){
        if (value1[i] !== value2[i] ){
            return "Not Equal";
        }

    }

    return "Equal";
}
console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
             ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'],['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
             ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));