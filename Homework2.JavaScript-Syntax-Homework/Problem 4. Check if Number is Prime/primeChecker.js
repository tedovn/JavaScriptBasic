/**
 * Created by Tedo on 19.7.2014 г..
 */
function isPrime(value)  {
    if(value % 2 == 0 ){
        if (value == 2){
            return true;
        }
        return false;

    }
    if (value % 1 == 0){
        return true;
    }
    for(var i = 2 ; i <= Math.sqrt(value) ; i++){

             if (value % i == 0){
                 return false;
             }
            else{
                 return true;
             }


    }
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));
console.log(isPrime(1));