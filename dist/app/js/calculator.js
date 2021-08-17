
var buttons = [0, 
document.getElementById('5'),
document.getElementById('10'),
document.getElementById('15'),
document.getElementById('25'),
document.getElementById('50'),
document.getElementById('custom'),
document.getElementById('billfield'),
document.getElementById('numberofpeople')];

let noZeroPeople = document.getElementById('nozeropeople');
let noZeroBill = document.getElementById('nozerobill');
let bill = document.getElementById('billfield');
let numberOfPeople = document.getElementById('numberofpeople');
let tipamount = document.getElementById('tipamount');
let totalTip = document.getElementById('totalresult');
let percent = 0; 
var selectedBtn = 0;

function returnResult(bill, numberOfPeople, percent, buttonsArr){
    var getClass = document.getElementsByClassName('activebtn');
    
   if (buttonsArr <=6){
        for(var i = 0; i < getClass.length; i++)
        {
            getClass[i].classList.remove('activebtn');
            
        }
   }


    getBtn = document.getElementById(percent.id);
    getHover = document.getElementsByClassName('btn:hover');

    getBtn.classList.add('activebtn');
    bill = bill.value;
    numberOfPeople = numberOfPeople.value;

    function CheckIfZero(){
    
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

        if (buttons[7].value != ""){
            if(buttons[7].value != 0){
                buttons[7].classList.remove('redoutline');
                noZeroBill.style.visibility='hidden';
            }
        }//unset red

        if (buttons[8].value != ""){
            if(buttons[8].value != 0){
                buttons[8].classList.remove('redoutline');
                noZeroPeople.style.visibility='hidden';
            }

          
        }//unset red
    
        // if ((buttonsArr >= 7)&&(buttons[buttonsArr].value != "")|| (buttonsArr >= 7)&&(buttons[buttonsArr].value != 0)){
        //     if(buttonsArr==8)noZeroPeople.style.visibility='hidden';
        //     if(buttonsArr==7)noZeroBill.style.visibility='hidden';
        //     buttons[buttonsArr].classList.remove('redoutline');
            
        // }//remove red i not empty or 0
    }
    if ((buttonsArr == 6)&&(buttons[6].value != "")){
        CheckIfZero();
        selectedBtn = percent = buttons[6].value;
        
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        
    }//value of custom field

    if (buttonsArr<=5){
        selectedBtn = percent = buttons[buttonsArr].id;
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * percent / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
       
    }//buttons value

    if (buttonsArr >= 7){
        percent = buttons[selectedBtn];
        let tipResult = tipamount.innerHTML = Math.round(((bill / numberOfPeople) * selectedBtn / 100) * 100) / 100;
        totaltip = totalTip.innerHTML = Math.round(((bill / numberOfPeople) + tipResult) * 100) / 100;
        if (selectedBtn == 0){
            tipResult = tipamount.innerHTML = "0.00";
            totaltip = totalTip.innerHTML = "0.00";
        }
    }
    if (buttonsArr == 7){
        // buttons[buttonsArr].classList.add('redoutline');
        // tipResult = tipamount.innerHTML = "0.00";
        // totaltip = totalTip.innerHTML = "0.00";
        // if(buttonsArr==8)noZeroPeople.style.visibility='visible';
        // if(buttonsArr==7)noZeroBill.style.visibility='visible';
        CheckIfZero();
        
    }//set red
    if (buttonsArr == 8){
        // buttons[buttonsArr].classList.add('redoutline');
        // tipResult = tipamount.innerHTML = "0.00";
        // totaltip = totalTip.innerHTML = "0.00";
        // if(buttonsArr==8)noZeroPeople.style.visibility='visible';
        // if(buttonsArr==7)noZeroBill.style.visibility='visible';
        CheckIfZero();
        
    }//set red

    // if ((buttonsArr == 7)&&(buttons[buttonsArr].value != "")|| (buttonsArr >= 7)&&(buttons[buttonsArr].value != 0)){
    //     // if(buttonsArr==8)noZeroPeople.style.visibility='hidden';
    //     // if(buttonsArr==7)noZeroBill.style.visibility='hidden';
    //     // buttons[buttonsArr].classList.remove('redoutline');
        
    // }//remove red i not empty or 0

    else if ((buttonsArr == 6)&&(buttons[6].value == "")){
        selectedBtn = 0;
        tipResult = tipamount.innerHTML = "0.00";
        totaltip = totalTip.innerHTML = "0.00";
    }//set to default if custom is empty



}

for(let i = 1; i<=8;i++){
    buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i], i)});
    if (i>=6) buttons[i].addEventListener('input',function(){returnResult(bill, numberOfPeople, buttons[i], i)});

}
// for(let i = 1; i<=6;i++){
//     buttons[i].addEventListener('click',function(){returnResult(bill, numberOfPeople, buttons[i], i)})
// }

// function updateInput(ish){
//     document.getElementById("numberofpeople").value = ish;
// }
//buttons[6].addEventListener('input', function(){returnResult(bill, numberOfPeople, buttons[6], 6)})
