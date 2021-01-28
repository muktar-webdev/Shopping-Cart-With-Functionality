// /*// --Iphone 11--//


// // --Plus button event handler--//
// document.getElementById("phone-plus-btn").addEventListener("click",function(){
//   const phoneInput = document.getElementById("phone-quantity");
//   const phoneQuantity = parseInt(phoneInput.value);
//   const phoneNewQuantity= phoneQuantity + 1;
//   phoneInput.value = phoneNewQuantity;
//   const phoneTotalPrice = phoneNewQuantity * 1219;
//   document.getElementById("phone-price").innerText= "$" + phoneTotalPrice;
// })

// // --Minus button event handler--//
// document.getElementById("phone-minus-btn").addEventListener("click",function(){
//   const phoneInput = document.getElementById("phone-quantity");
//   const phoneQuantity = parseInt(phoneInput.value);
//   const phoneNewQuantity = phoneQuantity - 1;
//   phoneInput.value = phoneNewQuantity;
//   const phoneTotalPrice = phoneNewQuantity * 1219;
//   document.getElementById("phone-price").innerText ="$" + phoneTotalPrice;
// })
// */


// // --Plus button event handler--//
// document.getElementById("phone-plus-btn").addEventListener("click", function () {
//   handleProductChange(true);
//   });
 
//  // --Minus button event handler--//
//  document.getElementById("phone-minus-btn").addEventListener("click", function () {
//      handleProductChange(false);
//    });
// // --handle plus & minus button event handeler together--//
// function handleProductChange(isIncreseQuantity) {
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


// //--Plus button event handler--//
// /*document.getElementById("case-plus-btn").addEventListener("click",function(){
//   const caseInput = document.getElementById("case-quantity");
//   const caseQuantity = parseInt(caseInput.value);
//   const caseNewQuantity= caseQuantity + 1;
//   caseInput.value = caseNewQuantity;
//   const caseTotalPrice = caseNewQuantity * 59;
//   document.getElementById("case-price").innerText= "$" + caseTotalPrice;
// })

// // --Minus button event handler--//
// document.getElementById("case-minus-btn").addEventListener("click",function(){
//   const caseInput = document.getElementById("case-quantity");
//   const caseQuantity = parseInt(caseInput.value);
//   const caseNewQuantity = caseQuantity - 1;
//   caseInput.value = caseNewQuantity;
//   const caseTotalPrice = caseNewQuantity * 59;
//   document.getElementById("case-price").innerText ="$" + caseTotalPrice;
// })*/


// // --Iphone Case--//
// // --Plus button event handler--//
// // document.getElementById("case-plus-btn").addEventListener("click", function () {
// //   handleProductChange(true);
// //   });
 
// //  // --Minus button event handler--//
// //  document.getElementById("case-minus-btn").addEventListener("click", function () {
// //      handleProductChange(false);
// //    });
// // --handle plus & minus button event handeler together--//
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




// --details--//
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

