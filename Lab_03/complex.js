let result;
const add = (obj1, obj2) => ({
    re: obj1.re + obj2.re,
    im: obj1.im + obj2.im,
}
);

const subtract = (obj1, obj2) => ({
    re: obj1.re - obj2.re,
    im: obj1.im - obj2.im,
});

const complexModule = (complexNumber) => {
    return Math.sqrt(complexNumber.re ** 2 + complexNumber.im ** 2);
}

const toString = (complexNumber) => {
    return `Re = ${complexNumber.re} Im = ${complexNumber.im}`
}

const first = {
    re: 12,
    im: 15
}

const second = {
    re: 2,
    im: 6,
}

result = add(first, second)
console.log("Add: ", result);
result = subtract(result, first);
console.log("Sub: ",result);
const resultModule = complexModule(result);
console.log("Module: ", resultModule);


console.log("-----------------------------")
const randomStudent = (studentsArray) => {
    return studentsArray[Math.floor(Math.random() * studentsArray.length)];
}
const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];
console.log(randomStudent(students))

console.log("-----------------------------")

const randomNumbers = (numbersAmount, delay=1000) => {
    let i = 0;
    const intervalId = setInterval(() => {
        console.log(`${i}: `,Math.random());
        i++;
        if(i === numbersAmount) {
            clearInterval(intervalId);
        }
    }, delay)
}

randomNumbers(10, 3000)

const SERVER_DELAY = 3000;
const httpConnect = (username) => {
    const intervalId = setInterval(() => {
        console.log(`Hello ${username}`)
    }, SERVER_DELAY)
}


