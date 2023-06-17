const socialsDiv = document.querySelector('.socials');
const socialBtn = document.querySelector('nav .shareC');

socialBtn.addEventListener('mouseenter', () => { 
    socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left - 8}px`
    socialsDiv.classList.remove('hide') 
})
socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.add('hide') })