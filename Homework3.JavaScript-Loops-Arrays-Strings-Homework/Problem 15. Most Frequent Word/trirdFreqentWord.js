/**
 * Created by Tedo on 22.7.2014 г..
 */
function findMostFreqWord(value) {
    var stringToLower = value.toLowerCase();
    var text = stringToLower.split(/[\W]+/);
    var str = {};
    for (var i = 0; i < text.length; i++) {
        str[text[i]] = (str[text[i]] || 0) + 1;
    }
    var vals = Object.keys(str).map(function (key) {
        return str[key]
    });
    var greeter = Math.max.apply(Math, vals);
    var result = Object.keys(str);
    result.sort();
    for (var k in result) {
        if (result[k].length > 0) {
            if (str[result[k]] == greeter) {
                console.log("%s -> %d times", result[k], greeter);
            }
        }

    }
}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to fSotUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
/**
 * Created by Tedo on 22.7.2014 г..
 */
