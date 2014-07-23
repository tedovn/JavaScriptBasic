/**
 * Created by Tedo on 20.7.2014 г..
 */
function findMaxSequence(value) {
    var currentSequence = 1;
    var longestSequence = 1;
    var biggestDigit = 0;
    for(var i = 1 ; i < value.length ; i++){
            if (value[i] > value[i - 1]){
                currentSequence++;
                if(longestSequence < currentSequence){
                    longestSequence = currentSequence;
                    biggestDigit = i - longestSequence + 1;
//                    console.log(biggestDigit);

                }

            }
            else{
                currentSequence = 1;
            }
    }
    var arr = [];
    var countSeries = 0;
    for (var i = biggestDigit ; i < value.length ; i ++ ){

            arr.push(value[i]);
            countSeries++;
            if(countSeries == longestSequence){

                break;
            }

    }

    console.log(arr);
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);