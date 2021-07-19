/** Return a new array with every item in array1 and array2. */
function extend(array1, array2) {

    let newArray1=[...array1]
    let newArray2=[...array2]

    return newArray1.concat(newArray2)      //merge two arrays

}
let array1=[1,2,3]
let array2=[5,7,9]

console.log(extend(array1,array2))

console.log(array1)
console.log(array2)

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

    let retObj={...obj}
    retObj[key]=val
    return retObj
}

let obj={name:'Nadir',age:21}
console.log(addKeyVal(obj,'address','Sukkur'))
console.log(obj)                                

/** Return a new object with a key removed. */
function removeKey(obj, key) {

    let retObj={...obj}
    delete retObj[key]          //removes key of object
    return retObj
}

let obj2={name:'ALI',grade:'A'}
console.log(removeKey(obj2,'grade'))
console.log(obj2)                                

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {

    let newObj={...obj1, ...obj2}
    console.log(newObj.firstName)
    return newObj

}

let person={firstName:'Nadir'}
let student={age:21}

console.log(combine(person,student))
console.log(person)
console.log(student)


/** Return a new object with a modified key and value. */
function update(obj, key, val) {

    let newObj={...obj}
    newObj[key]=val; 

    return newObj;

}

let person2={firstName:'Zeeshan'}

console.log(update(person2,'firstName','Zeeshan Ahmed'))
console.log(person2)


//Now we refactor these functions to be arrow functions



/** Return a new array with every item in array1 and array2. */
let extend=(array1, array2)=> {
    
    let newArray1=[...array1]
    let newArray2=[...array2]

    return newArray1.concat(newArray2)      //merge two arrays

}

let addKeyVal=(obj, key, val)=> {

    let retObj={...obj}
    retObj[key]=val
    return retObj
}

var addKeyVal=(obj, key, val)=> {

    let retObj={...obj}
    retObj[key]=val
    return retObj
}

const combine=(obj1, obj2)=> {

    let newObj={...obj1, ...obj2}
    console.log(newObj.firstName)
    return newObj
}

let update=(obj, key, val)=> {
    
    let newObj={...obj}
    newObj[key]=val; 
    return newObj;
}
