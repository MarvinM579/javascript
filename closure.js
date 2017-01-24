// regular counter
function counter() {
    var count = 0;
    function actuallyCount() {
        count++;
        return count;
    }
    return actuallyCount;
}


// counter that takes arguement as the starting point
function counter(n) {
    var count = n;
    function actuallyCount() {
        count++;
        return count;
    }
    return actuallyCount;
}

var count1 = counter(5);
var count2 = counter(7);

count1();
count1();
count2();
count2();

function battleShip(){

    var board = [
        ['o', ' ', 'o', 'o', ' '],
        ['o', ' ', ' ', ' ', ' '],
        ['o', ' ', 'o', 'o', 'o'],
        ['o', ' ', ' ', ' ', ' '],
        [' ', ' ', 'o', ' ', 'o'],
        [' ', ' ', 'o', ' ', 'o']
    ];

    function fire(row, col) {
        if (board[row][col] === 'o') {
            board[row][col] = 'x'
            return 'Hit!'
        } else {
            return 'Miss'
        }
    }
    return fire;
}
var fire = battleShip();

console.log(fire(0,1));
