console.log("Hello world");
// undefined
//  NOTE-Null
// FIXME-when you stored a null value ina varaiable then check its datatype you will get 'object as its type
let lastnmae=null;
console.log(typeof lastnmae);


// NOTE - VAR
// NOTE in the case of of var we can redeclare and reassigned

//FIXME CASE  reassigned
var department='CS';
department='EC';
console.log(department);

// FIXME case2 declaration
var department='civil';
console.log(department);

// NOTE-Let
// NOTE in the case of let we can reassign its value but cannnot declare it
let college='techno';
college='MNIT';
console.log(college);

// REDECLARATION of the variable name
//  let college='GIT'
// NOTE- CONST
// NOTE in the case of the const we cannot reassigned the value and not declare the variable name;

// const emoji='@';
// emoji='$';
// console.log(emoji);//we get the error here