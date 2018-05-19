console.log('JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

    $('#addButton').on('click', addEmployee);

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

let annualSalary = 0;

let arrayEmployee = [];

function addEmployee() {
    let employeeFirstName = $('#firstName').val(); //to append into html table
    let employeeLastName = $('#lastName').val(); //to append into html table
    let employeeIdNumber = $('#employId').val(); //to append into html table
    let employeeTitleName = $('#employTitle').val(); //to append into html table
    let employeePay = $('#employSalary').val(); //to append into html table

    let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#employId').val(), $('#employTitle').val(), parseInt( $('#employSalary').val() ) ); // create new employee upon button click event

    let x = parseInt( $('#employSalary').val() ); // empty value to dump employeeSalary
    annualSalary += x; // sum of all employee salary
    console.log(annualSalary); // log total annual salary to check if script is working
    $('#totalSalary').empty(); // emppty out the totalSalary table row from the DOM
    $('#totalSalary').append( '<th> Total Annual Salary: ' + '$' + annualSalary + '</th>' ); // append the total annual salary to the emptied table row on he DOM

    if ( $('#firstName').val() === "" || $('#lastName').val() === "" || $('#employId').val() === "" || $('#employTitle').val() === "" || $('#employSalary').val() === "" ) {
        alert('Please complete all fields'); // validate if all fields are filled before continuing
    } else {
        // append created employee to a new table row
        let addRow = $('#employeeTable').append('<tr><td>' + employeeFirstName + '</td> <td>' + employeeLastName + '</td> <td>' + employeeIdNumber + '</td> <td>' + employeeTitleName + '</td> <td>' + '$' + employeePay + '</td>   </tr>');
        // log newEmployee array
        console.log(newEmployee);
        // push newly created employees into newEmployee array
        arrayEmployee.push(newEmployee);
        return arrayEmployee;
    } // end else statement
} // end addEmployee function


//////////////////CODE BEFORE CONCATENATING//////////////////////////////
// // function adds created employee class to arrayEmployee array
// function addEmployee() {
//     // get user input
//     // create new employee from input
//     let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#employId').val(), $('#employTitle').val(), $('#employSalary').val() );
//     console.log(newEmployee);
//     // store new employee
//     // push into array
//     arrayEmployee.push(newEmployee);
//     return arrayEmployee;
//     // update DOM
//     //end
// } //end 

// function adds created employee to table on DOM
// function displayToTable() {
//     let employeeFirstName = $('#firstName').val();
//     let employeeLastName = $('#lastName').val();
//     let employeeIdNumber = $('#employId').val();
//     let employeeTitleName = $('#employTitle').val();
//     let employeePay = $('#employSalary').val();

//     let addRow = $('#employeeTable').append('<tr><td>' + employeeFirstName + '</td> <td>' + employeeLastName + '</td> <td>' + employeeIdNumber + '</td> <td>' + employeeTitleName + '</td> <td>' + employeePay + '</td> </tr>');
// } //end displayToTable function