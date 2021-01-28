// --AddEventListener, Count ProducQunatitiy, ProductPrice--//
function handleProductChange(product,isIncreseQuantity) {
  const productInput = document.getElementById(product + "-quantity");
  const productQuantity = parseInt(productInput.value);

  let productNewQuantity = productQuantity;
  if (isIncreseQuantity == true && productQuantity < 5) {
    productNewQuantity = productQuantity + 1;
  }
  if (isIncreseQuantity == false && productQuantity > 1) {
    productNewQuantity = productQuantity - 1;
  }
  productInput.value = productNewQuantity;


  let productTotalPrice = productNewQuantity;
  if(product == 'phone'){
    productTotalPrice = productNewQuantity * 1219;
  }
  if(product == 'case'){
    productTotalPrice = productNewQuantity * 59;
  }

  document.getElementById(product + "-price").innerText = "$" + productTotalPrice;
  calculateTotal();
}


// --Calcute Subtotal ,Tax & Toal--//
function calculateTotal(){
  const phoneQuantity = getInput("phone");
  const caseQuantity = getInput("case");

  const totalPrice = phoneQuantity * 1219 + caseQuantity * 59;
  document.getElementById("total-price").innerText = "$ " + totalPrice;

  const tax = totalPrice * 0.1;
  const taxAmount = Math.ceil(tax);
  document.getElementById("tax-amount").innerText = "$ " + taxAmount;

  const grandTotal = totalPrice + taxAmount;
  document.getElementById("grand-total").innerText ="$ " + grandTotal;
}
// --For avoiding Duplicate of CalcultateTotal()--//
function getInput(product){
  const productInput = document.getElementById(product + "-quantity");
  const productQuantity = parseInt(productInput.value);
  return productQuantity;

}

// // --Iphone 11--//
// function iphoneProduct(isIncreseQuantity) {
//   const phoneInput = document.getElementById("phone-quantity");
//   const phoneQuantity = parseInt(phoneInput.value);
//   let phoneNewQuantity = phoneQuantity;
//   if (isIncreseQuantity == true && phoneQuantity < 5) {
//     phoneNewQuantity = phoneQuantity + 1;
//   }
//   if (isIncreseQuantity == false && phoneQuantity > 1) {
//     phoneNewQuantity = phoneQuantity - 1;
//   }
//   phoneInput.value = phoneNewQuantity;
//   const phoneTotalPrice = phoneNewQuantity * 1219;
//   document.getElementById("phone-price").innerText = "$" + phoneTotalPrice;
// }


// // --Iphone Case--//
// function handleProductChange(isIncreseQuantity) {
//   const caseInput = document.getElementById("case-quantity");
//   const caseQuantity = parseInt(caseInput.value);
//   let caseNewQuantity = caseQuantity;
//   if (isIncreseQuantity == true && caseQuantity < 5) {
//     caseNewQuantity = caseQuantity + 1;
//   }
//   if (isIncreseQuantity == false && caseQuantity > 1) {
//     caseNewQuantity = caseQuantity - 1;
//   }
//   caseInput.value = caseNewQuantity;
//   const caseTotalPrice = caseNewQuantity * 59;
//   document.getElementById("case-price").innerText = "$" + caseTotalPrice;
// }



/*function calculateTotal(){
  const phoneInput = document.getElementById("phone-quantity");
  const phoneQuantity = parseInt(phoneInput.value);

  const caseInput = document.getElementById("case-quantity");
  const caseQuantity = parseInt(caseInput.value);
 
  const totalPrice = phoneQuantity * 1219 + caseQuantity * 59;
  document.getElementById("total-price").innerText = "$" + totalPrice;

  const tax = totalPrice * 0.1;
  const taxAmount = Math.ceil(tax);
  document.getElementById("tax-amount").innerText = "$ " + taxAmount;

  const grandTotal = totalPrice + taxAmount;
  document.getElementById("grand-total").innerText ="$ " + grandTotal;
}*/














