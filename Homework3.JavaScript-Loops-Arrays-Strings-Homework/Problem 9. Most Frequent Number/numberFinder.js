/**
 * Created by Tedo on 20.7.2014 г..
 */
function findMostFreqNum(value){
    var count = 1;
    var maxCount = 1;
    var takeDigit = value[0];
    for(var i = 0 ; i < value.length ; i++){

        for(var j = i + 1 ; j < value.length ; j++){
            if(value[i] === value[j]){
                count++;
                if(maxCount <= count){
                    maxCount = count;
                    takeDigit = value[i];
                }
            }

        }
        count = 1;
    }
    console.log('%s (%s times)',takeDigit,maxCount)

}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);