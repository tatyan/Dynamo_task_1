var table;
var day_name = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday','Sunday'];
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var calendarDate = new Date();
var month = calendarDate.getMonth(); 
var year = calendarDate.getFullYear();
var events = [
	{
		"type": "Email",
		"start": "01/06/2018/07/00",
		"duration": "60"
	},
	{
		"type": "facebook",
		"start": "01/06/2018/07/00",
		"duration": "60"
	},
	{
		"type": "Call",
		"start": "03/06/2018/08/00",
		"duration": "60"
	},
	{
		"type": "Email",
		"start": "05/07/2018/07/00",
		"duration": "30"
	}
	];

window.onload=function(){
	
	document.getElementById("month-year").innerHTML = month_name[month]+" "+year;
	table = document.createElement('table');
	var tr = document.createElement('tr');
	for (var i=0; i <= 6; i++){
		var th = document.createElement('th');
		var div = document.createElement('div');
		div.innerHTML = day_name[i];
		th.appendChild(div);
		tr.appendChild(th);
	}
	table.appendChild(tr);
	for (var i=0; i < 6; i++){
		tr = document.createElement('tr');
		for (var j=0;j<=6;j++){
			td = document.createElement('td');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.getElementById("calendar-container").appendChild(table);
	setDates(month, year);
}
function switcMonth(direction){
	if(direction == 'fwd'){
		if(month == 11){
			month = 0;
			year++;
		}
		else
			month++;
	}
	else{
		if (month == 0){
				month = 11;
				year--;
		}
		else
			month--;
	}			
	document.getElementById("month-year").innerHTML = month_name[month]+" "+year;
	setDates(month, year);
}
function setDates(month, year){
	calendarDate = new Date(year, month);
	var firstWeekDay = calendarDate.getDay();
	if(firstWeekDay==0)
		firstWeekDay=6;
	else
		firstWeekDay--;
	calendarDate.setDate(calendarDate.getDate()-(firstWeekDay));
	for (var i = 1, row; row = table.rows[i]; i++) {
		for (var j = 0, col; col = row.cells[j]; j++) {
			var day_num = calendarDate.getDate();
			col.date_prop = calendarDate;
			if(day_num == 1){
				col.innerHTML=(calendarDate.toString()).substr(4,3)+ " "+1;
			}
			else
				col.innerHTML=day_num;
			
			calendarDate.setDate(calendarDate.getDate()+1);
			
		}  
	}	
}
function findEvents(){
	for(var i=0;i<events.length;i++)
	{
		var evt_start = events[i].start;
	}
}
