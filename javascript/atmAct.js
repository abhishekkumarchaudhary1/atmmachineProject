let redCard={
    name: 'Abhishek',
    pin: 1757,
    accBalance: 50000,
    minSt: []
}
let blueCard={
    name: 'Manish',
    pin: 8810,
    accBalance: 500000,
    minSt: []
}

let cardInserted=false;

let wcClicked=false;
let dcClicked=false;
let msClicked=false;

const rcb=document.getElementById('rcb');
const bcb=document.getElementById('bcb');

const cb=document.getElementById('cb');
const wc=document.getElementById('wc');
const dc=document.getElementById('dc');
const ms=document.getElementById('ms');

const pe=document.getElementById('pe');
const withEnter=document.getElementById('withEnter');
const depEnter=document.getElementById('depEnter');

const homeBtn=document.getElementById('homeBtn');
const remCard=document.getElementById('remCard');

rcb.addEventListener('click',()=>{
    if(cardInserted==false){
        cardInserted=true;
        document.getElementById('mainBody').style.visibility='visible';
        document.getElementById('rcb').style.backgroundColor='red';
        document.getElementById('rcb').innerHTML='inserted';
        document.getElementById('rcb').style.color='white';

    }
    
});
bcb.addEventListener('click',()=>{
    if(cardInserted==false){
        cardInserted=true;
        document.getElementById('mainBody').style.visibility='visible';
        document.getElementById('bcb').style.backgroundColor='blue';
        document.getElementById('bcb').innerHTML='inserted';
        document.getElementById('bcb').style.color='white';
    }
    

});

cb.addEventListener('click',()=>{
    document.getElementById('mainBody').style.display='none';
    document.getElementById('pinBody').style.display='flex';
});

wc.addEventListener('click',()=>{
    if(redCard.accBalance<500 || blueCard.accBalance<500){
        alert('Your balance is below ₹500. Please Deposit first');
    }
    else{
        wcClicked=true;
        document.getElementById('mainBody').style.display='none';
        document.getElementById('pinBody').style.display='flex';
    }

});

dc.addEventListener('click',()=>{
    dcClicked=true;
    document.getElementById('mainBody').style.display='none';
    document.getElementById('pinBody').style.display='flex';
});

ms.addEventListener('click',()=>{
    msClicked=true;
    document.getElementById('mainBody').style.display='none';
    document.getElementById('pinBody').style.display='flex';
});

//Pin Entred Section
pe.addEventListener('click',()=>{
    if(document.getElementById('pn').value==redCard.pin && document.getElementById('rcb').innerHTML=='inserted'){
        pinEntred(redCard);
        
    }
    else if(document.getElementById('pn').value==blueCard.pin && document.getElementById('bcb').innerHTML=='inserted'){
        
        pinEntred(blueCard);
    }
    else{
        alert('Wrong Pin Entered');
    }
});

function pinEntred(Card){
    document.getElementById('pinBody').style.display='none';
    if(wcClicked==true){
        document.getElementById('withBody').style.display='flex';
        wcClicked=false;
    }
    else if(dcClicked==true){
        document.getElementById('depBody').style.display='flex';
        dcClicked=false;
    }
    else if(msClicked==true){
        document.getElementById('disHeading').innerHTML=`${Card.minSt}`;
        document.getElementById('balance').innerHTML=`Current Balance: ₹ ${Card.accBalance}`;
        document.getElementById('disScreen').style.display='flex';
        document.getElementById('pn').value='';
        msClicked=false;

    }

    //Balance Check:-
    else{
        document.getElementById('disHeading').innerHTML=`Hello Mr. ${Card.name}, your balance is:`;
        document.getElementById('balance').innerHTML=`₹ ${Card.accBalance}`;
        document.getElementById('disScreen').style.display='flex';
        document.getElementById('pn').value='';
    }
    //_*_
}
//_*_

//Withdraw Section:-
withEnter.addEventListener('click',()=>{
    if(document.getElementById('pn').value==redCard.pin && document.getElementById('rcb').innerHTML=='inserted'){
        
        withAmountEntered(redCard);
    }
    else{
        
        withAmountEntered(blueCard);
    }
    
});

function withAmountEntered(Card){
    if(document.getElementById('withAmount').value<=0 || (document.getElementById('withAmount').value)%500!==0){
        alert('Please Enter a valid amount in the multiple of 500');
    }
    else if(document.getElementById('withAmount').value>Card.accBalance){
        alert('Insufficient Balance');
    }
    else{
        Card.accBalance-=parseFloat(document.getElementById('withAmount').value);
        Card.minSt.push(`<br>${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}
        ₹${document.getElementById('withAmount').value} debited; rem bal: ${Card.accBalance}`);
        if(Card.minSt.length>5){
            Card.minSt.splice(0,1);
        }
        document.getElementById('withBody').style.display='none';
        document.getElementById('disHeading').innerHTML=`₹ ${document.getElementById('withAmount').value} withdrawn, your balance is:`;
        document.getElementById('balance').innerHTML=`₹ ${Card.accBalance}`;
        document.getElementById('disScreen').style.display='flex';
        document.getElementById('pn').value='';
    }
}
//_*_

//Deposit Section:-
depEnter.addEventListener('click',()=>{
    if(document.getElementById('pn').value==redCard.pin && document.getElementById('rcb').innerHTML=='inserted'){
        
        depAmountEntered(redCard);
    }
    else{
        
        depAmountEntered(blueCard);
    }
    
});

function depAmountEntered(Card){
    if(document.getElementById('depAmount').value<=0 || (document.getElementById('depAmount').value)%500!==0){
        alert('Please Enter a valid amount in the multiple of 500');
    }
    else{
        Card.accBalance+=parseFloat(document.getElementById('depAmount').value);
        Card.minSt.push(`<br>${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}.${new Date().getMilliseconds()}
        ₹${document.getElementById('depAmount').value} credited; rem bal: ${Card.accBalance}`);
        if(Card.minSt.length>5){
            Card.minSt.splice(0,1);
        }
        document.getElementById('depBody').style.display='none';
        document.getElementById('disHeading').innerHTML=`₹ ${document.getElementById('depAmount').value} deposited, your balance is:`;
        document.getElementById('balance').innerHTML=`₹ ${Card.accBalance}`;
        document.getElementById('disScreen').style.display='flex';
        document.getElementById('pn').value='';
    }

}
//_*_

homeBtn.addEventListener('click',()=>{
    document.getElementById('disScreen').style.display='none';
    document.getElementById('mainBody').style.display='flex';
});

remCard.addEventListener('click',()=>{
    if(document.getElementById('rcb').innerHTML=='inserted'){
        
        document.getElementById('rcb').innerHTML='insert';
        document.getElementById('rcb').style.backgroundColor='white';
        document.getElementById('rcb').style.color='black';
        document.getElementById('mainBody').style.visibility='hidden';
        cardInserted=false;
    }
    else{

        document.getElementById('bcb').innerHTML='insert';
        document.getElementById('bcb').style.backgroundColor='white';
        document.getElementById('bcb').style.color='black';
        document.getElementById('mainBody').style.visibility='hidden';
        cardInserted=false;

    }
});
