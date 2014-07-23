/**
 * Created by Tedo on 23.7.2014 г..
 */
function Solve(arr1) {
    Array.prototype.clean = function (deleteValue) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };
    function reg(a, b) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === b) {
                return false;
            }

        }
        return true;
    }
    var string = arr1[0];
    var words = string.split(/[\W]+/);
    var result = words.clean('');
    var arr = [];
    var finalResult = '';
//    console.log(words);
//    console.log(result);
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result.length; j++) {
            for (var k = 0; k < result.length; k++) {
                var str = result[i] + result[j];

                if (str === result[k]) {
                    if (i !== j) {
                        var tempStr = words[i] + "|" + words[j] + "=" + words[k];
                        if (reg(arr, tempStr)) {
                            arr.push(tempStr);
                        }

                    }

                }

            }
        }
    }
//    arr.sort();
    if(arr.length == 0){
        finalResult = 'No';
    }
    else{

        for(var i = 0 ; i < arr.length ; i++){
            if (i < arr.length - 1) {
                finalResult += arr[i] + "\n";
            }
            else{
                finalResult += arr[i];
            }
        }

    }

    return finalResult;
}
console.log(Solve(['java..?|basics/*-+=javabasics']));
console.log(Solve(['Hi, Hi, Hihi']));
console.log(Solve(['Uni(lo,.ve=I love SoftUni (Soft)']));
console.log(Solve(['a a aa a']));
console.log(Solve(['x a ab b aba a hello+java a b aaaaa']));
console.log(Solve(['aa bb bbaa']));
console.log(Solve(['ho hoho']));


//java|basics=javabasics - YES

//No

//Soft|Uni=SoftUni - YES
//lo|ve=love       - YES

//a|a=aa

//a|b=ab
//ab|a=aba

//bb|aa=bbaa  - YES

//No - YES



