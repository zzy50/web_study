let str = "Hello";
console.log(str.toUpperCase());  // "HELLO"

let numb = 1.315;
console.log(numb)
let numb2 = 82345678912345.11;
console.log(`82345678912345.11  : ${numb2}`)
let numb3 = 823456789123456.11;
console.log(`823456789123456.11 : ${numb3}`)
let numb4 = 8234567891234567.11;
console.log(`8234567891234567.11: ${numb4}`)
// 박싱(boxing):
// js코드에서 Primitive 타입으로부터 메소드(ex. toUpperCase)를 호출한다면(=Object 타입으로서 취급한다면) 
// 브라우저에서 내부적으로 잠시 str 값을 String 타입로 변환하고 toUpperCase를 실행한 후 다시 Primitive 타입으로 되돌림