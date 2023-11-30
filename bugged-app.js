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
let movingUp = false;
let movingDown = false;

function moveBlock() {
    const currentPosition = movingBlock.offsetTop;

    if (movingUp && currentPosition > 0) {
        movingBlock.style.top = currentPosition - 2 + 'px';
    }

    if (movingDown && currentPosition < window.innerHeight - movingBlock.offsetHeight) {
        if ((Math.random() > 0.5 && currentPosition > window.innerHeight / 2) || currentPosition < window.innerHeight / 4) {
            movingBlock.style.top = currentPosition + 2 + 'px';
        } else {
            movingBlock.style.top = currentPosition - 2 + 'px';
        }
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        movingUp = true;
    } else if (event.key === 'ArrowDown') {
        movingDown = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        movingUp = false;
    } else if (event.key === 'ArrowDown') {
        movingDown = false;
    }
});

setInterval(moveBlock, 30);
