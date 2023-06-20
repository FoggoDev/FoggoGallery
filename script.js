const socialsDiv = document.querySelector('.socials');
const socialBtn = document.querySelector('nav .share');

socialBtn.addEventListener('mouseenter', () => { 
    socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left}px`
    socialsDiv.classList.replace('hide', 'show') 
})
socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.replace('show', 'hide') })