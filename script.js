document.addEventListener("DOMContentLoaded", function () {
    const socialsDiv = document.querySelector('.socials');
    const socialBtn = document.querySelector('nav .share');
    const mobileNavbar = document.querySelector('nav.phone subnav');

    socialBtn.addEventListener('mouseenter', () => { 
        socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left}px`
        socialsDiv.classList.replace('hide', 'show') 
    })
    socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.replace('show', 'hide') })
    
    document.querySelector('nav.phone > img').addEventListener('click', () => { mobileNavbar.style.display = 'flex' })
    document.querySelector('nav.phone subnav .title > img').addEventListener('click', () => { mobileNavbar.style.display = 'none' })
});

