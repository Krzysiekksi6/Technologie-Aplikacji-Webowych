
console.log(`Pierwszy skrypt - działa`);

const firstArray = [3,6,12,6,3,1];

console.log(firstArray);
firstArray.pop();
console.log(`Length: ${firstArray.length}, Array:`, firstArray);

const addElementToArray = (array, index, element) => {
    if (index === 0) {
        array.unshift(element);
        return  array
    } else if (index === 1) {
         array.push(element)
        return array;
    } else {
        return null;
    }
}

const secondArray = [1,2,3];
console.log("Start", secondArray);
const result1 = addElementToArray(secondArray,0,1500);
console.log("First: ",result1)
const result2 = addElementToArray(secondArray, 1, 14);
console.log("Last: ", result2);

const splitText = (text) => {
    return text.split('.').map(el => el**2).join('.');
}
const splitResult = splitText("1.2.3.4.5.6.7.8.9")
console.log(splitResult);





let poleKwadratu = (a) => {
    return a * a;
}

console.log(poleKwadratu(5))
console.log(poleKwadratu(50))

