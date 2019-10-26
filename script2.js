const form= document.querySelector('#addForm');
const eventInput= document.querySelector('#event');
const eventList= document.querySelector('.eventList');
const clearButton= document.querySelector('.clearButton');
const form2= document.querySelector('#form2');

var table=document.querySelector('#datesTable>table');
var trs=document.querySelectorAll('#datesTable>table>tr>td>a');
var eventWindowDiv=document.querySelector('.eventWindowDiv');
console.log(trs[3].innerHTML);

table.addEventListener('click',popUp);

function popUp(e){
 console.log(e.target.parentElement,"hiiii");
	if(e.target.classList.contains('dateCount')){
		eventWindowDiv.classList.add('display');


    var targetTd= e.target.parentElement;
    console.log(targetTd,"targt");


loadEventListeners();

function loadEventListeners(){
	//Add events
	form.addEventListener('submit', addEvent);

	//close 
	form2.addEventListener('submit',closeEvents)

}

/**Add Events **/

function addEvent(e){
	if(eventInput.value===''){
		alert('Please add an Event')
	}

	//Create li element
	else{
	const li=document.createElement('li');
	li.className="collection-item"; 
	li.appendChild(document.createTextNode(eventInput.value));
    console.log(eventInput.value);
	//create link element

	const link= document.createElement('a');
	link.className="delete-event aLink"; 
	link.innerHTML= '<i class="fa fa-remove"></i>';
	li.appendChild(link);
	eventList.appendChild(li);

	//update the entries in the calender-    
	const p= document.createElement('p');
	p.innerHTML= eventInput.value;
	targetTd.appendChild(p);
	console.log(targetTd,"targt");


	//Clear events

	eventInput.value='';
}
	e.preventDefault();


}



function closeEvents(e){
	
	eventWindowDiv.classList.add('close');
}
}
}