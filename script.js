const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');
const zero=document.getElementById('zero');
const doubleZero=document.getElementById('doubleZero');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');
const point=document.getElementById('point');
const root=document.getElementById('root');
const backspace=document.getElementById('backspace');
const allClear=document.getElementById('allClear');
const equal=document.getElementById('equal');
let monitorText1=document.getElementById('monitorText1');
let monitorText2=document.getElementById('monitorText2');
let text='0';
let plusCount;
let minusCount;
let multiplyCount;
let divideCount;
monitorText1.textContent=`${text}`;
one.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}1`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
two.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}2`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
three.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}3`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
four.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}4`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
five.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}5`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
six.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}6`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
seven.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}7`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
eight.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}8`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})

nine.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}9`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
zero.addEventListener('click',()=>{
    removeZero();
    if(text.length<=11){
        text=`${text}0`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
doubleZero.addEventListener('click',()=>{
    removeZero();
    if(text.length==0){
        text='0';
        monitorText1.textContent=`${text}`;
    }else if(text.length==1 && text[0]=='0'){
        monitorText1.textContent=`${text}`;
    }else if(text.length==1 && text[0]!='0'){
        text=`${text}00`;
        monitorText1.textContent=`${text}`;
    }else if(text.length>1 && text.length<=11){
        text=`${text}00`;
        monitorText1.textContent=`${text}`;
    }
})
backspace.addEventListener('click', ()=>{
    if(monitorText2.textContent.length!=0){
        text=monitorText2.textContent;
        monitorText2.textContent='';
    monitorText1.textContent=`${text}`;

    }else{
        if(text.length==1){
        text='0';
        }else{
        text=text.slice(0, -1);
    }
    monitorText2.textContent='';
    monitorText1.textContent=`${text}`;}
})
allClear.addEventListener('click', ()=>{
    text='0';
    monitorText1.textContent=`${text}`;
    monitorText2.textContent='';
    plusCount=0;
    minusCount=0;
    divideCount=0;
    multiplyCount=0;
})
point.addEventListener('click', ()=>{
    if(text.includes('.')){
        text=text;
        monitorText1.textContent=`${text}`;
    }else{
        text=`${text}.`;
        monitorText1.textContent=`${text}`;
    }
})
plus.addEventListener('click', ()=>{
    plusCount=1;
    if(minusCount==1){
        text=`${Number(monitorText2.textContent)-Number(monitorText1.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        minusCount=0;
    }
    else if(multiplyCount==1){
        text=`${Number(monitorText1.textContent)* Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
        multiplyCount=0;
    }else if(divideCount==1){
        text=`${Number(monitorText1.textContent)/ Number(monitorText2.textContent)}`;
        if(text.includes('.')){text=`${Number(text).toFixed(3)}`}
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';

    }
   else if(monitorText2.textContent.length==0){
    monitorText2.textContent=monitorText1.textContent;
    monitorText1.textContent='';
    text='';
   }else{
    text=`${Number(monitorText1.textContent)+Number(monitorText2.textContent)}`;
    monitorText2.textContent=`${text}`;
    monitorText1.textContent='';
    text='';
   }
})
minus.addEventListener('click', ()=>{
    minusCount=1;
    if(plusCount==1){
        text=`${Number(monitorText1.textContent)+Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        plusCount=0
    }else if(multiplyCount==1){
        text=`${Number(monitorText1.textContent)* Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
        multiplyCount=0;
    }else if(divideCount==1){
        text=`${Number(monitorText1.textContent)/ Number(monitorText2.textContent)}`;
        if(text.includes('.')){text=`${Number(text).toFixed(3)}`}
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
        divideCount=0;}
   else if(monitorText2.textContent.length==0){
    monitorText2.textContent=monitorText1.textContent;
    monitorText1.textContent='';
    text='';
   }else{
    text=`${Number(monitorText2.textContent)-Number(monitorText1.textContent)}`;
    monitorText2.textContent=`${text}`;
    monitorText1.textContent='';
    text='';
   }
})
multiply.addEventListener('click', ()=>{
    multiplyCount=1;
    if(plusCount==1){
        text=`${Number(monitorText1.textContent)+Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        plusCount=0;
        text='';
    }else if(minusCount==1){
        text=`${Number(monitorText2.textContent)-Number(monitorText1.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        minusCount=0;
        text='';
    }else if(divideCount==1){
        text=`${Number(monitorText1.textContent)/ Number(monitorText2.textContent)}`;
        if(text.includes('.')){text=`${Number(text).toFixed(3)}`}
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
        divideCount=0;}
    else if(monitorText2.textContent.length==0){
        monitorText2.textContent=monitorText1.textContent;
        monitorText1.textContent='';
        text='';
    }else if(monitorText2.textContent.length!=0){
        text=`${Number(monitorText2.textContent)*Number(monitorText1.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
       }
})
divide.addEventListener('click', ()=>{
    divideCount=1;
    if(plusCount==1){
        text=`${Number(monitorText1.textContent)+Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        plusCount=0;
        text='';
    }else if(minusCount==1){
        text=`${Number(monitorText2.textContent)-Number(monitorText1.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        minusCount=0;
        text='';
    }else if(multiplyCount==1){
        text=`${Number(monitorText1.textContent)* Number(monitorText2.textContent)}`;
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
        multiplyCount=0;
    }else if(monitorText2.textContent.length==0){
        monitorText2.textContent=monitorText1.textContent;
        monitorText1.textContent='';
        text='';
    }else if(monitorText2.textContent.length!=0){
        text=`${Number(monitorText2.textContent)/ Number(monitorText1.textContent)}`;
        if(text.includes('.')){text=`${Number(text).toFixed(3)}`}
        monitorText2.textContent=`${text}`;
        monitorText1.textContent='';
        text='';
       }

})
equal.addEventListener('click', ()=>{
    if(plusCount==1){
        text=`${Number(monitorText1.textContent)+Number(monitorText2.textContent)}`;
        monitorText1.textContent=`${text}`;
        monitorText2.textContent='';
        plusCount=0;
    }else if(minusCount==1){
        text=`${Number(monitorText2.textContent)-Number(monitorText1.textContent)}`;
        monitorText1.textContent=`${text}`;
        monitorText2.textContent='';
        minusCount=0;
    }else if(multiplyCount==1){
        text=`${Number(monitorText2.textContent)* Number(monitorText1.textContent)}`;
        monitorText1.textContent=`${text}`;
        monitorText2.textContent='';
        multiplyCount=0;
    }else if (divideCount==1){
        text=`${Number(monitorText2.textContent)/ Number(monitorText1.textContent)}`;
        if(text.includes('.')){text=`${Number(text).toFixed(3)}`}
        monitorText1.textContent=`${text}`;
        monitorText2.textContent='';
        divideCount=0;}
})







function removeZero(){
    if(text.length==1&& text[0]=='0'){text=''};
}
//square root