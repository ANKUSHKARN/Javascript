// let obj = {
//     a:1,
//     b:"Ankush"
// }
// console.log(obj)

// let animal={
//     eats:true,
//     living_being:true,
//     legs:4,
//     tail:1,
//     eyes:2,
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;
/*👆 is line ka matlab ye hai ki jo bhi properties animal me hogi wo sari properties rabbit me automatically add ho jayegi. baar baar rabbit me ja kar add karne ki jrurt nahi hai. */

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created...")
    }
    eats(){
        console.log(`${this. name} eats.`)
    }
    jumps(){
        console.log(this.name+" jumps.")
    }
}
/* class Lion extends Animal - ye likhne se jo bhi property ya function animal me hoga wo sab Lion class me bhi add ho jayega bina koi extra lines likhe, sirf extends ko use krke.
Note: extends is a keyword */
class Lion extends Animal{
    constructor(name){
        super(name)  
        console.log("Object is created...")
    }
    eats(){
        super.eats()
        console.log(`${this. name} eats and roar.`)
        
    }
}
let a = new Animal("Dog");
console.log(a)

let b = new Animal("Cat");
console.log(b)

let l = new Lion("shera");
console.log(l)
