/**
 * Created by Tedo on 22.7.2014 г..
 */
function findCardFrequency(value) {
    function reg(a, b) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === b) {
                return false;
            }

        }
        return true;
    }

    var arr = value.split(/[\W]+/);
    arr.pop();
    var key = 0;
    var total = 0;
    var str = {};
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        key = arr[i];
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        str[arr[i]] = count;
    }
    for ( key in str){
       total += str[key];
    }
    for ( key in str){
        var percentResult = (str[key] / total  * 100);
        console.log("%s ->%s%" , key , percentResult);
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');

findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');

findCardFrequency('10♣ 10♥');



