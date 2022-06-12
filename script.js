var selectedRow = null;

function onFormSumbit(){
    // e.preventDefault();
    var formdata = readFormData();
    
    if(selectedRow==null){
        insertdata(formdata);
    }
    else{
        updaterecords(formdata);
    }
    resetForm();
}


function readFormData(){
   
    var formdata = {};
    formdata['fullname'] = document.getElementById('fullname').value;
    formdata['empcode'] = document.getElementById('empcode').value;
    formdata['salary'] = document.getElementById('salary').value;
    formdata['city'] = document.getElementById('city').value;

    return formdata;
}

function insertdata(data){
    var table = document.getElementById('tabledata').getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newrow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}


function resetForm(){
    document.getElementById('fullname').value = "";
    document.getElementById('empcode').value = "";
    document.getElementById('salary').value = "";
    document.getElementById('city').value = "";
    selectedRow = null;
}

function onEdit(td){
selectedRow = td.parentElement.parentElement;
document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
document.getElementById('empcode').value = selectedRow.cells[1].innerHTML;
document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}


function updaterecords(formdata){
    selectedRow.cells[0].innerHTML = formdata.fullname;
    selectedRow.cells[1].innerHTML = formdata.empcode;
    selectedRow.cells[2].innerHTML = formdata.salary;
    selectedRow.cells[3].innerHTML = formdata.city;
}


function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){

        row = td.parentElement.parentElement;
        document.getElementById('tabledata').deleteRow(row.rowIndex);
        resetForm();
    }


}




