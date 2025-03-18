let x = 5;
let y = 4;

function add() {
    console.log([x + y, x - y]); 
    return {
        sum: x + y,
        difference: x - y
    }; 
}

add();
