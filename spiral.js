const input = 5;
const i = 4;
const j = 2;
const filtered = Array(input);
const inputArray = [];
let topStart, leftStart, bottomStart, rightStart;
topStart = leftStart = 0;
bottomStart = rightStart = input - 1;
let index = 0;

for (let i = 0; i < input; i++) {
    filtered[i] = new Array(input);
}

for (let i = 1; i <= input ** 2; i++) {
    inputArray.push(i);
}

while (true) {
    if (leftStart > rightStart) {
        break;
    }

    for (let i = leftStart; i <= rightStart; i++) {
        filtered[topStart][i] = inputArray[index++];
    }

    topStart++;

    if (topStart > bottomStart) {
        break;
    }

    for (let i = topStart; i <= bottomStart; i++) {
        filtered[i][rightStart] = inputArray[index++];
    }

    rightStart--;

    if (leftStart > rightStart) {
        break;
    }

    for (let i = rightStart; i >= leftStart; i--) {
        filtered[bottomStart][i] = inputArray[index++];
    }

    bottomStart--;

    if (topStart > bottomStart) {
        break;
    }

    for (let i = bottomStart; i >= topStart; i--)
        filtered[i][leftStart] = inputArray[index++];

    leftStart++;
}


console.log(filtered);
console.log(filtered[i-1][j-1]);