/**
 * Created by Tedo on 23.7.2014 г..
 */
function Solve(arr) {
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

    var words = arr.split(/[\W]+/);
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
    if(arr.length == 0){
        finalResult = 'No';
    }
    else{

        for(var i = 0 ; i < arr.length ; i++){
            finalResult += arr[i] + "\n";
        }

    }
    return finalResult;
}
//console.log(Solve('java..?|basics/*-+=javabasics'));
//Solve('Hi, Hi, Hihi');
//Solve('Uni(lo,.ve=I love SoftUni (Soft)');
//Solve('a a aa a');
//Solve('x a ab b aba a hello+java a b aaaaa');
//Solve('aa bb bbaa');
//Solve('ho hoho');


//java|basics=javabasics - YES

//No

//Soft|Uni=SoftUni - YES
//lo|ve=love       - YES

//a|a=aa

//a|b=ab
//ab|a=aba

//bb|aa=bbaa  - YES

//No - YES



