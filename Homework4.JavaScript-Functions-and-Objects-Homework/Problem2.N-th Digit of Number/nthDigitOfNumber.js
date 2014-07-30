/**
 * Created by Pavlik on 26.7.2014 г..
 */
function findNthDigit(arr) {

    var n = arr[0];
    var digit = arr[1];
    var strDigit = digit.toString().split(/[.]/);
    var str = '';
    for (var i = 0; i < strDigit.length; i++) {
        str += strDigit[i];

    }
    digit = parseInt(str);
    if (digit < 0) {
        digit = digit * -1;
    }
    var result = 0;
    for (var i = 0; i < n - 1; i++) {

        digit = Math.floor(digit / 10);
        if ( digit == 0){
            return "The number doesn’t have " + n + " digits";
        }

    }
    result = digit % 10;
    return result;


}
console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));


