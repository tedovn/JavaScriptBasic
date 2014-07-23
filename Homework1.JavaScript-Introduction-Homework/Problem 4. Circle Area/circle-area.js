/**
 * Created by Tedo on 19.7.2014 г..
 */

function calcCircleArea(r){

        var circleArea = Math.PI * r * r;
    return circleArea;
}
document.write("r=7; area=" + calcCircleArea(7) + "<br/>");
document.write("r=1.5; area=" + calcCircleArea(1.5) + "<br/>");
document.write("r=20; area=" + calcCircleArea(20));
