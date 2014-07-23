/**
 * Created by Tedo on 19.7.2014 г..
 */
function treeHouseCompare(a,b)  {
    var squareArea = a * a;
    var heightTriangle = (a * 2) / 3;
    var triangleArea = (a * heightTriangle) / 2;
    var houseArea = squareArea + triangleArea;
    var rectangleArea = b * (b/ 3);
    var radiusCircle = b * 2 / 3;
    var circleArea = Math.PI * radiusCircle * radiusCircle;
    var treeArea = rectangleArea + circleArea;
    if(houseArea > treeArea){
        return ("house/" + houseArea.toFixed(2));
    }
    else{
        return ("tree/" + treeArea.toFixed(2));
    }
}
console.log(treeHouseCompare(3,2));
console.log(treeHouseCompare(3,3));
console.log(treeHouseCompare(4,5));