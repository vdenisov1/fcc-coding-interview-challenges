/*

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new 
item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    let updatedInventory = arr1.slice();

    for (let newInventoryItem of arr2) {
        let newQuantity = newInventoryItem[0];
        let newItemName = newInventoryItem[1];
        let foundItem = false;

        for (let inventoryItem of updatedInventory) {
            let itemName = inventoryItem[1];

            if (itemName === newItemName) {
                inventoryItem[0] += newQuantity;
                foundItem = true;
                break;
            }
        }

        if (!foundItem) {
            updatedInventory.push([newQuantity, newItemName]);
        }
    }

    updatedInventory.sort((a, b) => {
      return (a[1] < b[1]) ? -1 : (a[1] > b[1]) ? 1 : 0;
    });

    return updatedInventory;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

[
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"]
];

console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
