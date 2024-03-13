const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles_map1 = numbers.map(function (num) {
    return num * 2;
})
doubles_map1
// (20) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

const doubles_map2 = numbers.map(function (num) {
    num * 2;
})
doubles_map2
// (20) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, \
// undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

const doubles_forEach = numbers.forEach(function (num) {
    return num * 2;
})
doubles_forEach
// undefined


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})


