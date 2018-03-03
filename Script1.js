function randomNumber() {
    const min = -10;
    const max = 10;
    const res = getRandom(min, max - 1);
    return res == 0 ? max : res;
}

function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomOperator() {
    const min = 1;
    const max = 4;
    return getRandom(min, max);
}

function generateSign(firstnumber, secondnumber, sign) {
    switch (sign) {
        case 1: 
            return firstnumber + secondnumber;
        case 2: 
            return firstnumber * secondnumber;            
        case 3: 
            return firstnumber - secondnumber;
        case 4:
            return Math.round((firstnumber / secondnumber) * 10) / 10;        
      }    
}

while (true) {
    const operator = ['+', '*', '-', '/'];
    const firstnumber = randomNumber();
    const secondnumber = randomNumber();
    const sign = randomOperator();
    const result = generateSign(firstnumber, secondnumber, sign);
    const answer = (secondnumber < 0) ? prompt(`${firstnumber} ${operator[sign - 1]} (${secondnumber}) =`) : 
                                                        prompt(`${firstnumber} ${operator[sign - 1]} ${secondnumber} =`);
    if (answer != result) {
        alert('хватит пить');
        break;
    } else {
        alert('Еще по одной!');
    }
}
