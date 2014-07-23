/**
 * Created by Tedo on 22.7.2014 г..
 */
function replaceSpaces(value) {
            var text = value.split(/[\s]+/ );
            var result = "";
            for (var i = 0 ; i < text.length ; i ++ ){
                    result += text[i];
            }
    return result;

}
console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));