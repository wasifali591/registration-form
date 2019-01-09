var result;
var sub = '';
var gender;
var name;
var email;
var psw;
var bday;
var catagory;
var table;
var rowCount;
var row;
function displayResult(){
	/*get the value from from */
	name = document.getElementById('name').value;
	email =  document.getElementById('email').value;
	psw =  document.getElementById('psw').value;
	add = document.getElementById('add').value;
	bday = document.getElementById('bday').value;
	document.getElementsByName("gender").forEach(function (node) {
	if(node.checked)
		gender=node.value;
	})
	catagory = document.getElementById('catagory').value;	
	document.getElementsByName("sub").forEach(function (node) {
	if(node.checked)
		sub+=' '+node.value;
	})
	
	table = document.getElementById('data');
	result = table.innerHTML; //strore the previous value in result
	var row = getRow(name,email,psw,add,bday,gender,catagory,sub); //store the new value in row
	result += row; //concat result and row in rusult to hold the total data
	table.innerHTML = result;
	
	// Reset form values
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('psw').value = '';
	document.getElementById('add').value = '';
	document.getElementById('bday').value = '';
	document.getElementById('catagory').value = '';
}
function getRow(name,email,psw,add,bday,gender,catagory,sub){
	var row ='<tr><td>'+name + '</td><td>'+email +'</td><td>'+psw+'</td><td>'+add+'</td><td>'+
	bday+'</td><td>'+gender+'</td><td>'+catagory+'</td><td>'+sub+'</td></tr>';
	return row;
}