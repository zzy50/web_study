// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;


const square = num => {
    return num * num;
}

const rollDie1 = () => {
    return Math.floor(Math.random() * 6) + 1
}

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)




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

const newMovies1 = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})


// IMPLICIT RETURN
const newMovies2 = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
