let inquirer = require('inquirer');
let mysql = require('mysql');

//declared global to use later on
let revenue;
let currentDepartment;

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "WaTeRpOlO9",
  database: "Bamazon_DB"
});

//test connection to mysql database and console log 
connection.connect(function(error){
	if (error) throw error;
  console.log("connected")
  displayProducts();
  //place callback functions here?
});



// Displays all items available in store and then calls the place order function
function displayProducts(){
	connection.query('SELECT * FROM products', function(error, result){
		if (error) throw error;
		console.log("===============================================Tony's Store=====================================================");

		for(i = 0; i < result.length; i++){
			console.log("Item ID: " + result[i].item_id + ", Department Name: " + result[i].department_name + ", Product: " + result[i].product_name + ", Price: " + "$" + result[i].price + ", Stock Available: " + result[i].stock_quantity)
    }
		console.log("================================================================================================================");
		customerOrder();
		})
}

//Prompts the user to place an order, fulfills the order, and then calls the new order function
function customerOrder(){
  inquirer
  .prompt([{
		name: "purchaseId",
    message: "Enter the ID of the product you would like to purchase",
    type: 'input',
    //use inquirer validate method
		validate: function(value){
			let valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return "Please enter a valid Product ID"
		}
	},{
		name:"purchaseQuantity",
    message: "How much of this product would you like to order?",
    type: 'input',
		validate: function(value){
			let valid = value.match(/^[0-9]+$/)
			if(valid){
				return true
			}
				return "Please enter a numerical value"
		}
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE item_id = ?', [answer.purchaseId], function(error, result){
		if(answer.purchaseQuantity > result[0].stock_quantity){
			console.log("We are out of stock");
			newOrder();
		}
		else{
			revenue = result[0].price * answer.purchaseQuantity;
			currentDepartment = result[0].department_name;
			console.log("We appreciate your order!" + "You owe $" + revenue);
			//update products table
			connection.query('UPDATE products SET ? Where ?', [{
				stock_quantity: result[0].stock_quantity - answer.purchaseQuantity
			},{
				id: answer.purchaseId
			}], function(error, result){});
			newOrder();
		}
	})

}, function(error, result){})
};

//Shopper can place additional orders or stop shopping
function newOrder(){
	inquirer.prompt([{
		type: "confirm",
		name: "choice",
		message: "Interested in buying more?"
	}]).then(function(answer){
		if(answer.choice){
			customerOrder();
		}
		else{
			console.log("Thank you!");
			connection.end();
		}
	})
};




