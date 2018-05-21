console.log('JS');
$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

    let arrayEmployee = [];
    let annualSalary = 0;
    let monthlyPay = 0;
    let remove = '<td><button id="deleteButton"> Delete </button></td>'; 

    $('#addButton').on('click', function( ){
        let employeeFirstName = $('#firstName').val(); //to append into html table
        let employeeLastName = $('#lastName').val(); //to append into html table
        let employeeIdNumber = $('#employId').val(); //to append into html table
        let employeeTitleName = $('#employTitle').val(); //to append into html table
        let employeePay = $('#employSalary').val(); //to append into html table
        let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#employId').val(), $('#employTitle').val(), parseInt( $('#employSalary').val() ) ); // create new employee upon button click event
         

        if ( $('#firstName').val() === "" || $('#lastName').val() === "" || $('#employId').val() === "" || $('#employTitle').val() === "" || $('#employSalary').val() === "" ) {
            $('#addButton').prop('diabled', true );
            alert('Please fill all fields'); // validate if all fields are filled before continuing
        } else {
            $('#addButton').prop('diabled', false );

            // append created employee to a new table row
            let addRow = $('#employeeTable').append('<tr><td>' + employeeFirstName + '</td> <td>' + employeeLastName + '</td> <td>' + employeeIdNumber + '</td> <td>' + employeeTitleName + '</td> <td>' + '$' + employeePay + remove + '</tr>');
            // log newEmployee array
            console.log(newEmployee);
            arrayEmployee.push(newEmployee); // push newemployee into arrayEmployee 
            
            let x = parseInt( $('#employSalary').val() ); // empty value to dump employeeSalary
            annualSalary += x; // sum of all employee salary
            console.log('total annual', annualSalary); // log total annual salary to check if script is working
            monthlyPay = annualSalary / 12; // dive annual salary by 12
            console.log('total monthly', monthlyPay); // log total annual salary to check if script is working
            $('#totalSalary').empty(); // empty out the totalSalary table row from the DOM
            $('#totalSalary').append( '<div> Total Annual Salary: ' + '$' + monthlyPay.toFixed(2) + '</div>' ); // append the total annual salary to the emptied table row on he DOM
            return arrayEmployee;
        } // end else statement
    });

    $('#addButton').on('click', function( ) {
        if (monthlyPay > 20000){
            console.log('over');
            alert('Monthly salary is over $20,000');
            $('#sumTable th').css("background-color", "red");
            }
        });

    $('remove').on('click', function( ){
        alert('HI');
    });


    
    
    
    
    
    
    }///////////////////////////////////END READY NOW//////////////////////////

class Employee {
    constructor(first, last, id, title, salary) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.title = title;
        this.salary = salary;
    } // end constructor
} // end employee class

function clear() {
    $('#firstName').val(''); 
    $('#lastName').val('');
    $('#employId').val('');
    $('#employTitle').val('');
    $('#employSalary').val('');
} // end clear function