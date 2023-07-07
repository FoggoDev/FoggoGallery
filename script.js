document.addEventListener("DOMContentLoaded", function () {
    /* Only Desktop */
    const socialsDiv = document.querySelector('.socials');
    const socialBtn = document.querySelector('nav .share');

    socialBtn.addEventListener('mouseenter', () => { 
        socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left}px`
        socialsDiv.classList.replace('fadeout', 'fadein') 
    })
    socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.replace('fadein', 'fadeout') })
    /* END */

    /* Only Mobile */
    const mobileNavbar = document.querySelector('nav.phone subnav');
    const mobileNavbarBtn = document.querySelector('nav.phone > img');
    const mobileNavBarList = document.querySelector('nav.phone subnav ul');

    mobileNavbarBtn.addEventListener('click', () => { 
        if (mobileNavbarBtn.getAttribute("src") === 'image/icon/menu.svg') { 
            mobileNavbarBtn.setAttribute('src', 'image/icon/x.svg')
            mobileNavbar.classList.replace('slideout', 'slidein')
            mobileNavBarList.classList.replace('fadeout', 'fadein')
        } else { 
            mobileNavbarBtn.setAttribute('src', 'image/icon/menu.svg')
            mobileNavbar.classList.replace('slidein', 'slideout')
            mobileNavBarList.classList.replace('fadein', 'fadeout')
        }
    })
    /* END */


    

});

