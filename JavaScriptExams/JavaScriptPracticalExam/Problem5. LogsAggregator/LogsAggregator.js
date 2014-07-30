function Solve(input){
    var n = parseInt(input[0]);
    var assArray = {};
    var output = [];
    for (var i = 0; i < n ; i++) {
        var arrSplit = input[i + 1].split(' ');
        var IPaddress = arrSplit[0];
        var name = arrSplit [1];
        var duration = parseInt(arrSplit[2]);
        if (!(name in assArray)){
            assArray[name] = {};
            assArray[name][IPaddress] = duration;

        }
        else if (assArray[name] && !(IPaddress in assArray[name])){
            assArray[name][IPaddress] = duration;
        }
        else{
            assArray[name][IPaddress] +=duration;
        }
    }

//    console.log(assArray);
    var min = 0;

    for (var key in assArray){
            var ip = [];
        for (var minutes in assArray[key]){
            min += assArray[key][minutes];
            ip.push(minutes);
        }
        ip.sort();
        var string ='' + key + ': ' + min + ' [';
        for(var i = 0; i < ip.length; i++) {
            if (i < ip.length - 1) {
                string += ip[i] + ', ';
            } else {
                string += ip[i] + ']';
            }
        }
        min = 0;
      output.push(string);

    }
     output.sort();

    console.log(output.join('\n'))



}
Solve(['7' ,
    "192.168.0.11 peter 33",                        // alex: 62 [10.10.17.33, 212.50.118.81]
                                                    // peter: 303 [10.10.17.34, 10.10.17.35, 192.168.0.11]
    "10.10.17.33 alex 12",
    "10.10.17.35 peter 30",
    "10.10.17.34 peter 120",
    "10.10.17.34 peter 120",
    "212.50.118.81 alex 46",
    "212.50.118.81 alex 4"
    ]);




