/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = {
    category:'',
    totalSpent:0
  }
  let list = [];
  transactions.forEach(element => {

    if (!(list.some(ele =>{
      if (ele.category == element.category){
        ele.totalSpent += element.price;
      }
      return ele.category == element.category
    }))){
      obj.category = element.category;
      obj.totalSpent = element.price;
      list.push({ ...obj})
    }
  });

  return list;

}


module.exports = calculateTotalSpentByCategory;
