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

// console.log(obj)


// reverse string
// let string = "neoquant solution"
// let str2 = string.split("")
// let reverse = []

// for(let i =string.length - 1 ; i>=0; i-- ){
// if(str2[i] !=" "){
//     reverse.push(str2[i])

// }
// }
// console.log(reverse)

// let string = "neoquant solution"
// let reverse = ""

// for(let i =string.length - 1 ; i>=0; i--){
//     if(string[i] !=" "){
//     reverse += string[i]
//     }
// }
// console.log(reverse)




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


console.log(array)
console.log(" max age" + " " + array[array.length - 1])
console.log(" min age" + " " + array[0])


let demo = object.reduce((sum,current)=>{
    return sum + current.age
},0)
console.log("sum = " +demo)


let reversenames = object.map(element =>element.name).sort().reverse()
console.log(reversenames)


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
console.log(temp);
console.log(sub);


