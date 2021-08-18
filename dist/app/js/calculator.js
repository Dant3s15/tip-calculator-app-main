var buttons = [0, 
document.getElementById('5'),
document.getElementById('10'),
document.getElementById('15'),
document.getElementById('25'),
document.getElementById('50'),
document.getElementById('custom'),
document.getElementById('billfield'),
document.getElementById('numberofpeople'),
document.getElementById('reset')];

let noZeroPeople = document.getElementById('nozeropeople');
let noZeroBill = document.getElementById('nozerobill');
let bill = document.getElementById('billfield');
let numberOfPeople = document.getElementById('numberofpeople');
let tipamount = document.getElementById('tipamount');
let totalTip = document.getElementById('totalresult');
let percent = 0; 
var selectedBtn = 0;
var getClass = document.getElementsByClassName('activebtn');
var firstValue = 0;

function CheckIfZero(value){
    
    if ((buttons[7].value == "")||(buttons[7].value == 0)){
        buttons[7].classList.add('redoutline');
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
        noZeroBill.style.visibility='visible';
    }//set red

    if ((buttons[8].value == "")||(buttons[8].value == 0)){
        buttons[8].classList.add('redoutline');
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
        noZeroPeople.style.visibility='visible';
    }//set red

    if (!((buttons[7].value == "") || (buttons[7].value == 0)) || value == "reset") {
            buttons[7].classList.remove('redoutline');
            noZeroBill.style.visibility='hidden';

    }//unset red

    if (!((buttons[8].value == "") || (buttons[8].value == 0)) || value == "reset") {
            buttons[8].classList.remove('redoutline');
            noZeroPeople.style.visibility='hidden';
    }//unset red
}

function returnResult(bill, numberOfPeople, percent, buttonsArr){
   if (buttonsArr <=6){
        for(var i = 0; i < getClass.length; i++)
        {
            getClass[i].classList.remove('activebtn');
            
        }
   }

   if(buttonsArr!=0){
      getBtn = document.getElementById(percent.id); 
      getBtn.classList.add('activebtn');
   }

    getHover = document.getElementsByClassName('btn:hover');
    bill = bill.value;
    numberOfPeople = numberOfPeople.value;

    if ((buttonsArr == 6)&&(buttons[6].value != "")){
        buttons[6].style.outline="solid var(--strongCyan)";
        if (buttons[6].value==0){
            buttons[6].style.outline="solid red";
        }
        selectedBtn = percent = buttons[6].value;
        
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        CheckIfZero(buttonsArr);
    }//value of custom field

    if (buttonsArr<=5){  
        buttons[6].style.outline="none";
        selectedBtn = percent = buttons[buttonsArr].id;
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        CheckIfZero(buttonsArr);
    }//buttons value

    if (buttonsArr >= 7){
        percent = buttons[selectedBtn];
        if (selectedBtn == 0 || percent==0){
            tipResult = tipamount.innerHTML = "0.00";
            totaltip = totalTip.innerHTML = "0.00";
        }
       if ((firstValue==1 && buttonsArr>=7) && percent!=0){
        tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * selectedBtn / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
         CheckIfZero(buttonsArr);  
       //  alert(percent);
        
       }
    }
    if (buttonsArr == 8){
        firstValue = 1;
    }
    // if (buttonsArr == 7){

    // }

    // if (buttonsArr == 8){
    //     if (firstValue==1)
    //     CheckIfZero(buttonsArr);  
    //     firstValue=1;
    // }

    else if (((buttonsArr == 6)&&(buttons[6].value == ""))||((buttonsArr == 6)&&(buttons[6].value == 0))){
        selectedBtn = 0;
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
    }//set to default if custom is empty
}

function ResetFields(){
    buttons[6].style.outline="none";
        for(var i = 0; i < getClass.length; i++)
        {
            getClass[i].classList.remove('activebtn');
            
        }
    tipResult = tipamount.innerHTML = "0.00";
    totaltip = totalTip.innerHTML = "0.00";
    
    for (let i=6; i<=8; i++){
        buttons[i].value = "";
    }
    firstValue=0;
    selectedBtn = 0;
    //percent=0;
    CheckIfZero("reset");
}

for(let i = 1; i<=8;i++){
    buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i], i)});
    if (i>=6) buttons[i].addEventListener('input',function(){returnResult(bill, numberOfPeople, buttons[i], i)});

}
buttons[9].addEventListener('click', function(){ResetFields()});
