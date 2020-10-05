// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// declare function called secretWord that takes argument of string
const secretWord = (string) => {
    // convert string to array
    // map through the array and check each letter and its index
    let stringToArr = string.split("")
    return stringToArr.map(letter => {
        // make sure all characters are lowercase for check
        let lowerCasedLetter = letter.toLowerCase()
        // reassign letters based on conditions:
        // if letter is a, assign to be 4; if e, assign to 3; if i, assign to 1; if o, assign to 0
        // try ternary operator instead of if..else if..else?
        return lowerCasedLetter === 'a'? letter = '4'
        : lowerCasedLetter === 'e'? letter = '3'
        : lowerCasedLetter === 'i'? letter = '1'
        :lowerCasedLetter === 'o'? letter = '0'
        // else if none of the above, just return the letter as is
        : letter
        // chain the join method to convert array back to string
    }).join("")
    
}

console.log(secretWord(secretCodeWord1))
console.log(secretWord(secretCodeWord2))
var secretCodeWord3 = "HELLONEIGHBOREENO"
console.log(secretWord(secretCodeWord3))



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// declare function includesA that takes an array of words as argument
const includesA = (array) => {
    // filter through all the words
    // if any word (which is a string) includes the letter a, keep it in the array
    return array.filter(word => word.toLowerCase().includes('a'))
}

console.log(includesA(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// declare function called fullHouseCheck that takes array as argument
const fullHouseCheck = (array) => {
    
    // I was kind of stumped on this one. During our usual Delta study session this weekend,
    // Brian kindly showed us his code. We all were able to work together to explain his code.
    // But I do want to preface and I say that I attempted some kind of process for my solution.
    // I just was unable to implement the logic into something working however.
    // I want to make sure that I include what I was planning on coding prior to seeing and
    // understanding Brian's solution! 
    // I also modified his solution a little bit to check for duplicates in a different way.

    // check to see what the unique values are
    // filter the array for only unique values
    let uniqueNum = array.filter((number, index) => array.indexOf(number) === index)
    // console.log(uniqueNum)
    // a full house only has 2 unique values
    // if the length of the array of unique values is greater than 2, return false
    if (uniqueNum.length !== 2){
        return false
    //check to see if there are 3 of the same number and 2 of the same number
    // first map through the values of the uniqueNum array
    // filter array looks at the user array and checks to see if that value is equal to current index of uniqueNum
    // basically filtering twice--once for the first unique value and another for the second unique value
} else if (uniqueNum.map((value, index) => array.filter(number => number === uniqueNum[index]).length === 2).includes(true)) {
    // check for pairs by finding if the length of the filter array is equal to 2
    // want the map to return boolean datatype (true if a pair exists and false if it does not)
    // (similarly we can check for triples instead since we expect only a triple and a pair of a full house)
    return true
    // this is important to check for presence of triple and pair, otherwise quad and single is falsely
    } else {
        return false
    }
    // NOTE: the above code looks terrible in ternary because of the chaining of methods so I avoided using ternary
}

console.log(fullHouseCheck(hand1))
console.log(fullHouseCheck(hand2))
console.log(fullHouseCheck(hand3))


// MY SECOND ATTEMPT USING DIFFERENT METHODS
// I originally just wanted to filter for a triple and a pair separately assigning booleans to separate variables
// if triple was true and if pair was true, then the array contains a full house
// otherwise if either variables are false, full house returns false
// I had such a hard time trying to do this elegantly (I had to hard code index values originally to count duplicates)
// But I furthered by research! (I didn't want to give up too soon even after seeing Brian's solution)
// I found a way to build an object! (a lot of work reading through docs and stackoverflow but
// it was a great learning experience)
// I also learned how to access the key by using the Object.keys(nameOfObject) method! (it's great btw)
// ALSO! counts[value] is the same as counts.values BUT for some reason in the forEach H-O-F, it doesn't
// recognize .value as the value parameter for forEach
// For this reason, I had to use bracket notation instead of dot notation... Idk why but I want to know why (haha)
// Is it because when using bracket notation, the property name/key has to be a String?
const fullHouse2 = (array) => {
    // create an empty array that we will eventually fill with the occurence of each number in the given array
    let counts = {}
    // value represents the number in the user's array (i.e. hand1, hand2, hand3)
    // use the forEach method to go through each value which will be the key in the object counts
    // count each occurence of the value by incrementing its count everytime it appears in the forEach loop
    // OR if the value appears for the first time, assign the key's value to 0 before incrementing
    array.forEach(value => counts[value] = (counts[value] || 0) + 1)
    // console.log(counts)
    // filter for keys that have a 3 as a value which are the hand's triple
    let triple = Object.keys(counts).filter(key => counts[key] === 3).length === 1
    // console.log(triple)
    // filter for keys that have 2 as a value which are the hand's pair
    let pair = Object.keys(counts).filter(key => counts[key] === 2).length === 1
    // console.log(pair)
    // Empty arrays [] are considered truthy so I had to fix the if-else statements--was getting undefined too
    // Boolean(triple) === true && Boolean(pair) === true ? true : false
    // I just decided to use .length instead because if the triple and single pair are true, there must only be a single value in the array
    // this will check for double pairs which we don't want and gives a falsey
    // did away with if and else statement because JS will do the evalution of true/false values
    // true && true => true
    // false && false => false
    return triple && pair
}
// WOO HOO! (I didn't give up haha. YAY.)
console.log(fullHouse2(hand1))
console.log(fullHouse2(hand2))
console.log(fullHouse2(hand3))