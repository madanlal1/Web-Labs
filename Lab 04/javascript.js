console.log('Task 01')
let number = '12'
let bool1 = true
let string_value = "Madan Lal"
var d = new Date();
let undeifiend
let array_of_interer = [1,21,3,3,4]
let array_of_string = ["madan " ,"javed " , "vikas"]
let mixed_array=[1,2,4,"madan"]
number1_int = parseInt(number)
number2_float = parseFloat(number)
let array_of_interer1  = parseInt(array_of_interer)
let array_of_string1 = array_of_string.toString()

let person ={
    Name:"MADAN LAL",
    id:"053-18-0005"
}

console.log(typeof number1_int)
console.log(typeof number2_float)
console.log(typeof bool1)
console.log(typeof string_value)
console.log(typeof date)
console.log(undeifiend)
console.log(typeof array_of_interer1)
console.log(typeof array_of_string1)
console.log(typeof mixed_array)
console.log(typeof person)


console.log('Task 02')
function Number(val)
{
}
function parse_int(val)
{
     return parseInt(val)
}
function parse_float(val)
{
    return parseFloat(val)
}

var abc = Number("1212a")
console.log("output : ",abc)

var abc = parse_int("1212a")
console.log("output : ",abc)

var abc = parse_float("1212a")
console.log("output : ",abc)


console.log('Task 03')


console.log('Task 04')
function odd_even(val)
{
    if(val%2===0)
    return 'even'
    else
    return 'odd'
}
ans = odd_even(12)
console.log("The nmber is : ",ans)


console.log('Task 05')
function cheker(num)
{
    let number
    let value
    if(num<=70)
    return "Good safe Driving"
    else if(num>70)
       {
         number = num-70
         value = number/5
        if(value >= 10)
        {
            return "License Suspended"
        }
        return "Speed Limit Crossed by Penalty Point : "+(number/5)
    }
        
}
console.log(cheker(200))


console.log('Task 06')
function find_Grade(array)
{
    let sum_of_marks=0
  for(i=0;i<array.length;i++)
  {
      sum_of_marks+=array[i]
  }
  console.log("Total Marks : ",sum_of_marks)
  let average_marks = sum_of_marks/array.length
  console.log("AVERAGE : ",average_marks)
  if(average_marks > 90 )
  {
      console.log("Grede : A")
  }
  else 
  {
      console.log("GRAde : B")
  }
}
let array=[95,85,58,77]
find_Grade(array)


console.log('Task 07')
reverse = function(array)
{
    let a=""
    for(i=array.length-1;i>=0;i--)
    {
        a+=array[i]
    }
    return a
}
abc2 = reverse("Madan Lal")
console.log(abc2)


console.log('Task 08')


console.log('Task 09')
let date1 = new Date("3/16/2021")
let date2 = new Date("4/5/2025")
let final_date = new Date(date2-date1)
console.log(final_date)


console.log('Task 10')
let mobile = {
    Company_name : "Google",
    starttup  : 2018,
    mobile_type : {
        Name: "Iphone",
        price : 10000
    }
}
if (mobile===null)
{
    console.log("is Null")
}
else
{
    console.log("Comany Name  : ",mobile.Company_name)
   console.log("Mobile Name : ",mobile.mobile_type.Name)
}


console.log('Task 11')
function MinimumValue(array)
{
    let min = array[0]
   for(let i=0;i<array.length;i++)
   {
        if(array[i]<min)
        {
            min=array[i]
        }
   }
   for(let i=0;i<array.length;i++)
   {
        if(array[i]===min)
        {
            array[i]=-1
        }
    }
console.log(array)
}
list=[2,33,4,22,88,99,77,2]
MinimumValue(list)







