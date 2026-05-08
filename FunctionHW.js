// ========Function Declaration======

// let name="world"
//function userprofile(name)
//{
// console.log(`hello ${name}`)

//}
//userprofile(name)

// =====Arrow Function====

//let double =(b) =>{
//   let c=(b*b)
   // console.log(`the value of b is ${c}`)
  //  return c
//}
//console.log(`this is a arrow function ${double(2)}`) 

// ======Anonymous Function====

//setTimeout(function() {
 //   console.log("This message is printed after 2 seconds");
//}, 2000);


// =====Call back function======


function getUserData(x)
{
   setTimeout(function ()
   {
    x();
   },3000);
}
function callback()
{
    console.log('print after 3 seconds');
}
getUserData(callback);






