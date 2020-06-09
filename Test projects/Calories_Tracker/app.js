// Storage Controller
const StorageCtrl = (function () {
    // Public methods
    return {
        storeItem: function (item) {
            let items;

            // Check if any items in local storage
            if (localStorage.getItem("items") === null) {
                items = [];

                // Push new item
                items.push(item);

                // Set local storage
                localStorage.setItem("items", JSON.stringify(items));
            } else {
                // Get items from local storage
                items = JSON.parse(localStorage.getItem("items"));

                // Push new item
                items.push(item);

                // Reset local storage
                localStorage.setItem("items", JSON.stringify(items));
            }
        },

        getItemsFromStorage: function () {
            let items;
            if (localStorage.getItem("items") === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem("items"));
            }

            return items;
        },

        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            // Reset local storage
            localStorage.setItem("items", JSON.stringify(items));
        },

        deleteItemStorage: function (id) {
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach((item, index) => {
                if (id === item.id) {
                    items.splice(index, 1);
                }
            });
            // Reset local storage
            localStorage.setItem("items", JSON.stringify(items));
        },

        clearStorage: function () {
            localStorage.removeItem("items");
        },
    };
})();

// Item Controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // Data Structure / State
    const data = {
        // items: [
        //     { id: 0, name: "Steak Dinner", calories: 1200 },
        //     { id: 0, name: "Coke", calories: 200 },
        //     { id: 0, name: "Apple Pie", calories: 600 },
        // ],
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0,
    };

    // Public methods
    return {
        getItems: function () {
            return data.items;
        },

        addItem: function (name, calories) {
            let ID;
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new item
            newItem = new Item(ID, name, calories);

            // Add to items array
            data.items.push(newItem);

            return newItem;
        },

        getItemById: function (id) {
            let found = null;

            // Loop through items
            data.items.forEach((item) => {
                if (item.id === id) {
                    found = item;
                }
            });

            return found;
        },

        updateItem: function (name, calories) {
            // Cals to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach((item) => {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found;
        },

        deleteItem: function (id) {
            // Get ids
            const ids = data.items.map((item) => item.id);

            // Get index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1);
        },

        clearAllItems: function () {
            data.items = [];
        },

        setCurrentItem: function (item) {
            data.currentItem = item;
        },

        getCurrentItem: function () {
            return data.currentItem;
        },

        getTotalCalories: function () {
            let total = 0;

            // Loop through items and add cals
            data.items.forEach((item) => {
                total += item.calories;
            });

            // Set total cal in data structure
            data.totalCalories = total;

            // Return total
            return data.totalCalories;
        },

        logData: function () {
            return data;
        },
    };
})();

// UI Controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: "#item-list",
        listItems: "#item-list li",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        clearBtn: ".clear-btn",
        itemNameInput: "#item-name",
        itemCaloriesInput: "#item-calories",
        totalCalories: ".total-calories",
    };

    //Public methods
    return {
        populateItemList: function (items) {
            let html = "";
            items.forEach((item) => {
                html += `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>
                `;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput)
                    .value,
            };
        },

        addListItem: function (item) {
            // Creat li element
            const li = document.createElement("li");
            // Add class
            li.className = "collection-item";
            // Add id
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            `;
            // Insert item
            document
                .querySelector(UISelectors.itemList)
                .insertAdjacentElement("beforeend", li);

            // Show list
            document.querySelector(UISelectors.itemList).style.display =
                "block";
        },

        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Convert nodelist into array
            listItems = Array.from(listItems);

            listItems.forEach((listItem) => {
                const itemId = listItem.getAttribute("id");

                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    `;
                }
            });
        },

        deleteListItem: function (id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);

            item.remove();
        },

        removeItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn nodelist into array
            listItems = Array.from(listItems);

            listItems.forEach((listItem) => {
                listItem.remove();
            });
        },

        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemCaloriesInput).value = "";
        },

        addItemToForm: function () {
            document.querySelector(
                UISelectors.itemNameInput
            ).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(
                UISelectors.itemCaloriesInput
            ).value = ItemCtrl.getCurrentItem().calories;

            UICtrl.showEditState();
        },

        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = "none";
        },

        showTotalCalories: function (totalCalories) {
            document.querySelector(
                UISelectors.totalCalories
            ).textContent = totalCalories;
        },

        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display =
                "none";
            document.querySelector(UISelectors.deleteBtn).style.display =
                "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
            document.querySelector(UISelectors.addBtn).style.display = "inline";
        },

        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display =
                "inline";
            document.querySelector(UISelectors.deleteBtn).style.display =
                "inline";
            document.querySelector(UISelectors.backBtn).style.display =
                "inline";
            document.querySelector(UISelectors.addBtn).style.display = "none";
        },

        getSelectors: function () {
            return UISelectors;
        },
    };
})();

// App Controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
    // Load Event Listeners
    const loadEventListeners = function () {
        // Get UI selectors
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document
            .querySelector(UISelectors.addBtn)
            .addEventListener("click", itemAddSubmit);

        // Disaple submit on enter
        document.addEventListener("keypress", (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();

                return false;
            }
        });

        // Edit icon event
        document
            .querySelector(UISelectors.itemList)
            .addEventListener("click", itemEditClick);

        // Update item event
        document
            .querySelector(UISelectors.updateBtn)
            .addEventListener("click", itemUpdateSubmit);

        // Back button item event
        document
            .querySelector(UISelectors.backBtn)
            .addEventListener("click", UICtrl.clearEditState);

        // Delete item event
        document
            .querySelector(UISelectors.deleteBtn)
            .addEventListener("click", itemDeleteSubmit);

        // Clear all items event
        document
            .querySelector(UISelectors.clearBtn)
            .addEventListener("click", clearAllItemsClick);
    };

    // Add item submit
    const itemAddSubmit = function (e) {
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();

        // Check for input
        if (input.name !== "" && input.calories !== "") {
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // Add item to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total cal to UI
            UICtrl.showTotalCalories(totalCalories);

            // Store in local storage
            StorageCtrl.storeItem(newItem);

            // Clear input fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    };

    // Click edit item
    const itemEditClick = function (e) {
        if (e.target.classList.contains("edit-item")) {
            // Get list item id(item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;

            // Break into an array
            const listIdArr = listId.split("-");

            const id = parseInt(listIdArr[1]);

            // Get entire item using id
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();
        }

        e.preventDefault();
    };

    // Item update submit
    const itemUpdateSubmit = function (e) {
        // Get input
        const input = UICtrl.getItemInput();

        // update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // Update UI
        UICtrl.updateListItem(updatedItem);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total cal to UI
        UICtrl.showTotalCalories(totalCalories);

        // Update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    };

    // Item delete submit
    const itemDeleteSubmit = function (e) {
        // Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total cal to UI
        UICtrl.showTotalCalories(totalCalories);

        // Delete item from local storage
        StorageCtrl.deleteItemStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    };

    // Clear items event
    const clearAllItemsClick = function () {
        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // Add total cal to UI
        UICtrl.showTotalCalories(totalCalories);

        // Delete all items from data structure
        ItemCtrl.clearAllItems();

        // Remove items from UI
        UICtrl.removeItems();

        // Clear from local storage
        StorageCtrl.clearStorage();

        // Hide ul
        UICtrl.hideList();
    };

    // Public methods
    return {
        init: function () {
            // Clear edit state / set initial state
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Check if any items
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // Add total cal to UI
            UICtrl.showTotalCalories(totalCalories);

            // Load event listeners
            loadEventListeners();
        },
    };
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize App
App.init();
