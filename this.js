// let i = '#'

// while (i.length < 8) {
//     console.log(i)
//     i = i + '#'
// }

// for (i=1; i<101; i++) {
//     if (i%3 === 0 && i%5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i%3 === 0) {
//         console.log('Fizz')
//     } else if (i%5 === 0) {
//         console.log('Buzz') 
//     } else 
//         console.log(i)
// }

// var foo = 0
// switch(foo) {
//     case -1:
//         console.log('-1')
//         break
//     case 0:
//         console.log('zero')
//     case 1:
//         console.log(1)
//         break
//     case 2:
//         console.log(2)
//         break
//     default:
//         console.log('default')
// }
size = 4
board = ""

for (i=0; i<size; i++) {
    for (j=0; j<size; j++) {
        if ((i+j)%2 == 0)
            board += " "
        else
            board += "#"
    }
    board += "\n"
} 

console.log(board)