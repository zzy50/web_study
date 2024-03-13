console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);


// HELLO!!!...
// GOODBYE!!
// undefined
// 0.2445060109500934
// ...are you still there?
// 0.051612537119162916
// 0.15405167118023733
// 0.4766224996900448
// 0.6838195260550446
// 0.8700507933807129
// 0.3422113834794751