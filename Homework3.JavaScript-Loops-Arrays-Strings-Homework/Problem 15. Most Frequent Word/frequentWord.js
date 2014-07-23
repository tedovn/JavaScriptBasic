/**
 * Created by Tedo on 22.7.2014 г..
 */
function findMostFreqWord(value) {
    function reg(arr , word){
        for( var i = 0 ; i < arr.length ; i++){
            if(arr[i] === word){
                return false;
            }

        }
        return true;
    }
    var stringToLower = value.toLowerCase();
    var text = stringToLower.split(/[\W]+/);
    var str = [];
    var count = 1;
    var maxCount = 1;

    for (var i = 0; i < text.length; i++) {
        for (var j = i + 1; j < text.length; j++) {
            if (text[i] === text[j]){
                count++;
                if(maxCount <= count){
                    maxCount = count;
                    if(reg(str, text[i]) == true ){
                        str.push(text[i]);
                    }

                }
            }
        }

        count = 1;
    }

    str.sort();
    for ( var i = 0 ; i < str.length ; i ++ ){
        console.log("%s -> %d times" , str[i] , maxCount);
    }


}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to fSotUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');


