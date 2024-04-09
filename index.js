// query selector
//changing text element value
// var element=document.querySelector('h1');
// element.textContent="Hello";
// var buttonelement=document.getElementById('button1');

// Event listener 
// buttonelement.textContent="Click Here!"
// buttonelement.addEventListener('click',function(){
//     element.textContent="Hi!!";
//     element.style.color="red";
//     //creating class name to the element 
//     buttonelement.classList.add('btn');

// })
// console.log(element);


// function example

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,47));

// call back function 

// function sample2(a){
//     a()
// }
// function hello(){
//     console.log('hello1')
// }
// sample2(hello)

// arrow function 

// const hi= ()=>{console.log("hiiiiiiiii")};
// hi();

//Array Functions

// const Array=[1,2,3,4,5];

// Array.push(56);
// Array.push(34);
// Array.pop();
// Array.unshift(34);
// Array.shift();
// Array.splice(2,0,34,66);
// const arr1=Array.slice(2,5);
// const printArray=(a)=>{
//     a.map((num)=>{
//         console.log(num);
//     })
// }
// printArray(Array);
// console.log("Slice output");
// printArray(arr1);


// Object Function

// var obj={
//     one:1,
//     two:2,
//     three:3,
// }

// for(var key in obj){
//     console.log(obj[key]);
// }

// var user=[{
//     name:"Sree",
//     age:21
// },
// {
//     name:"Deepak",
//     age:23
// }];

// user.filter((a)=>a.age!=21).map((a)=>console.log(a));

// console.log(user.find((a)=>a.name==='Sree').age);

//this keyword

// name='Surya';
// subname="deepak"

// var obj={
//     name:"jack",
//     subname:this.name,
//     subTwoname:this.subname,
// }
// console.log(obj);

//set timeout set time interval

// setTimeout(()=>alert(obj.name),3000);

// setInterval(()=> alert("Hello"),3000);

var counter=document.querySelector('p');
var btnstart=document.querySelector('#start');
var btnstop=document.querySelector('#stop');
var btnreset=document.querySelector('#reset');

btnstart.textContent="Start";
btnstop.textContent="Stop";
btnreset.textContent="Reset";
var timer=false;
var count=0;
var hr=0;
var min=0;
var time='';
btnstart.addEventListener('click',()=>{
    timer=true;
})

btnstop.addEventListener('click',()=>{
    timer=false;
})

btnreset.addEventListener('click',()=>{
    counter.textContent="00:00:00";
    timer=false;
    count=0;
    min=0;
    hr=0;
})

setInterval(()=>{
    
    if(timer){
        if(count==60){
            count=0;
            min++;
        }
        if(min==60){
            count=0;
            min=0;
            hr++;
        }
        count++;
        time=`${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${count.toString().padStart(2,0)}`
        counter.textContent=time;
    }
},1000);

//clear timeout

// timer=setTimeout(()=>console.log("start"),5000)

// setTimeout(()=>{
//     clearTimeout(timer)
// },8000);

// clear interval

// interval=setInterval(()=>console.log("start"),3000);

// setInterval(()=>{
//     clearInterval(interval);
// },10000);

//