//const declarations---------------------------------------
const buttons = [0, 
document.getElementById('5'),
document.getElementById('10'),
document.getElementById('15'),
document.getElementById('25'),
document.getElementById('50'),
document.getElementById('custom'),
document.getElementById('billfield'),
document.getElementById('numberofpeople'),
document.getElementById('reset')];
const noZeroPeople = document.getElementById('nozeropeople');
const noZeroBill = document.getElementById('nozerobill');
const bill = document.getElementById('billfield');
const numberOfPeople = document.getElementById('numberofpeople');
const tipamount = document.getElementById('tipamount');
const totalTip = document.getElementById('totalresult');
//variable declarations------------------------------------
let selectedBtn = 0;
let firstValue = 0;
//functions------------------------------------------------
function CheckIfZero(value){


    if ((buttons[7].value == "")||(buttons[7].value <= 0)){
        if(buttons[7].value < 0) buttons[7].value = "";//bill can't be less than 0
        buttons[7].classList.add('redoutline');
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
        noZeroBill.style.visibility='visible';
    }

    if ((buttons[8].value == "")||(buttons[8].value <= 0)){
        buttons[8].classList.add('redoutline');
        buttons[8].value = "";//number of people can't start with 0
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
        noZeroPeople.style.visibility='visible';
    }
    if (!((buttons[7].value == "") || (buttons[7].value == 0)) || value == "reset") {
        buttons[7].classList.remove('redoutline');
        noZeroBill.style.visibility='hidden';
            
    }

    if (!((buttons[8].value == "") || (buttons[8].value == 0)) || value == "reset") {

        buttons[8].classList.remove('redoutline');
        noZeroPeople.style.visibility='hidden';
    }
}//if field values are 0 or "" add red outline after selecting percentage

function returnResult(bill, numberOfPeople, percent, buttonsArr){
    bill = bill.value;
    numberOfPeople = numberOfPeople.value;

    
    if (buttonsArr <=6){
        Array.from(document.querySelectorAll('.activebtn')).forEach(function(el) { 
            el.classList.remove('activebtn');
        });
    }

    if(buttonsArr!=0){
      getBtn = document.getElementById(percent.id); 
      getBtn.classList.add('activebtn');
      
    } 
    if(!(buttons[buttonsArr].value==0) && !(buttons[buttonsArr].value=="")){
        buttons[9].style.opacity = "1";
        buttons[9].style.cursor = "pointer";
    } //hightlight reset button when values not "" or zero

    if ((buttonsArr == 6)&&(buttons[6].value != "")){
        buttons[6].style.boxShadow = "0 0 0 2px var(--strongCyan)";
        if (buttons[6].value<=0){
            if(buttons[6].value < 0) buttons[6].value = 0;//bill can't be less than 0
            buttons[6].style.boxShadow = "0 0 0 2px red";
        }
        selectedBtn = percent = buttons[6].value;
        if (buttons[6].value == "") selectedBtn=0;
        
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        CheckIfZero(buttonsArr);
    }//value of custom field

    if (buttonsArr<=5){  
        buttons[6].style.removeProperty('box-shadow');
        selectedBtn = percent = buttons[buttonsArr].id;
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        CheckIfZero(buttonsArr);
    }//buttons value

   
    if (buttonsArr <=6){
        firstValue = 1;
    }//helper variable to not alert about zero in fields untill percent is chosen
   
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
       }
       if (firstValue==1) CheckIfZero(percent); 
    }
    else if (((buttonsArr == 6)&&(buttons[6].value == ""))||((buttonsArr == 6)&&(buttons[6].value <= 0))){
        selectedBtn = 0;
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
    }//set to default if custom is empty

}

function ResetFields(){
    buttons[6].style.removeProperty('box-shadow');
    Array.from(document.querySelectorAll('.activebtn')).forEach(function(el) { 
        el.classList.remove('activebtn');
    });
    tipResult = tipamount.innerHTML = "0.00";
    totaltip = totalTip.innerHTML = "0.00";
    
    for (let i=6; i<=8; i++){
        buttons[i].value = "";
    }
    firstValue=0;
    selectedBtn = 0;
    CheckIfZero("reset");
    buttons[9].style.opacity = "0.2";
    buttons[9].style.removeProperty('cursor')
}
//event listeners------------------------------------------
for(let i = 1; i<=8;i++){
    buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i], i)});
    if (i>=6) buttons[i].addEventListener('input',function(){returnResult(bill, numberOfPeople, buttons[i], i)});
}
buttons[9].addEventListener('click', function(){ResetFields()});
