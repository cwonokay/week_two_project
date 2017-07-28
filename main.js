// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
let sum = 0

function question1 () {
  for (var i = 0; i < data.length; i++) {
     sum += data[i].price;
  }

  let avg = sum/data.length;
  console.log("The average price is $" + avg);
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
let range = []
function question2 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18){
      range.push(data[i].title);
    }
  }
  console.log(range);
}




// 3: Which item has a "GBP" currency code? Display it's name and price.

function question3 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code == "GBP"){
  console.log(data[i].title + ' costs ' +  data[i].price + ' pounds. ');
  }
}
}


// 4: Display a list of all items who are made of wood.

let wood = [];
function question4 () {

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].materials.length; j++) {
    if(data[i].materials[j] === "wood"){
      wood.push(data[i].title);
  }

  }

}

  console.log(wood);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
let more = []
function question5 () {

  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length<= 8) {

      more.push(data[i].title,data[i].quantity,data[i].materials)

    }
  }
console.log(more)
}


// 6: How many items were made by their sellers?
let items = 0
function question6 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made == "i_did"){
      items = items + 1
    }
  }
  console.log(items  + "items were made by their sellers")
}
