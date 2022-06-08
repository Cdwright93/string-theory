function xify (param){
let index = 0;
let newWord = []; 
while (index < param.length) {
    newWord.push('x');
    index++;
}
console.log(newWord);
}

xify("apple")

function yellingChars (array1){
    let yelling = [];
    for (const letter of array1) {
        yelling.push(letter+"!")
    }
    console.log(yelling)
}

yellingChars("banana")

function indexedChars (param){
    let index = 0;
    let newWord = []; 
    while (index < param.length) {
        for (const letter of param) {
            newWord.push(letter+`${index}`)
            index++;
        }
    }
    console.log(newWord);
    }

indexedChars("banana")

let param = 'the arsonist had oddly? shaped feet.'
let newSentence = []
function exclaimIt (param, newSentence){
for (let index = 0; index < param.length; index++) {
    const element = param[index];
    if (element != '.'){
        if(element != '?'){
        newSentence.push(element)}
        }
    if (element == '.'){
    newSentence.push('!')
    }
    if (element == '?'){
    newSentence.push('!')
    }
    }
console.log(newSentence)
}
exclaimIt(param, newSentence)

let para = 'the arsonist had oddly shaped feet.'
let newSentence1 = []
function truncate (para, newSentence1){
for (let index = 0; index <= 15; index++) {
    const element = para[index];
    if (index < 15){
    newSentence1.push(element)
    }
    if (index == 15){
    newSentence1.push('...')
    }
}
console.log(newSentence1)
}
truncate(para, newSentence1)

let firstName = "Clayton"
let lastName = "Wright"

function ciEmailify(firstName,lastName){
    let email= firstName.toLowerCase()+'.'+lastName.toLowerCase()+'@codeimmersives.com'
    console.log(email)
}

ciEmailify(firstName,lastName)


let vowelArray = 'the arsonist had oddly? shaped feet.'
let vowels = []
function onlyVowels (vowelArray, vowels){
    for (let index = 0; index < vowelArray.length; index++) {
        const element = vowelArray[index];
        if (element == 'a'){
            vowels.push('a')
        }
        if (element == 'e'){
            vowels.push('e')
        }
        if (element == 'i'){
            vowels.push('i')
        }
        if (element == 'o'){
            vowels.push('o')
        }
        if (element == 'u'){
            vowels.push('u')
        }
    }
    return vowels
}

console.log(onlyVowels(vowelArray,vowels))


function reverse(array){
    let reversedString = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        reversedString.push(element)
    }
    console.log(reversedString.reverse())
}
reverse("banana")