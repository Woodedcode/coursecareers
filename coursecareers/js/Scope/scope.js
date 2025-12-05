// // Global scope

// let x = 2

// // local scope
// function accessX() {
//     x = 4;

//     function test() {
//         console.log(x)
//     }
//     test()
// }
// accessX()
// console.log(x)

function test(x) {
    if (x === 3) {
        let val = 5;
    } else if (x === 4) {
        let val = 6;
    }else {
        let val = 0
    }

    console.log(val)
}

test(3)