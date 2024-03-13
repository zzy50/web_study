const numberPrimitiveType = 123456;
console.log(`numberPrimitiveType's value : ${ numberPrimitiveType }`);
console.log(`numberPrimitiveType's type : ${ typeof (numberPrimitiveType) }`);

const numberObjectType = new Number(123456);
console.log(`numberObjectType's value : ${ numberObjectType }`);
console.log(`numberObjectType's type is: ${ numberObjectType instanceof Number ? "Number" : "Not a Number" }`);

const bigIntPrimitiveType = 1n;
console.log(typeof(bigIntPrimitiveType));


const largeNumber = Number.MAX_SAFE_INTEGER + 1;
const largeNumberPlusOne = largeNumber + 1;

console.log(largeNumber); // 9007199254740992 (2^53)
console.log(largeNumberPlusOne); // 9007199254740992 

const largeBigInt = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
const largeBigIntPlusOne = largeBigInt + 1n;

console.log(largeBigInt.toString()); // "9007199254740992"
console.log(largeBigIntPlusOne.toString()); // "9007199254740993"
