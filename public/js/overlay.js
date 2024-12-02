const vaultBtn = document.querySelector('.createVaultBtn')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
vaultBtn.addEventListener('click' , async() => {
    overlay.style.display = 'flex'
})

close.addEventListener('click' , async() => {
    overlay.style.display = 'none'
})



