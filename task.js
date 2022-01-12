// Q.1 count characters of string
// let string = "Neoquant solution"

// let obj = {}

// for(let i = 0; i<string.length ; i++){

//     let char = string.charAt(i)
//     if(obj[char]!= " "){
//         if(obj[char]){
//             obj[char]++
//         }else{
//             obj[char]=1
//         }
//     }
  
// }

// console.log("count",obj)


// Q.2 reverse string example one
// let string = "neoquant solution"
// let str2 = string.split("")
// let reverse = []

// for(let i =string.length - 1 ; i>=0; i-- ){
// if(str2[i] !=" "){
//     reverse.push(str2[i])

// }
// }
// console.log("reverse string",reverse)


// reverse string example two
// let string = "neoquant solution"
// let reverse = ""

// for(let i =string.length - 1 ; i>=0; i--){
//     if(string[i] !=" "){
//     reverse += string[i]
//     }
// }
// console.log(reverse)



// Q . 3
let object = [
    {
        name:"rasika",
        age:24,
        add:"koperkhairane"
    },
    {
        name:"amruta",
        age:22,
        add:"ghansoli"

    },
    {
        name:"prajakta",
        age:23,
        add:"koperkhairane"
    },
  
]

let temp = []
let sub = []

let array = object.map(element =>element.age).sort()
console.log("sort age",array)
console.log(" max age" + " " + array[array.length - 1])
console.log(" min age" + " " + array[0])


let demo = object.reduce((sum,current)=>{
    return sum + current.age
},0)
console.log("sum of age = " +demo)


let reversenames = object.map(element =>element.name).sort().reverse()
console.log("reverse name",reversenames)

// Q. 4 group age and names
// let name = object.map(a =>{
//     return a.name
// })
// console.log(name)

// let ages = object.map(a =>{
//     return a.age
// })
// console.log(ages)


for(let i=0; i<object.length;i++){
    temp.push(object[i].age)
    sub.push(object[i].name)
}
console.log("Group Age ",temp);
console.log(" Group Name",sub);


