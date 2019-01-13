/**
* File Name  : registration-script
* Description : js for add,update and remove data from a table . input taken from a form 
* Created date : 01/11/2019
* Author  : Md Wasif Ali
* Comments : 
*/
var sub = '';
var rIndex;
var registrationTable=document.getElementById("registrationTable");

/* Reset form values */
function resetForm(){
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
	document.getElementById('psw').value = '';
	document.getElementById('add').value = '';
	document.getElementById('bday').value = '';
	myCatagory();
	unSelectAll();
	myGender();
}

/*unchecked all the checkbox*/
function unSelectAll(){
    var items = document.getElementsByName('sub');
    for (var i = 0; i < items.length; i++){
        if (items[i].type == 'checkbox'){
                items[i].checked = false;
        }
    }
	sub=' ';
}

/*to show a general value after reseting the form  */
function myCatagory() {
  document.getElementById("catagory").selectedIndex = "0";
}
function myGender(){
	var genders = document.getElementsByName("gender");
	genders[0].checked=true;
}
/*
get the table by id
create a new row and corosponding cells
get value from input
set the value into row cell
 cell1,cell2...cell8 are the variables to hold the data, trying to fetch form the table
	*/

function addHtmlTableRow(){	
	newRow=registrationTable.insertRow(registrationTable.length);
	cell1=newRow.insertCell(0);
	cell2=newRow.insertCell(1);
	cell3=newRow.insertCell(2);
	cell4=newRow.insertCell(3);
	cell5=newRow.insertCell(4);
	cell6=newRow.insertCell(5);
	cell7=newRow.insertCell(6);
	cell8=newRow.insertCell(7);
	
	readInputFromForm();
	
	cell1.innerHTML=name;
	cell2.innerHTML=email;
	cell3.innerHTML=psw;
	cell4.innerHTML=add;
	cell5.innerHTML=bday;
	cell6.innerHTML=gender;
	cell7.innerHTML=catagory;
	cell8.innerHTML=sub;
	
	resetForm();	
	selectRowToInput();
	topFunction();
	showDiv();
	divPosition();
}

/* display selected row data into the form */
function selectRowToInput(){
	for(var i=1;i<registrationTable.rows.length;i++)
	{
		registrationTable.rows[i].onclick=function(){
			rIndex=this.rowIndex;
			document.getElementById("name").value=this.cells[0].innerHTML;
			document.getElementById("email").value=this.cells[1].innerHTML;
			document.getElementById("psw").value=this.cells[2].innerHTML;
			document.getElementById("add").value=this.cells[3].innerHTML;
			document.getElementById("bday").value=this.cells[4].innerHTML;
			document.getElementById(this.cells[5].innerHTML).checked = true;
			document.getElementById("catagory").value=this.cells[6].innerHTML;
			document.getElementById('actionButton').style.display = "block";
			checkedCheckbox();			
		};
	}
}

/* read the new data from the input and update to the table*/
function editHtmlTableSelectedRow(){
	
	readInputFromForm();
	
	registrationTable.rows[rIndex].cells[0].innerHTML=name;
	registrationTable.rows[rIndex].cells[1].innerHTML=email;
	registrationTable.rows[rIndex].cells[2].innerHTML=psw;
	registrationTable.rows[rIndex].cells[3].innerHTML=add;
	registrationTable.rows[rIndex].cells[4].innerHTML=bday;
	registrationTable.rows[rIndex].cells[5].innerHTML=gender;
	registrationTable.rows[rIndex].cells[6].innerHTML=catagory;
	registrationTable.rows[rIndex].cells[7].innerHTML=sub;
	
	resetForm();
	topFunction();
}

/* to read the input */
function readInputFromForm(){
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
}

/* to delete selected row */
function removeSelectedRow(){
	registrationTable.deleteRow(rIndex);
	resetForm();
	topFunction();
}

/*to scrollup the page*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* validate the name*/
function validateName(){
	name = document.getElementById('name').value;
	if(name===''){
		document.getElementById("wrongName").innerHTML="Enter your name.";
	}else{
		document.getElementById("wrongName").innerHTML="";
	}
}

/* validate email address */
function validateEmail(email){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email.value) == false) 
        {
			document.getElementById("wrongEmail").innerHTML="Invalid Email Address<br>name@mail.com";
        }else{
			document.getElementById("wrongEmail").innerHTML="";
		}
}

/*validate password */
function validatePassword(psw){
	var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if (reg.test(psw.value) == false) 
        {
            document.getElementById("wrongPassword").innerHTML="Password must contain the following:<br>1.A lower case letter<br>2.A capital letter<br>3.A number<br>4.Minimum 8 characters";
        }else{
			document.getElementById("wrongPassword").innerHTML="";
		}
}

function ConfirmDelete()
{
  var x = confirm("Are you sure you want to delete?");
  if (x){
      removeSelectedRow();
  }else{
    return false;
  }
}

function showDiv() {
   document.getElementById('dataTable').style.display = "block";
}

function divPosition(){
	document.getElementById("headerPosition").style.margin = "20px 0px 0px 20px";
	document.getElementById("bodyPosition").style.margin = "0px 0px 0px 20px";
}

function checkedCheckbox(){
	var str = registrationTable.rows[rIndex].cells[7].innerHTML;
    var arraySubject = str.split(" ");
	for(var i=1;i<=arraySubject.length;i++){
		document.getElementById(arraySubject[i]).checked = true;
	}
}