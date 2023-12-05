function textEdit(buttonValue) {
    x = buttonValue.toString();
    console.log(x);
    document.execCommand(x, false, null);
}

function color(value) {
    document.execCommand('foreColor', false, value);
}