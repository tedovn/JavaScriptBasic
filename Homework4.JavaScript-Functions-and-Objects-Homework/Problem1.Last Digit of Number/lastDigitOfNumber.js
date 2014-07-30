    /**
 * Created by Pavlik on 26.7.2014 г..
 */
function lastDigitAsText(number) {
        if (number < 0){
            number = number * -1;
        }
        var lastNumber = number % 10;
        switch (lastNumber){
            case 0 :
                lastNumber = 'zero';
                break;
            case 1 :
                lastNumber = 'one';
                break;
            case 2 :
                lastNumber = 'two';
                break;
            case 3 :
                lastNumber = 'three';
                break;
            case 4 :
                lastNumber = 'four';
                break;
            case 5 :
                lastNumber = 'five';
                break;
            case 6 :
                lastNumber = 'six';
                break;
            case 7 :
                lastNumber = 'seven';
                break;
            case 8 :
                lastNumber = 'eight';
                break;
            case 9 :
                lastNumber = 'nine';
                break;
            default :
                lastNumber = 'incorrect!';
                break;

        }
        return lastNumber;

}
console.log(lastDigitAsText(['6']));
console.log(lastDigitAsText(['-55']));
console.log(lastDigitAsText(['133']));
console.log(lastDigitAsText(['14567']));
