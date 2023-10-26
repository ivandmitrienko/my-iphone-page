const button_continue = document.querySelector('.button-continue');

button_continue.addEventListener('click',()=>{
    let href = document.querySelector(".active-button").dataset.email;
    window.location.href=href;
})