/**
 * Created by Tedo on 20.7.2014 г..
 */

function findMaxSequence(value) {
    var count = 1;
    var maxCount = 1;
    var takeDigit = value[0];
    for (var i = 1; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            count++;
            if (maxCount <= count) {
                maxCount = count;
                takeDigit = value[i];
            }
        }
        else {
            count = 1;
        }


    }
    var arr = [];
    for (var i = 0; i < maxCount; i++) {
        arr[i] = takeDigit;
    }
    return arr;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));