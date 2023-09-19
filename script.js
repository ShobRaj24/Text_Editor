const editorTextarea = document.getElementById('editorTextarea');
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const underlineButton = document.getElementById('underlineButton');
const leftAlignButton = document.getElementById('leftAlignButton');
const centerAlignButton = document.getElementById('centerAlignButton');
const rightAlignButton = document.getElementById('rightAlignButton');
const capitalizeButton = document.getElementById('capitalizeButton');
const lowercaseButton = document.getElementById('lowercaseButton');
const uppercaseButton = document.getElementById('uppercaseButton');
const clearTextButton = document.getElementById('clearTextButton');
const undoButton = document.getElementById('undoButton');
const downloadButton = document.getElementById('downloadButton');

let isBold = false;
let isItalic = false;
let isUnderline = false;

boldButton.addEventListener('click', () => {
    if (!isBold) {
        editorTextarea.style.fontWeight = 'bold';
        isBold = true;
    } else {
        editorTextarea.style.fontWeight = 'normal';
        isBold = false;
    }
});

italicButton.addEventListener('click', () => {
    if (!isItalic) {
        editorTextarea.style.fontStyle = 'italic';
        isItalic = true;
    } else {
        editorTextarea.style.fontStyle = 'normal';
        isItalic = false;
    }
});

underlineButton.addEventListener('click', () => {
    if (!isUnderline) {
        editorTextarea.style.textDecoration = 'underline';
        isUnderline = true;
    } else {
        editorTextarea.style.textDecoration = 'none';
        isUnderline = false;
    }
});

leftAlignButton.addEventListener('click', () => {
    editorTextarea.style.textAlign = 'left';
});

centerAlignButton.addEventListener('click', () => {
    editorTextarea.style.textAlign = 'center';
});

rightAlignButton.addEventListener('click', () => {
    editorTextarea.style.textAlign = 'right';
});

capitalizeButton.addEventListener('click', () => {
    editorTextarea.value = editorTextarea.value.replace(/\b\w/g, c => c.toUpperCase());
});

lowercaseButton.addEventListener('click', () => {
    editorTextarea.value = editorTextarea.value.toLowerCase();
});

uppercaseButton.addEventListener('click', () => {
    editorTextarea.value = editorTextarea.value.toUpperCase();
});

clearTextButton.addEventListener('click', () => {
    editorTextarea.value = '';
    editorTextarea.style.fontWeight = 'normal';
    editorTextarea.style.fontStyle = 'normal';
    editorTextarea.style.textDecoration = 'none';
    isBold = false;
    isItalic = false;
    isUnderline = false;
});

let previousValue = '';

undoButton.addEventListener('click', () => {
    editorTextarea.value = previousValue;
});

downloadButton.addEventListener('click', () => {
    const text = editorTextarea.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.txt';
    a.click();
    URL.revokeObjectURL(url);
});

editorTextarea.addEventListener('input', () => {
    previousValue = editorTextarea.value;
});
