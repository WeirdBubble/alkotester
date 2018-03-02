const limit1 = 20, limit2 = 10, operatorAmount = 4, operator=['+', '*','-','/'];

function randomNumber()
{
    const res =Math.round(Math.random() * limit1 - limit2);
    return res? res:10;
}

function randomOperator()
{
    return Math.ceil(operatorAmount * Math.random());
}

function generateSign(firstnumber, secondnumber, sign)
{
    switch (sign) {
        case 1: 
            return firstnumber + secondnumber;
            
        case 2: 
            return firstnumber * secondnumber;
            
        case 3: 
            return firstnumber - secondnumber;
           
        case 4:
            return Math.round((firstnumber / secondnumber)*10)/10;        
      }    
}


while(true) {
    
    const firstnumber = randomNumber();
    const secondnumber = randomNumber();
    const sign = randomOperator();
    const result = generateSign(firstnumber,secondnumber,sign);
    const answer = prompt(`${firstnumber} ${operator[sign - 1]} ${secondnumber} =`);
    if (answer!=result)
    {
        alert('На сегодня хватит');
        break;
    } else
        {
            alert('Еще по одной!');
        }
    
}
