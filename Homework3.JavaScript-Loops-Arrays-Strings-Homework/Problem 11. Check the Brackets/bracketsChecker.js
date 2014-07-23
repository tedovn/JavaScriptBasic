/**
 * Created by Tedo on 20.7.2014 г..
 */
function checkBrackets(value){
    var countBracketsLeft = 0;
    var countBracketsRight = 0;
    var leftBracket = "(";
    var rightBracket = ")";
    for(var i = 0; i <= value.length ; i++){
        if(leftBracket === value[i]){
            countBracketsLeft++;


        }
        if (rightBracket === value[i]){
            countBracketsRight++;
        }
    }
    if(countBracketsLeft == countBracketsRight){
        return "correct";
    }
    else{
        return "incorrect";
    }

}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));


