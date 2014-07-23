/**
 * Created by Tedo on 20.7.2014 г..
 */
function displayProperties(value) {
    var arr = [];
    for(var key in value){

        arr.push(key);
    }
    arr.sort();
    for(var key in arr){
        console.log(arr[key]);
    }
}
displayProperties(document);
