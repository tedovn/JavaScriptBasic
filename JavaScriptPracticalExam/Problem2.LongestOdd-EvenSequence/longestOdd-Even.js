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
    for(var i = 0 ; i < strings.length ; i++){
        numbers[i] = parseInt(strings[i]);
    }

    var result = "";
    var count = 1;
    var maxCount = 1;
    for ( var i = 0 ; i < numbers.length ; i ++){
        for ( var j = i + 1 ; j < numbers.length ; j++){
            if ((numbers[i]===0) || (numbers[j] == 0) || (numbers[i] % 2 != numbers[j] % 2)){
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
//console.log(Solve(['3) (22) (-18) (55) (44) (3) (21)']));
//console.log(Solve(['(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)']));
//console.log(Solve(['  ( 2 )  ( 33 ) (1) (4)   (  -1  ) ']));
//console.log(Solve(['(102)(103)(0)(105)  (107)(1)']));
//console.log(Solve(['(2) (2) (2) (2) (2)']));
//console.log(Solve(['0,0,1,3,0,2']));
//console.log(Solve(['0, 0, 0, 0, 0']));
//console.log(Solve(['0, 321, 542, 2123, 52341']));
console.log(Solve(['(4) (44) 0 (21) (332) (34)']));

// 4
// 10
// 3
// 4
// 1
