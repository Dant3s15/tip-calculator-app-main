let bill = document.getElementById('billfield');
let numberOfPeople = document.getElementById('numberofpeople');
var buttons = [0, 
document.getElementById('5'),
document.getElementById('10'),
document.getElementById('15'),
document.getElementById('25'),
document.getElementById('50'),
document.getElementById('custom')]

let tipamount = document.getElementById('tipamount');
let totalTip = document.getElementById('totalresult');

function returnResult(bill, numberOfPeople, percent, buttonsArr){
    var getClass = document.getElementsByClassName('activebtn');
    
    for(var i = 0; i < getClass.length; i++)
    {
        getClass[i].classList.remove('activebtn');
        
    }

    getBtn = document.getElementById(percent.id);
    getHover = document.getElementsByClassName('btn:hover');
    // alert(getHover);
    getBtn.classList.add('activebtn');
    bill = bill.value;
    numberOfPeople = numberOfPeople.value;

    if (buttonsArr == 6){
        percent = buttons[6].value;
    }
    else percent = buttons[buttonsArr].id;
   

    let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
    totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
}

for(let i = 1; i<=6;i++){
    buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i], i)})
}

// function updateInput(ish){
//     document.getElementById("numberofpeople").value = ish;
// }
// onchange=updateInput(this.value);
