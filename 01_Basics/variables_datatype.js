// /*
// Types of Variables - 
// 1) const
// 2) let
// 3) var
// */

// const cityName = "Mumbai"
// let rollNumber = 121
// var employmentStatus = ["Developer","Tester"]

// // console.log(cityName)
// // console.log(rollNumber)
// // console.log(employmentStatus)

// console.table([cityName,rollNumber,employmentStatus])

// /*
// Types of Datatype
// 1) number = 2 ^ 53
// 2) bigint = for large numbers
// 3) string = "assembly of characters"
// 4) boolean = true or false
// 5) null = stand alone value (type = object)
// 6) undefined = kindda place holder for a value which is not defined yet (type = undefined)
// 7) symbol = uniquness
// */

// console.table([typeof cityName,typeof rollNumber,typeof employmentStatus])


// conversion datatypes

// let score = 35
// let setScore = String(score)  // convert String
// let setScore = Boolean(score)  // convert Boolean
// let setScore = Null(score)  // convert Null => Null is not defined
// let setScore = undefined(score)  // convert undefined => undefined is not a function
// console.log(setScore)
// console.log(typeof setScore)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (non-Primitive)

// Stack
// let company = "Reliance"

// let company2 = company
// company2 = "Adani"

// console.log(company)
// console.log(company2)

// Heap
let student = {
    name: "Arjun",
    age: 22,
    email: "arjun@gmail.com"
}

let student2 = student
student2.email = "arjun@google.com"

console.log(student)
console.log(student2)