const mobileNavBtn = document.querySelector('nav > img');
const subnav = document.querySelector('subnav')
const mobileSubnavList = document.querySelector('subnav ul');
const socialBtn = document.querySelector('subnav ul li:last-child img');
const socialsDiv = document.querySelector('subnav socials');

function checkScreenWidth () {
    if (window.innerWidth > 600) {
        subnav.classList.remove('slideout');
        mobileSubnavList.classList.remove('fadeout');
    } else {
        subnav.classList.add('slideout');
        mobileSubnavList.classList.add('fadeout');
    }
}

window.onload = () => { checkScreenWidth(); }
window.onresize = () => { checkScreenWidth(); }

/* Only Desktop */
socialBtn.addEventListener('mouseenter', () => { 
    socialsDiv.style.left = `${socialBtn.getBoundingClientRect().left}px`
    socialsDiv.classList.replace('fadeout', 'fadein') 
})
socialsDiv.addEventListener('mouseleave', () => { socialsDiv.classList.replace('fadein', 'fadeout') })
/* END */

/* Only Mobile */
mobileNavBtn.addEventListener('click', () => { 
    if (mobileNavBtn.getAttribute("src") === 'image/icon/menu.svg') { 
        mobileNavBtn.setAttribute('src', 'image/icon/x.svg')
        subnav.classList.replace('slideout', 'slidein')
        mobileSubnavList.classList.replace('fadeout', 'fadein')
        socialsDiv.classList.replace('fadeout', 'fadein')
    } else { 
        mobileNavBtn.setAttribute('src', 'image/icon/menu.svg')
        subnav.classList.replace('slidein', 'slideout')
        mobileSubnavList.classList.replace('fadein', 'fadeout')
        socialsDiv.classList.replace('fadein', 'fadeout')
    }
})
/* END */