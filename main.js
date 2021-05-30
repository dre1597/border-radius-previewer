const div = document.querySelector('#div');
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomRight = document.querySelector('#bottom-right');
const bottomLeft = document.querySelector('#bottom-left');
const messageSpan = document.querySelector('#message');
const generateBtn = document.querySelector('#generate');
const cssText = document.querySelector('#css');
const clipboardBtn = document.querySelector('#clipboard');

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (topLeft.value == '') {
        div.style.borderTopLeftRadius = '0px';
        topLeft.value = '0px';
    } else div.style.borderTopLeftRadius = topLeft.value;

    if (topRight.value == '') {
        div.style.borderTopRightRadius = '0px';
        topRight.value = '0px';
    } else div.style.borderTopRightRadius = topRight.value;

    if (bottomRight.value == '') {
        div.style.borderBottomRightRadius = '0px';
        bottomRight.value = '0px';
    } else div.style.borderBottomRightRadius = bottomRight.value;

    if (bottomLeft.value == '') {
        div.style.borderBottomLeftRadius = '0px';
        bottomLeft.value = '0px';
    } else div.style.borderBottomLeftRadius = bottomLeft.value;

    const color = document.querySelector('#color').value;
    div.style.borderColor = color;

    cssText.textContent = `border-radius: ${topLeft.value} ${topRight.value} ${bottomRight.value} ${bottomLeft.value};
    border-color: ${color};`;
    cssText.classList.remove('hidden');
    clipboardBtn.classList.remove('hidden');

    clipboardBtn.addEventListener('click', () => {
        cssText.select();
        cssText.setSelectionRange(0, 999999);

        document.execCommand('copy');

        alert('Copied the text:' + cssText.value);
    });
});
