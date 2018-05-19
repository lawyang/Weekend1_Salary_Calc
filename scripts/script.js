console.log('JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

    $('#addButton').on('click', addEmployee);
    $('#addButton').on('click', displayToTable);



    
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

// function adds created employee class to arrayEmployee array
function addEmployee() {
    // get user input
    // create new employee from input
    let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#employId').val(), $('#employTitle').val(), $('#employSalary').val() );
    console.log(newEmployee);
    // store new employee
    // push into array
    arrayEmployee.push(newEmployee);
    return arrayEmployee;
    // update DOM
    //end
} //end 

// function adds created employee to table on DOM
function displayToTable() {
    let employeeFirstName = $('#firstName').val();
    let employeeLastName = $('#lastName').val();
    let employeeIdNumber = $('#employId').val();
    let employeeTitleName = $('#employTitle').val();
    let employeePay = $('#employSalary').val();

    let addRow = $('#employeeTable').append('<tr><td>' + employeeFirstName + '</td> <td>' + employeeLastName + '</td> <td>' + employeeIdNumber + '</td> <td>' + employeeTitleName + '</td> <td>' + employeePay + '</td> </tr>');
} //end displayToTable function