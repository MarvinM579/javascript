var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
}

console.log("Alice: " + phonebookDict.Alice);

phonebookDict.Kareem = '938-489-1234.'
delete phonebookDict.Alice
phonebookDict.Bob = '968-345-2345'

for (var name in phonebookDict) {
    var number = phonebookDict[name];
    console.log(name + ': ' + number);
}


function histogram(str) {
    var letters = {}
    for (var x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x)
        letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
    }

    for (var key in letters) {
        console.log(key + ' : ' + letters[key]);
    }
}

histogram('pneumonoultramicroscopicsilicovolcanoconiosis')
