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
let text='';
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
    if(text.length==1&&text[0]=='0'){
        monitorText1.textContent=`${text}`;
    }
    else if(text.length>=1 && text[0]!='0' &&text.length<=11){
        text=`${text}00`;
    monitorText1.textContent=`${text}`;
    }else{
        return;
    }
})
backspace.addEventListener('click', ()=>{
    
    if(text.length==1){
        text='0';

    }else{
        text=text.slice(0, -1);
    }
    monitorText1.textContent=`${text}`;
})
function removeZero(){
    if(text.length==1&& text[0]=='0'){text=''};
}