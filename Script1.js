
let a, b, answer, flag = true;
let o;
do {
    a = Math.round(Math.random() * 20 - 10);
    b = Math.round(Math.random() * 20 - 10);
    o = Math.ceil(4*Math.random());
    if (o==1) {
        rez = a + b;
        rez *= 10;
        Math.floor(rez);
        rez /= 10;
        //alert(`${a} ${b} ${rez}`);
        answer = prompt(`${a}+ ${b}=`);
        if (answer != rez) {
            alert('stop drinking');
            flag = false;
        }

    } else continue;

    if (o==2) {
        rez = a * b;
        rez *= 10;
        Math.floor(rez);
        rez /= 10;
        //alert(`${a} ${b} ${rez}`);
        answer = prompt(`${a}* ${b}=`);

        if (answer != rez) {
            alert('stop drinking');
            flag = false;

        }

    }

            if (o ==3) {
                rez = a - b;
                rez *= 10;
                Math.floor(rez);
                rez /= 10;
                //alert(`${a} ${b} ${rez}`);
                answer = prompt(`${a}- ${b}=`);
                if (answer != rez) {
                    alert('stop drinking');
                    flag = false;
                }

            }
    
                if (o ==4) {
                    rez = a / b;
                    rez *= 10;
                    Math.floor(rez);
                    rez /= 10;
                    //alert(`${a} ${b} ${rez}`);
                    answer = prompt(`${a}/ ${b}=`);
                    if (answer != rez) {
                        alert('stop drinking');
                        flag = false;
                    }

                }
          
} while (flag);


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