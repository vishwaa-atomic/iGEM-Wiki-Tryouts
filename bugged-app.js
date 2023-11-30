// Easy errors
console.lg("This is a simple JavaScript error.");

// Medium errors
let x = 10;
const y = 20;
let result = x + y;
result.toFixed(2); 

// Hard errors
function throwError() {
    throw new Error("This is a custom error.");
}

try {
    throwError();
} catch (error) {
    console.error(error)
}


const movingBlock = document.getElementById('movingBlock');
let movingUp = true;

function moveBlock() {
    const currentPosition = movingBlock.offsetTop;

    if (movingUp) {
        if (currentPosition > 0) {
            movingBlock.style.top = currentPosition - 2 + 'px';
        } else {
            movingUp = false;
        }
    } else {
        if (currentPosition < window.innerHeight - movingBlock.offsetHeight) {
            movingBlock.style.top = currentPosition + 2 + 'px';
        } else {
            movingUp = true;
        }
    }

    movingUp = !movingUp;
}

setInterval(moveBlock, 30);
