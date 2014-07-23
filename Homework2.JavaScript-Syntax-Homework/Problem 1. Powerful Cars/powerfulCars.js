/**
 * Created by Tedo on 19.7.2014 г..
 */
function convertKWtoHP(value){
        return(value / 0.745699872).toFixed(2);
}
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));