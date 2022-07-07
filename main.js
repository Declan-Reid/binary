function convertToBinary() {
    text = document.getElementById("input-text").value;
    console.log('To convert to binary:', text);
    binary = '';
    for (i = 0; i < text.length; i++) {
        binary += (0b100000000 + text[i].charCodeAt(0)).toString(2).substring(1) + ' ';
    }
    if (binary.length > 0) {
        document.getElementById("output-text").textContent = '"' + binary.slice(0, -1) + '"';
        console.log('Converted to binary:', binary.slice(0, -1));
    }
    else {
        document.getElementById("output-text").textContent = '""';
    }
}

function convertToText() {
    binary = document.getElementById("input-binary").value;
    console.log('To convert to text:', binary);
    binary = binary.split(' ');
    text = []
    for (i = 0; i < binary.length; i++) {
        text.push(String.fromCharCode(parseInt(binary[i], 2)));
      }
    text = text.join('');
    if (text.length > 0) {
        document.getElementById("output-binary").textContent = '"' + text + '"';
        console.log('Converted to text:', text);
    }
    else {
        document.getElementById("output-binary").textContent = '""';
    }
}

function copyBinaryValue() {
    text = document.getElementById("input-text").value;
    console.log('To copy:', text);
    navigator.clipboard.writeText(text);
}

function copyTextValue() {
    text = document.getElementById("input-binary").value;
    console.log('To copy:', text);
    navigator.clipboard.writeText(text);
}

function copyBinary() {
    text = document.getElementById("output-text").textContent.replace('"', '').replace('"', '');
    console.log('To copy:', text);
    navigator.clipboard.writeText(text);
}

function copyText() {
    text = document.getElementById("output-binary").textContent.replace('"', '').replace('"', '');
    console.log('To copy:', text);
    navigator.clipboard.writeText(text);
}

async function pasteBinaryValue() {
    const paste = await navigator.clipboard.readText();
    document.getElementById("input-text").value = paste;
}

async function pasteTextValue() {
    const paste = await navigator.clipboard.readText();
    document.getElementById("input-binary").value = paste;
}