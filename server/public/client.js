console.log('JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

    $('#addButton').on('click', addEmployee);



} ////end ready now

let arrayEmployee = [];

function addEmployee (){
    // get user input
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const employId = $('#employID').val();
    const title = $('#employTitle').val();
    const salary = $('#employSalary').val();
    console.log('test add employee');
    // create class from input
    let createEmployee = new Employee(firstName, lastName, employId, title, salary);
    
    arrayEmployee.push(createEmployee);
    console.log(createEmployee);

    //append to dom
    addToDom();
}// end function
 
class Employee {
    constructor (firstName, lastName, employId, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employId = employId;
        this.title = title;
        this.salary = salary;
        } //end constructor
    } // end class



function addToDom (){
    clearTable();
    for ( people of arrayEmployee){
        const tableEmployee = `<tr>
                                        <td>${people.firstName}</td>
                                        <td>${people.lastName}</td>
                                        <td>${people.employId}</td>
                                        <td>${people.title}</td>
                                        <td>${people.salary}</td>
                                        <td> <button type="button" class="deleteButton"> Delete </button> </td>
                                    </tr>`;
        $('#employeeTable').append(tableEmployee);
    } // end loop
} // end function

$(document).on('click', '.deleteButton', deleteRow);

function deleteRow() {
    console.log('in delete');
    $(this).closest("tr").remove();
}// end delete function

function clearTable (){
    $('#employeeTable td').empty();
}