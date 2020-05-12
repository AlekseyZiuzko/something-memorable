'use strict'
let carsURL = 'http://localhost:3000/cars';

// function to get collection of objects from mongodb from url
function getCollection(url) {
    return JSON.parse($.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        global: false,
        async: false,
        success: function (data) {
            return data;
        }
    }).responseText);
};

let carDB = getCollection(carsURL); // storing collection into variable

let table = document.getElementById('parking-table').getElementsByTagName('tbody')[0];

//function that creates main table
function createParkingTable(arr) {
    for (let i = 0; i < arr.length; i++){ 
        let row = table.insertRow(i);
        let rowId = row.rowIndex;
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);

        

        cell1.innerHTML = rowId;
        cell2.innerHTML = arr[i].plateNumber;
        cell3.innerHTML = arr[i].name;
        cell4.innerHTML = arr[i].owner;
        cell5.innerHTML = arr[i].cellNumber;
        cell6.innerHTML = arr[i].entryDate.replace(/T/, ' ').replace(/\..+/, '');
        cell7.innerHTML = '<input type="checkbox" class="checkbox" id="checked" data-id='+arr[i]._id+'>';    
        
    }
}
createParkingTable(carDB);


// this function is used to filter a table by car name field
function searchTable() {
    console.log('lol');
    let input, filter, tr, td, i, txtValue;
    input = document.getElementById("searchTable");
    filter = input.value.toUpperCase();
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};


// function to remove objects from server
// this solution is not very good of course, cause it will reload page as many times as checked rows, but at least it works
function removeObj() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let arr = Array.from(checkboxes);
    let check = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].checked === true) {
            check.push(arr[i].getAttribute('data-id'));
        }
    }

    if (check.length > 1) {
        for (let j = 0; j < check.length; j++) {
            $.ajax({
                type: 'DELETE',
                url: '/cars/'+check[j],
                success: function(response) {
                    console.log('Objects deleted');
                    location.reload();
                },
                error: function(err) {
                    console.log(err);
                }
            });
        };
    };
};

document.getElementById('remove-from-table').addEventListener('click', removeObj); // listens to clicks on the remove button
document.getElementById('searchTable').addEventListener('keyup', searchTable); // listens to use search function