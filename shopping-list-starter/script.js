// function addItem() {
  //   // get the value of the new item to add to the list
  //   const newItem = document.getElementById("new-item-text");
  //   const newItemValue = newItem.value;

  //   // Add that item to our shopping list
  //   const newListItem = document.createElement("li");
  //   newListItem.innerHTML = newItemValue;

  //   document.getElementById("shopping-list-items").appendChild(newListItem);

  //   // clear my input field
  //   newItem.value = '';
  // }

  const shoppingListItems = ["Donuts", "Cupcakes", "Coffee"];

  function addItem() {
    const newItem = document.getElementById("new-item-text");
    shoppingListItems.push(newItem.value);
    updateItems();
     // clear my input field
    newItem.value = '';
  }
  
  function updateItems() {
    const shoppingList = document.getElementById("shopping-list-items");
    shoppingList.innerHTML = "";
    for (let item of shoppingListItems) {
      const li = document.createElement("li");
      li.innerHTML = item;
      shoppingList.appendChild(li);
    }
  }
  
  updateItems();
  
  function clearList() {
    const shoppingList = document.getElementById("shopping-list-items");
    shoppingList.innerHTML = "";
  
  }
  
  function keypress(inputId, buttonId) {
    const newItem = document.getElementById(inputId);
    newItem.addEventListener("keypress",function(event) {
      if (event.key == "Enter") {
        // no default currently set, but good practice
        event.preventDefault();
        document.getElementById(buttonId).onclick();
      }
    })
  }
  
  keypress("new-item-text","new-item-button");