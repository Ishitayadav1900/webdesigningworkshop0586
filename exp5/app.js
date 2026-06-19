//step 1: create an array to store all employee details
let employee = [];

// step 2: create a function to read input fields and save the data
function addEmployee() {
    //create a single employee object to store the details of one employee
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: document.getElementById("salary").value,
        dept: document.getElementById("dept").value
    };
    // add the new employee object to theend of the array
    employee.push(emp);

    //show a confirmation message
    alert("Employee added successfully!");
}