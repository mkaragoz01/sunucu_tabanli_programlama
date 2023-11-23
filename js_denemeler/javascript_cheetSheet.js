// for (var i=0;i<10;i++){
//     console.log(i+": "+i*3)
// }

// var i=1;
// while(i<100){
//     i*=2;
//     console.log(i)
// }

// var i=1;
// do{
//     i*=2;
//     console.log(i)
// }while(i<100)


// for (var i = 0; i < 10; i++) {
//     if (i == 5) { break; }else{ i++ }         
//     console.log(i);       
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) { continue; }       // skips the rest of the cycle
//     console.log(i);       // skips 5
// }

// function addNumber(a,b){
//     return a+b;
// }

// x = addNumber(5,7)
// console.log(x)

// switch (new Date().getDay()){
//     case 4:
//         console.log("Perşembe")
//         break;
//     case 5:
//         console.log("Cuma")
//         break;
//     case 6:
//         console.log("Cumartesi")
//         break;
//     default:
//         console.log(new Date().getDay() +" Gün Bilinmiyor.")
// }

// var age = 18;                           // number 
// var name = "Jane";                      // string
// var name = {first:"Jane", last:"Doe"};  // object
// var truth = false;                      // boolean
// var sheets = ["HTML","CSS","JS"];       // array
// var a; typeof a;                        // undefined
// var a = null;                           // value null

// console.log(sheets[1])
// console.log(name.first)


// var student = {                 // object name
// firstName:"Jane",           // list of properties and values
// lastName:"Doe",
// age:18,
// height:170,
// fullName : function() {     // object function
//    return this.firstName + " " + this.lastName;
// }
// }; 

// student.age = 19;           // setting value
// student["age"] += 1;
// name = student.fullName();

// console.log(student)




// var str2="BC"
// var abc = "abcdefghijklmnopqrstuvwxyz";
// var esc = 'I don\'t \n know';   // \n new line
// var len = abc.length;           // string length


// var a =abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
// console.log(a)

// var b=abc.lastIndexOf("lmno");        // last occurance
// console.log(b)

// var c=abc.slice(3, 6);                // cuts out "def", negative values count from behind
// console.log(c)

// var d=abc.replace("abc","123");       // find and replace, takes regular expressions
// console.log(d)

// var e=abc.toUpperCase();              // convert to upper case
// console.log(e)

// var g=abc.toLowerCase();              // convert to lower case
// console.log(g)

// var h=abc.concat(" ", str2);          // abc + " " + str2
// console.log(h)

// var i=abc.charAt(2);                  // character at index: "c" 
// console.log(i)

// var j=abc[2];                         // unsafe, abc[2] = "C" doesn't work
// console.log(j)

// var k=abc.charCodeAt(2);              // character code at index: "c" -> 99
// console.log(k)

// var l=abc.split("l");                 // splitting a string on commas gives an array
// console.log(l)

// var m=abc.split("");                  // splitting on characters
// console.log(m)

// var x=128;
// x.toString("16");               // number to hex(16), octal
// console.log(x)

//ARRAYS
// var dogs = ["Bulldog", "Beagle", "Labrador"]; 
// var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

// var x=dogs[0] = "Bull Terier";    // change the first item
// console.log(x)

// for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
// console.log(dogs[i]);
// }

// dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
// dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
// dogs.pop();                             // remove last element
// dogs.push("Chihuahua");                 // add new element to the end
// dogs[dogs.length] = "Chihuahua";        // the same as push
// dogs.shift();                           // remove first element
// dogs.unshift("Chihuahua");              // add new element to the beginning
// delete dogs[0];                         // change element to undefined (not recommended)
// dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
// var animals = dogs.concat("cats","birds");  // join two arrays (dogs followed by cats and birds)
// dogs.slice(1,4);                        // elements from [1] to [4-1]
// dogs.sort();                            // sort string alphabetically
// dogs.reverse();                         // sort string in descending order
// x.sort(function(a, b){return a - b});   // numeric sort
// x.sort(function(a, b){return b - a});   // numeric descending sort
// highest = x[0];                         // first item in sorted array is the lowest (or highest) value
// x.sort(function(a, b){return 0.5 - Math.random()});     
// console.log(dogs)

// var x = "Mustafa"; // get input value
// try { 
//     if(x == "")  throw "empty";                 // error cases
//     if(isNaN(x)) throw "not a number";
//         x = Number(x);
//     if(x > 10)   throw "too high";
//     }
// catch(err) {                                    // if there's an error
//     //document.write("Input is " + err);          // output error
//     console.error(err);                         // write the error in console
// }
// finally {
//              // executed regardless of the try / catch result
// } 