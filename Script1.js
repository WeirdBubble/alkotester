
let flag = true;
let firstnumber, secondnumber, answer, operator, result;
alert('Вас приветствует программа "Алкотестер"')
do {
    
    firstnumber = Math.round(Math.random() * 20 - 10);
    secondnumber = Math.round(Math.random() * 20 - 10);
    operator = Math.ceil(4 * Math.random());
    if (operator == 1) {
        result = firstnumber + secondnumber;
        result = roundUp();
        //result *= 10;
        //Math.floor(result);
        //operator /= 10;
        answer = prompt(`${firstnumber}+ ${secondnumber}=`);
        if (answer != result) {
            alert('stop drinking');
            flag = false;
        }

    } else continue;

    if (operator == 2) {
        result = firstnumber * secondnumber;
        result = roundUp();
        //result *= 10;
        //Math.floor(result);
        //result /= 10;
        //alert(`${a} ${b} ${rez}`);
        answer = prompt(`${firstnumber}* ${secondnumber}=`);

        if (answer != result) {
            alert('stop drinking');
            flag = false;

        }

    }

    if (operator == 3) {
        result = afirstnumber - b;
        result = roundUp();
                //result *= 10;
                //Math.floor(result);
                //result /= 10;
                ////alert(`${a} ${b} ${rez}`);
                answer = prompt(`${firstnumber}- ${secondnumber}=`);
                if (answer != result) {
                    alert('stop drinking');
                    flag = false;
                }

            }
    
    if (operator == 4) {
        result = firstnumber / secondnumber;
        result = roundUp();
                    //result *= 10;
                    //Math.floor(result);
                    //result /= 10;
                    //alert(`${a} ${b} ${rez}`);
                    answer = prompt(`${firstnumber}/ ${secondnumber}=`);
                    if (answer != result) {
                        alert('stop drinking');
                        flag = false;
                    }

                }
          
} while (flag);

 roundUp(result)
 {
     result *= 10;
     Math.floor(result);
     result /= 10;

}
/*
let response;
do {
    response = prompt('Enter number');
    if (!isNaN(response)) {
        response++;
        flag = 1;
    }
    else {flag=0}
   
} while (flag == 0);
alert(response);
*/