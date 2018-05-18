console.log('JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

    $('#addButton').on('click', addEmployee)












} ///////////////////////////////////END READY NOW

class Employee {
    constructor(first, last, id, title, salary) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    } // end constructor
} // end employee class

let arrayEmployee = [];

function addEmployee() {
    console.log('test test');
    // get user input
    // create new employee from input
    let newEmployee = new Employee($('#firstName').val, $('#lastName').val, $('#employId').val(), $('#employTitle').val(), $('employSalary').val());
    console.log(newEmployee);
    // store new employee
    // push into array
    arrayEmployee.push(newEmployee)
    // update DOM
    //end
} //end 


function displayToTable() {

}