const dataObj=[{
    category:"Work",
    subcategory:"Metting",
    duration:"00.40.21",
    task:"Client Meeting",
},
{
    category:"Personal Space",
    subcategory:"-",
    duration:"00.26.22",
    task:"-",
},
{
    category:"Work",
    subcategory:"Project",
    duration:"01.32.01",
    task:"Mail Handler module",
},
{
    category:"Work",
    subcategory:"Meeting",
    duration:"00.35.05",
    task:"Daily scrum",
},
{
    category:"Personal Space",
    subcategory:"-",
    duration:"00.16.04",
    task:"-",
},
];
var searchBtn=document.querySelector('#form-filter');
const filterCategory=document.getElementById('category');


const insertRow=(data)=>{
    var tableBody=document.getElementById('table-body');
    tableBody.innerHTML="";
    data.map((d)=>{
        var row="<tr>";
        row+="<td>"+d.category+"</td>";
        row+="<td>"+d.subcategory+"</td>";
        row+="<td>"+d.duration+"</td>";
        row+="<td>"+d.task+"</td>";
        tableBody.innerHTML+=row;
    })
}
insertRow(dataObj);
function filterTask(category){
    var filteredTasks=dataObj.filter((task)=>{
        return (!category || task.category=== category);
    })
    insertRow(filteredTasks);
}
searchBtn.addEventListener('submit',(event)=>{
    event.preventDefault();
    filterTask(filterCategory.value);
    
})



var counter=document.querySelector('#Time');
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