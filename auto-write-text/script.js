const text = 'I love Web Development <3';
const autoText = document.getElementById('autoText');
const inputTextField = document.getElementById('inputTextField');

let index = 0;

function autoWriteText() {
    autoText.innerText = text.slice(0, index);
    index++;

    if(index>text.length) {
        index = 0;
    }
}

setInterval(autoWriteText, 100);