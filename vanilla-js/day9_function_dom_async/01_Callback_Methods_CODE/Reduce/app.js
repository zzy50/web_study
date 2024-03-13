const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total1 = 0;
for (let price of prices) {
    total1 += price
}
console.log(total1)

const total2 = prices.reduce((total, price) => {
    return total + price
})
console.log(total2)

const total3 = prices.reduce((total, price) => total + price)
console.log(total3)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120


const numbers = [1, 2, 3, 4, 5];
const totalWithWeight = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    console.log(`Processing index ${currentIndex}:`, array);
    return accumulator + currentValue * currentIndex;
}, 0);

console.log(totalWithWeight);