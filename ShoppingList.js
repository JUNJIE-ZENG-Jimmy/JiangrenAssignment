//1. creating initial array
let fruitList = ['Apple', 'Banana', 'Peach'];
console.log('Initial Array: ', fruitList);

//2. Adding new items into the end of array
fruitList.push('Watermelon', 'Pineapple');
console.log('Two items added: ', fruitList);

//3. Deleting the last item from the array
fruitList.pop();
console.log('Last item popped out:', fruitList);

//4. Notice function for list length more than 5
function moreThanFive(listArg) {
    if (listArg.length > 5) {
        console.log("你的购物车满了");
    } else {
        console.log("你的购物车还没满");
    }
}
// moreThanFive(fruitList);

//5. Loop that output the items in list
for (let i = 1; i <= fruitList.length; i++) {
    console.log(i + '. ', fruitList[i - 1]);
}

//6. Check if object in list function
function ifInList(objArg) {
    if (fruitList.includes(objArg.name)) {
        console.log('The ' + objArg.name + 'is in the list.');
    } else {
        console.log('The ' + objArg.name + 'is not in the list.');
    }
}

//7. Create Object:
let itemA = {
    name: 'banana',
    price: 5,
    quantity: 1
};
//ifInList(itemA);
