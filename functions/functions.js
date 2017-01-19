var arr = [-2, 4, -6, 2, 5]

function positive(n) {
    return n > -1;
}

var positives = arr.filter(positive);

function isEven(n) {
    return n % 2 == 0;
}

var even = arr.filter(isEven);

var arr = [1, 2, 3, 4, 5]

function square(n) {
    return n * n;
}

var squared = arr.map(square);

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var under70 = cities.filter(function(city) {
    return city.temperature < 70.0;
});

console.log(under70)

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var cityNames = cities.map(function(city) {
    return city.name;
});

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var goodJob = function(person) {
    console.log('Good job, ' + person + '!');
}

people.forEach(goodJob);

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people.sort();

console.log(people);

function compareNames(a,b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

people.sort(compareNames);


console.log(people);

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];


arr.forEach(function(i) {
    var sum = i.reduce(function(a,b) {
        return a + b;
    }, 0);
});

function compareNumber(a,b) {
    return a - b
}

arr.sort(compareNumber);
console.log(arr);
