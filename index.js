/*
Must allow users to:

    1- Enter items they need to purchase by entering text and hitting 'return' or clicking the 'add item' button
    2- check and unchek items on the list by clicking the 'check' button
    3- permanently remove items from list
*/

function handleShoppingList(){
    $('#js-shopping-list-form button').on('click', event =>{
        event.preventDefault();

        addNewItem(getUserInput());
    });
}

function getUserInput(){
    let newItem = $('#shopping-list-entry').val();
    return newItem;
}

function addNewItem(item){
    if(!item){
        alert("please input an object to add to shopping list.");
    } else {
        alert(item + " has been added!");
    }
}

$(handleShoppingList);
