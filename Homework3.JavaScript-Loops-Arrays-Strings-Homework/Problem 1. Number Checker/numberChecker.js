/**
 * Created by Tedo on 20.7.2014 г..
 */
function printNumbers(n){
    var Str = "";
    var arr = [];
    if(n <= 0 ){
        return "no";
    }
   for (var i = 1 ; i <= n ; i++){
        if ((i % 4 != 0) && (i % 5 != 0)){
           arr.push(i);

        }
    }
    for(var i = 0 ; i < arr.length ; i++){
        if( i < arr.length - 1){
            Str += arr[i] + ", ";
        }
        else{
            Str += arr[i];
        }
    }
    return Str;
}
console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));