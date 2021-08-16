let bill = document.getElementById('billfield');
let numberOfPeople = document.getElementById('numberofpeople');

// let btn1 = document.getElementById('10');
// let btn2 = document.getElementById('15');
// let btn3 = document.getElementById('25');
// let btn4 = document.getElementById('50');
var buttons = [0, 
document.getElementById('5'),
document.getElementById('10'),
document.getElementById('15'),
document.getElementById('25'),
document.getElementById('50')]

let tipamount = document.getElementById('tipamount');
let totalTip = document.getElementById('totalresult');



function returnResult(bill, numberOfPeople, percent, buttonsArr){
    
    bill = bill.value;
    numberOfPeople = numberOfPeople.value;
    percent = buttons[buttonsArr].id;
    tipamount.innerHTML = (bill/numberOfPeople)*percent/100;
    totalTip.innerHTML = ((bill/numberOfPeople)*percent/100)*numberOfPeople;//WIP - probably wrong
}

for(let i = 1; i<=5;i++){
    buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i].id, i)})

}

