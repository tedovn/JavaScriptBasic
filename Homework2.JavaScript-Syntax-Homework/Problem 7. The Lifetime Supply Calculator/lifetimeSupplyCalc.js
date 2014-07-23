/**
 * Created by Tedo on 19.7.2014 г..
 */
function calcSupply(age,maxAge,food) {
        var daysEatFood = (maxAge - age) * 365;
        var sumFood = daysEatFood * food;
        var foodType = "";
        if (food == 0.5){
            foodType = "chocolate";
        }
        else if(food == 2){
            foodType = "fruits";
        }
        else if (food == 1.1){
            foodType = "nuts"
        }
        return (sumFood + "kg of " + foodType + " would be enough until I am " + maxAge + " years old.");
}
console.log(calcSupply(38,118,0.5));
console.log(calcSupply(20,87,2));
console.log(calcSupply(16,102,1.1));