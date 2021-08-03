//js break 

var numbers = [10, 20, 30, 40, 50, 60, 75, 90, 1, 2, 5];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number > 50) {
        break;
    }
    console.log(number);
}

//  js continue 


for (i = 0; i < numbers.length; i++) {

    var number = numbers[i];
    if (number >= 50) {
        continue;
    }
    console.log(number);
}