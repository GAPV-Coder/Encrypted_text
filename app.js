document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encrypt');
    const decryptButton = document.getElementById('decrypt');
    const copyButton = document.getElementById('copy');
    const textAreaFirst = document.getElementById('text-textarea');
    const textAreaSecond = document.getElementById('text');
    const cardContainer = document.querySelector('.card__container');
    const cardImageContainer = document.querySelector('.card__img__container');
    const textContainer = document.querySelector('.text__container');
    const cardElements = cardContainer.children;

    const encrypt = (text) => {
        let encryptedText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encryptedText;
    };

    const decrypt = (text) => {
        let decryptedText = text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return decryptedText;
    };

    const copy = () => {
        textAreaSecond.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    };

    const showHideElements = (show) => {
        for (let element of cardElements) {
            if (element !== textAreaSecond && element !== copyButton.parentElement) {
                element.style.display = show ? 'block' : 'none';
            }
        }
    };

    encryptButton.addEventListener('click', () => {
        const inputText = textAreaFirst.value;
        if (inputText) {
            const encryptedText = encrypt(inputText);
            textAreaSecond.value = encryptedText;
            textAreaSecond.style.display = 'block';
            copyButton.style.display = 'block';
            showHideElements(false);
        }
    });

    decryptButton.addEventListener('click', () => {
        const inputText = textAreaFirst.value;
        if (inputText) {
            const decryptedText = decrypt(inputText);
            textAreaSecond.value = decryptedText;
            textAreaSecond.style.display = 'block';
            copyButton.style.display = 'block';
            showHideElements(false);
        }
    });

    copyButton.addEventListener('click', copy);

    textAreaSecond.style.display = 'none';
});
