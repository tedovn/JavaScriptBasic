
function Solve(arr1) {
    function longestWord(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        str.forEach(function (str) {
            if (longest < str.length) {
                longest = str.length;
                word = str;
            }
        });
        return word;
    }
    function moveLetter(letter) {
        var n = 0;
        switch (letter) {
            case 'a':
                n = 1;
                break;
            case 'A':
                n = 1;
                break;
            case 'b':
                n = 2;
                break;
            case 'B':
                n = 2;
                break;
            case 'c':
                n = 3;
                break;
            case 'C':
                n = 3;
                break;
            case 'd':
                n = 4;
                break;
            case 'D':
                n = 4;
                break;
            case 'e':
                n = 5;
                break;
            case 'E':
                n = 5;
                break;
            case 'f':
                n = 6;
                break;
            case 'F':
                n = 6;
                break;
            case 'g':
                n = 7;
                break;
            case 'G':
                n = 7;
                break;
            case 'h':
                n = 8;
                break;
            case 'H':
                n = 8;
                break;
            case 'i':
                n = 9;
                break;
            case 'I':
                n = 9;
                break;
            case 'j':
                n = 10;
                break;
            case 'J':
                n = 10;
                break;
            case 'k':
                n = 11;
                break;
            case 'K':
                n = 11;
                break;
            case 'l':
                n = 12;
                break;
            case 'L':
                n = 12;
                break;
            case 'm':
                n = 13;
                break;
            case 'M':
                n = 13;
                break;
            case 'n':
                n = 14;
                break;
            case 'N':
                n = 14;
                break;
            case 'o':
                n = 15;
                break;
            case 'O':
                n = 15;
                break;
            case 'p':
                n = 16;
                break;
            case 'P':
                n = 16;
                break;
            case 'q':
                n = 17;
                break;
            case 'Q':
                n = 17;
                break;
            case 'r':
                n = 18;
                break;
            case 'R':
                n = 18;
                break;
            case 's':
                n = 19;
                break;
            case 'S':
                n = 19;
                break;
            case 't':
                n = 20;
                break;
            case 'T':
                n = 20;
                break;
            case 'u':
                n = 21;
                break;
            case 'U':
                n = 21;
                break;
            case 'v':
                n = 22;
                break;
            case 'V':
                n = 22;
                break;
            case 'w':
                n = 23;
                break;
            case 'W':
                n = 23;
                break;
            case 'x':
                n = 24;
                break;
            case 'X':
                n = 24;
                break;
            case 'y':
                n = 25;
                break;
            case 'Y':
                n = 25;
                break;
            case 'z':
                n = 26;
                break;
            case 'Z':
                n = 26;
                break;

            default :
                break;
        }
        return n;
    }

    var str = arr1[0];
    var arr = str.split(/[^a-zA-Z]/g);
    var lastLetters = '';
    var longWord = longestWord(arr1[0]);
    var count = longWord.length;

    while (count > 0) {
        for (var i = 0; i < arr.length; i++) {
            var word = arr[i];
            for (var j = word.length; j >= word.length - 1; j--) {
                if (word[j] != undefined) {
                    lastLetters += word[j];
                    break;
                }

            }
            word = word.slice(0, -1);
            arr[i] = word;
        }
        count--;
    }
    var result = lastLetters;
    for ( var i = 0 ; i < result.length ; i++){
        var takeLetter = result[i];
//        var n = moveLetter(takeLetter);
        var n = takeLetter.toLowerCase().charCodeAt(0) - 96;
        n = n + i;
        while ( n >= result.length){
            n -= result.length;

        }
        result = result.slice( 0 , i) + result.slice(i + 1);

            result = result.substring(0 , n  ) + takeLetter + result.substring(n );

    }
    return result;
}
console.log(Solve(['Fun exam right']));
//console.log(Solve(['Telerik Academy']));
//console.log(Solve(['Hi exam']));





