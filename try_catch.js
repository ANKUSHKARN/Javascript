let a=prompt("Enter first number")
let b=prompt("Enter second number")

/*
This is casual approach
 */
// let sum = parseInt(a)+parseInt(b)
// if(isNaN(sum)){
//     alert("You entered wrong input")    
// }
// else{
//     alert("The sum of first and second number is "+sum)   
// }



/*
This is good approach
*/
if(isNaN(a) || isNaN(b)){
    throw error("You did not entered number")
}
let sum = parseInt(a)+parseInt(b)
console.log("The sum of first and second number is "+sum)   




/*
Try catch kyo use karte hain: 
jab koi error handle karna ho aur program stuck ya crash na ho uske liye try catch use kiya jata hai
*/

// try {
//     console.log("The sum is ",sum*x)
// } catch (error) {
//     console.log("It's error bro")
// }
// finally{
//     console.log("Hello, I am finally")
// }





/*
Try catch me finally bhi hota hai. Jisko bola jata hai ki ye hamesha execute hoga. Lekin agar koi statement ko hamesha execute karwana hai to hum finally kyo use kare, hum sirf direct ek statement likh kar bhi usko execute karwa sakte hain. 
For example:
*/

// try {
//     console.log("The sum is ",sum*x)
// } catch (error) {
//     console.log("It's error bro")
// }
//  console.log("Hello, I am finally")




 /*
 Upar jo code block likha usme kahi bhi finally use nahi kiya lekin phir bhi last line execute hoga.
 To sawal ye hai ki agar koi line hi execute karni hai to finally ka use kyo kare, wo kaam to directly bhi kiya ja sakta hai ek statement pass karke.

 To iska jawab abhi aapko niche ki kuch lines milega...

 Finally ka use mainly tab aata hai jab hum try catch finally statement ko kisi function me use karte hain. For example:
 */

//  function main(){
//     let x = 1;
//     try {
//         console.log("The sum is ",sum*x)
//         return true
//     } catch (error) {
//         console.log("It's error bro")
//         return false
//     }
//     console.log("Hello, I am finally")
//  }

//  let d = main()


 /*
 Ye jo upar code block likha hua hai usme ek direct statement likhi hui hai jisme "Hello, I am finally" likha hai. Lekin agar mai function call karta hu to ye line execute nahi hogi kyoki jab function me koi bhi return value aa jati hai to function wahi par stop ho jata hai aur code block se bahar aa jata hai.
 
 To aise situation me hi kaam aata hai finally.
 agar "Hello, i an finally" ko finally statement me likha jaye to wo hamesha execute hoga even function return bhi kar de tab bhi.

 For example jo code upar likha hai usme last line run nahi hogi lekin jo code niche likha hai usme last line run hogi.

 */

 function main(){
    let x = 1;
    try {
        console.log("The sum is ",sum*x)
        return true
    } catch (error) {
        console.log("It's error bro")
        return false
    }finally{
        console.log("Hello, I am finally")
    } 
 }

 let d = main()
