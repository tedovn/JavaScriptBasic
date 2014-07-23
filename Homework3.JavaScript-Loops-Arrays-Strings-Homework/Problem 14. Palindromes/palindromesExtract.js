/**
 * Created by Tedo on 22.7.2014 г..
 */
function findPalindromes(value) {
    function reverse(word) {
        var reverse = word.split("").reverse().join("");
        return reverse;
    }

    var text = value.split(/[\W]+/);
    var result = " ";
    for (var i = 0; i < text.length - 1; i++) {
        text[i] = text[i].toLowerCase();
        var temp = reverse(text[i]);
        if (text[i] === temp) {
            if (i < text.length - 2) {
                result += text[i] + ",";
            }
            else {
                result += text[i];
            }

        }

    }
    return result;


}

console.log(findPalindromes('There is a man, his name was Bob.'));