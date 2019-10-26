    var head= document.querySelector('#headerDiv');
    var datesContainer=document.querySelector("#datesTable");
	var date = new Date();
	var monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var month = date.getMonth(); // 0:January --11:December
	var year = date.getFullYear(); //2019
	var firstDate = monthName[month] + " " + 1 + " "+ year;
	var temp = new Date(firstDate).toDateString();
	var firstDay = temp.substring(0,3);
	var dayName = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
	var dayNum =dayName.indexOf(firstDay);
	var days = new Date(year, month+1, 0).getDate();
	console.log(dayNum, days, firstDay);
	var calender = getCalender(dayNum, days);
    head.innerHTML= monthName[month]+ " " + year;
    datesContainer.appendChild(calender);

  	
function getCalender(dayNum, days){
	var table = document.createElement('table');
	var tr = document.createElement('tr');

	for(var c=0;c<=6;c++){
		var td =document.createElement('td');
		td.innerHTML="SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);
	//2nd row

	tr=document.createElement('tr');
	var c;
	for(c=0;c<=6;c++){
		if(c===dayNum){
			break;
		}
		var td=document.createElement('td');
		td.innerHTML=" ";
		tr.appendChild(td);

	}
	var count=1;
	for(;c<=6;c++){
		var td=document.createElement('td');
		td.className="td-class";
		td.innerHTML=`<a class="dateCount" >${count}</a>`;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	for(var r=3;r<=6;r++){
		tr=document.createElement('tr');
		for(var c=0;c<=6;c++){
			if(count>days){
				table.appendChild(tr);
				return table;
			}
			var td=document.createElement('td');
			td.innerHTML=`<a class="dateCount" >${count}</a>`;
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}

}


