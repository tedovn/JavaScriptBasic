/**
 * Created by Tedo on 19.7.2014 г..
 */
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
if (minutes < 10){
    minutes = "0" + minutes;
}
console.log(hours + ":" + minutes);