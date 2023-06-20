const socialsDiv = document.querySelector('.socials');
const socialBtn = document.querySelector('nav .shareC');

socialBtn.addEventListener('mouseenter', () => { 
    socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left - 8}px`
    socialsDiv.classList.replace('hide', 'show') 
})
socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.replace('show', 'hide') })