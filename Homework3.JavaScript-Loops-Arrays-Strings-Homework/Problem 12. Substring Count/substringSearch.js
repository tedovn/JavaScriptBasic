/**
 * Created by Tedo on 20.7.2014 г..
 */
function countSubstringOccur(value){
        var keyword = value[0];
        var text = value[1].toLowerCase();

        // These is value that find the word in the text . 'g' means Global ,
        // When these RegExp find the word and stops , count it and start again to find it.
        var re = new RegExp(keyword , 'g');
        var count = text.match(re);
        return count.length;
}
console.log(countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else.' +
    'Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', 'But you were living in another world tryin\'to get your message through.']));