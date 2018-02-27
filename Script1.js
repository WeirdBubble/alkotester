let flag = true;
let firstnumber, secondnumber, answer, operator, result;
do {
    
    firstnumber = Math.round(Math.random() * 20 - 10);
    secondnumber = Math.round(Math.random() * 20 - 10);
    operator = Math.ceil(4 * Math.random());
    switch (operator) {
        case 1: {
            result = firstnumber + secondnumber;
            roundUp(result);
            answer = prompt(`${firstnumber}+ ${secondnumber}=`);
            check(answer, result);
            break;
        }

        case 2: {
            result = firstnumber * secondnumber;
            roundUp(result);
            answer = prompt(`${firstnumber}* ${secondnumber}=`);
            check(answer, result);
            break;
        }

        case 3: {
            result = firstnumber - secondnumber;
            roundUp(result);
            answer = prompt(`${firstnumber}- ${secondnumber}=`);
            check(answer, result);
            break;
        }

        case 4: {
            result = firstnumber / secondnumber;
            roundUp(result);
            answer = prompt(`${firstnumber}/ ${secondnumber}=`);
            check(answer, result);
            break;
        }
    }
          
} while (flag);

function roundUp(result)
 {
     result *= 10;
     Math.floor(result);
     result /= 10;
     return result;
}

function check(answer, result)
{
    if (answer != result) {
        alert('хватит пить');
        flag = false;
    }
}
