let obj = {
    'name': 'Alice',
    'age': 30
};
let jsonStr = JSON.stringify(obj);
console.log(jsonStr) // no Error


let jsonString = "{'name':'Alice','age':30}"; // SyntaxError: Expected property name or '}' in JSON at position 1
// let jsonString = '{"name":"Alice","age":30}'; // no Error
try {
    let parsed = JSON.parse(jsonString);
} catch (e) {
    console.error("Parsing error:", e);
}
