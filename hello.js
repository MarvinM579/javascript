function Hello(name) {
    console.log('Hello, ' + name + '!');
}

Hello('Mustache')

function Hello2(name) {
    name = name || 'world'
    console.log('Hello,' + name + '!')
}

Hello2('Mustache')

function madlib(name, subject) {
    console.log(name + "'s favorite subject is " + subject + ".")
}

madlib('Anushka', 'art')

function tipAmount(bill, type) {
    var tip = 0
    if (type == 'good') {
        tip = (bill * .20);
    } else if (type == 'fair') {
        tip = (bill * .15);
    } else if (type == 'bad') {
        tip = (bill * .10);
    }
    console.log(tip)
}

tipAmount(300, 'good')


function totalAmount(bill, type) {
    var tip = 0
    if (type == 'good') {
        tip = (bill * .20);
    } else if (type == 'fair') {
        tip = (bill * .15);
    } else if (type == 'bad') {
        tip = (bill * .10);
    }
    var amount = (tip + bill)
    console.log(amount);
}

totalAmount(100, 'fair')

function printNumbers(i, end) {
    while (i<=end) {
        console.log(i);
        i++;
    }
}

printNumbers(1, 10)

function rockPaperScissors(first, second) {
    if (first == second) {
        console.log('Draw');
        return;
    }
    if (first == 'rock') {
        if (second == 'paper'){
            console.log('player 2');
            return;
        }
        if (second == 'scissors'){
            console.log('player 1');
            return;
        }
    }
    if (first == 'paper') {
        if (second == 'rock'){
            console.log('player 1');
            return;
        }
        if (second == 'scissors'){
            console.log('player 2');
            return;
        }
    }
    if (first == 'scissors') {
        if (second == 'rock'){
            console.log('player 2');
            return;
        }
        if (second == 'paper'){
            console.log('player 1');
            return;
        }
    }
}

rockPaperScissors(rock, paper)

function printSquare(n) {
    var lines = 0
    var str = '*'
    while (lines < n) {
        lines++;
        console.log(str.repeat(n));
    }
}

printSquare(5)
