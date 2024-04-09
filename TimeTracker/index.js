const dataObj=[];
var searchBtn=document.querySelector('#form-filter');
const filterCategory=document.getElementById('category');


const insertRow=(data)=>{
    var tableBody=document.getElementById('table-body');
    tableBody.innerHTML="";
    data.map((d,index)=>{
        var row="<tr>";
        row+="<td>"+d.category+"</td>";
        row+="<td>"+d.subcategory+"</td>";
        row+="<td>"+d.duration.hr.toString().padStart(2,0)+":"+d.duration.min.toString().padStart(2,0)+":"+d.duration.sec.toString().padStart(2,0)+"</td>";
        row+="<td>"+d.task+"</td>";
        row+="<td><button class='update-btn'>Update</button></td>";
        row+="<td><button class='delete-btn' data-index='" + index + "'>Delete</button></td>";
        tableBody.innerHTML+=row;
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            data.splice(index, 1);
            insertRow(data);
        });
    });
}
// insertRow(dataObj);
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
var count=-1;
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

// document.querySelectorAll("#update").forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//     var selectedIndex = this.getAttribute('data-index');
//     var selectedData = dataObj[selectedIndex];
//     populateFormFields(selectedData,selectedIndex);
//     insertRow(dataObj);
//     })

// });

// function populateFormFields(data,index) {
//     InputCategory.value = data.category;
//     InputSubCategory.value = data.subcategory;
//     InputTask.value = data.task;
//     InputCategory = data.category;
//     InputSubCategory = data.subcategory;
//     InputTask = data.task;
// }

// updateBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     var selectedIndex = this.getAttribute('data-index');
//     var selectedData = dataObj[selectedIndex];
//     populateFormFields(selectedData);
//     insertRow(dataObj);
// });

var InputCategory=document.getElementById('inputcategory');
var InputSubCategory=document.getElementById('inputsubcategory');
var InputTask=document.getElementById('inputtask');
var addBtn=document.getElementById('add');
addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    dataObj.push({
        category: InputCategory.value,
        subcategory: InputSubCategory.value,
        duration: {
            hr: hr,
            min: min,
            sec: count,
        },
        task: InputTask.value
    });
    insertRow(dataObj);
});
setInterval(()=>{
    if(timer){
        if(count==59){
            count=-1;
            min++;
        }
        if(min==59){
            count=-1;
            min=0;
            hr++;
        }
        count++;
        time=`${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${count.toString().padStart(2,0)}`
        counter.textContent=time;
    }
},1000);