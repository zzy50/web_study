const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;


meow2()
// THIS IS: Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
//  says MEOWWWW

cat.meow()
// THIS IS: {name: 'Blue Steele', color: 'grey', breed: 'scottish fold', meow: ƒ}
// Blue Steele says MEOWWWW