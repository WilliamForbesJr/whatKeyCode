window.addEventListener('keydown', (e) => {
    document.querySelector('#keyCode').textContent = e.keyCode;
})
window.addEventListener('keydown', (e) => {
    const key = document.querySelector('#key')
    key.textContent = e.key;
    key.classList.remove('keyOff')
})