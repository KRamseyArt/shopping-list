/*
Must allow users to:

    1- Enter items they need to purchase by entering text and hitting 'return' or clicking the 'add item' button
    2- check and unchek items on the list by clicking the 'check' button
    3- permanently remove items from list
*/

function handleShoppingList(){
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault();

        addNewItem(getUserInput());
    });

    $(handleToggles);
    $(handleDeletes);
}

function getUserInput(){
    let newItem = $('#shopping-list-entry').val();
    return newItem;
}

function addNewItem(item){
    if(!item){
        alert("please type an item to be added to shopping list.");
    } else {
        $('.shopping-list').prepend(`
        <li>
            <span class="shopping-item">` + item + `</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`);
        $('#shopping-list-entry').val('');
        
        //alert(item + " has been added!");
    }
}

function handleDeletes(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        event.preventDefault();
        //  NEVER FORGET... $(this) DOES NOT WORK WITHIN ARROW FUNCTIONS!!! 
        let deletedItem = $(this).parentsUntil('.shopping-list');
        //alert("Deleted: " + deletedItem.find('.shopping-item').text());

        $(deletedItem).remove();
    })
}

function handleToggles(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        event.preventDefault();
        
        let toggledItem = $(this).parentsUntil('.shopping-list').find('.shopping-item');
        
        toggledItem.toggleClass('shopping-item__checked');
        /*
        if (toggledItem.first().hasClass('.shopping-item__checked')){
            toggledItem.first().removeClass('shopping-item__checked');
            console.log("Unchecked: " + toggledItem.find('.shopping-item').text());
        } else {
            toggledItem.first().addClass('shopping-item__checked');
            console.log("Checked: " + toggledItem.find('.shopping-item').text());
        }
        */
    })
}

$(handleShoppingList);
