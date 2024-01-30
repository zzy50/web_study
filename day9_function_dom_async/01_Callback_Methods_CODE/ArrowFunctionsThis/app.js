const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // fullName: () => {
    //     console.log(`fullName: ${this}`)
    //     console.log(`fullName: ${this.firstName} ${this.lastName}`)
    // },
    shoutName: function () {
        // setTimeout( function() {
        //     console.log(`setTimeout: ${this}`);
        //     console.log(`setTimeout: ${this.fullName()}`)
        // }, 500)
        setTimeout(() => {
            console.log(`setTimeout: ${this}`);
            console.log(`setTimeout: ${this.fullName()}`)
        }, 500)
    }
}
    
//keyword 'this' in arrow functions refers to the value of 'this' when the function is created
person.shoutName()