var products = ["Hellion ($8.00)","Hollow Knight($22.00)", "Hero Siege ($6.00)","Hammerwatch ($8.00)", "Chronicon ($10.00)"];
var labels = document.getElementsByTagName("label"); //array for making the new labels
function processProducts(){
  for (var i = 0; i<4; i++){
    labels[i].innerHTML = products[i]; //creates the labels from the products array
  }
}

if (window.addEventListener){
  window.addEventListener("load", processProducts, false);
} else if(window.attachEvent){
  window.attachEvent("onload",processProducts);
}
//function to add values of selected check boxes and display total
function calcTotal(){
  var itemTotal=0; //stores a running total
  var salesTaxRate = .06;
  var items = document.getElementsByTagName("input"); //creates an array of input elements
  for (var i=0; i<5; i++) { //i is the counter, initialized at 0 and stops when i=5
    if(items[i].checked) { //check to see if each of the elements in the array is checked
      itemTotal += (items[i].value * 1); //if it is checked then add to running total
    } //if closing brace
  } //for closing brace
  itemTotal *= 1 + salesTaxRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);
} //function closing brace
var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener) {
  submitButton.addEventListener("click", calcTotal, false);
} else if (submitButton.attachEvent) {
  submitButton.attachEvent("onclick", calcTotal);
} //I didn't add a backwards comp event listener, hope thats okay.