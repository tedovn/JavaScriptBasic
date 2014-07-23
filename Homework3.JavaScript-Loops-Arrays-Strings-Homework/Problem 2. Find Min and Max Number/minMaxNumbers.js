/**
 * Created by Tedo on 20.7.2014 г..
 */
function findMinAndMax(value){
    function sortDigits(a,b){
        return a > b;
    }
    value.sort(sortDigits);
    console.log("Min -> " + value[0]);
    console.log("Max -> " + value[value.length-1]);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);

