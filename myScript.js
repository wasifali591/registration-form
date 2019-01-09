function displayResult(){
	var result;
	var sub = '';
	var gender
	var name = document.getElementById('name').value;
	var email =  document.getElementById('email').value;
	var psw =  document.getElementById('psw').value;
	var add = document.getElementById('add').value;
	var bday = document.getElementById('bday').value;
	//var gender = document.getElementById('gender').value;
	document.getElementsByName("gender").forEach(function (node) {
	if(node.checked)
		gender=node.value;
	})
	var catagory = document.getElementById('catagory').value;
	//var sub = document.getElementById('sub').value;
	
	document.getElementsByName("sub").forEach(function (node) {
	if(node.checked)
		sub+=node.value;
	})
	
	result = name + '<br>'+ email +'<br>'+psw+'<br>'+add+'<br>'+bday+'<br>'+gender+'<br>'+catagory+'<br>'+sub;
	//result += '<b>' + email + '</b>';
	
	document.getElementById('display').innerHTML = result;
	
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('psw').value = '';
	document.getElementById('add').value = '';
	document.getElementById('bday').value = '';
	//document.getElementById('gender').value = '';
	document.getElementById('catagory').value = '';
	//document.getElementById('sub').value = '';
	//display.innerHTML(name);
	/*document.write("Contact No: "+email+"<br>");
	document.write("Password: "+psw+"<br>");
	document.write("Address: "+add+"<br>");
	document.write("Date of Birth: "+bday+"<br>");
	document.write("Sex: "+gender+"<br>");
	document.write("Caste: "+catagory+"<br>");
	document.write("Subject: "+sub+"<br>");*/
}