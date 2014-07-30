/**
 * Created by Tedo on 28.7.2014 г..
 */
function Solve(input) {
    var arr = input;
    var star = "*";
    var firstLine = '';
    var secondLine = '';
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        firstLine = arr[i];
        if (arr[i + 1] != undefined) {
            secondLine = arr[i + 1];
        }
        var temp = '';
        for (var j = 0; j < arr[i].length; j++) {

            if ((firstLine[j] == secondLine[j]) && (firstLine[j] == secondLine[j + 1]) && (firstLine[j] == secondLine[j - 1])) {
                temp += star;
                firstLine[j] = star;


            }
            else {
                temp += firstLine[j];
            }


        }
        arr1.push(temp);

    }
//    console.log(arr1);

    var arr2 = [];
    arr2.push(arr1[0]);

    for (var i = 0; i < arr1.length; i++) {
        firstLine = arr1[i].split("");
        if (arr1[i + 1] != undefined) {
            secondLine = arr1[i + 1].split("");
        }


        for (var j = 0; j < arr1[i].length; j++) {

            if (firstLine[j] == star) {
              secondLine[j] = star;
              secondLine[j-1] = star;
              secondLine[j+1] = star;

            }


        }
    if( i < arr1.length - 1 ){
        var end = secondLine.join("");
        arr2.push(end);
    }


    }
//        console.log(arr2);
    console.log(arr2.join("\n"));
}
Solve(['abcdexgh' , 'bbbdxxxh' , 'abcxxxxx']);
Solve(['aa' , 'aaa' , 'aaaa' , 'aaaaa']);
Solve(['ax' , 'xxx' , 'b','bbb','bbbb']);