/**
 * Created by Tedo on 23.7.2014 г..
 */
function Solve(arr1){
    Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };
    var str = arr1[0];
    var strings = str.split(/[\D]+/);
    var strings = strings.clean('');
    var numbers = [];
    console.log(strings);
    for(var i = 0 ; i < strings.length ; i++){
        numbers[i] = parseInt(strings[i]);
    }

    var result = "";
    var count = 1;
    var maxCount = 1;
    for ( var i = 0 ; i < numbers.length ; i ++){
        for ( var j = i + 1 ; j < numbers.length ; j++){
            if ((numbers[i] % 2 != numbers[j] % 2) ||  (numbers[i]===0) || (numbers[j] == 0) ){
                count++;
                i++;
                if(maxCount <= count){
                    maxCount = count;
                }
            }
            else{
                break;
            }

        }
        count = 1;

    }
//    console.log(numbers);
    return maxCount;
}
console.log(['Fun exam right']);