var ERROR_MSG = "Can\'t compare relationships because %1 %2 %3";
var ARE = "are";
var IS = "is";
var AND = " and ";
var NOT_A_NUMBER = "not a number";
var NOT_NUMBERS = "not numbers";


function getRelationship(x,y) {
  var error_msg = checkTypeError(x,y);
  if (error_msg === "") {
    if (x <= y) {
      if (x === y) {
        return "=";
      }
      return "<";
    } else if (x > y) {
      return ">";
    }
  }
  return error_msg;
}

function checkTypeError(x,y) {
  if (isNaN(x)) {
    if (isNaN(y)) {
      return errorMsg(x + AND + y,ARE,NOT_NUMBERS);
    }
    return errorMsg(x,IS,NOT_A_NUMBER);
  } else if (isNaN(y)) {
    return errorMsg(y,IS,NOT_A_NUMBER);
  }
  return "";
}
function errorMsg(str1,str2,str3) {
  return ERROR_MSG
         .replace("%1",str1)
         .replace("%2",str2)
         .replace("%3",str3);
}

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
console.log(getRelationship("that","the other"));
