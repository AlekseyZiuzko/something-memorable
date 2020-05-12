let table = document.getElementById('wish').getElementsByTagName('tbody')[0];   //this variable includes a table in tbody HTML elemenet


//using a function below, we create rows in tbody
//first cells' innerHTML will be a row index, so when we create a row №# of the product will be always right
//I've also decided to add a remove from wishlist button

function addToWishList(productID) {
    let row = table.insertRow();
    let rowId = row.rowIndex;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = rowId;
    cell2.innerHTML = document.getElementById(productID).getElementsByClassName('product-item__name')[0].innerHTML;
    cell3.innerHTML = document.getElementById(productID).getElementsByClassName('product-item__price')[0].innerHTML;
    cell4.innerHTML = '<button type="button" class="removeFromWishlist" id="remove" onclick="removeFromWishlist(this)"><i class="far fa-trash-alt"></i></button>';
}

// this function simply removes a row from the tbody

function removeFromWishlist(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// after we delete a row, event listener will use a function to adjust first column of the wishlist to our changes

table.addEventListener('click', sortWL);

function sortWL() {
    for (let i = 0, row; row = table.rows[i]; i++) {
        let cell = row.getElementsByTagName('td')[0];
        if (cell.innerHTML !== row.rowIndex) {
            cell.innerHTML = row.rowIndex;
        }
    }
}