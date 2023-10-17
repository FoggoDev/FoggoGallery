window.onscroll = () => {
    if (window.scrollY > 1) { document.querySelector('header').style.boxShadow = "0px 4px 4px 0px #00000033" } 
    else { document.querySelector('header').style.boxShadow = "" }
}

/*window.onload = () => {
    const listHeaderInternalLink = document.querySelector('.internalLinks').childNodes
    console.log(listHeaderInternalLink)
}*/

// Changing/Detecting Language
const languageSwitcherBtn = document.getElementById('languageSwitcher')
const langListDiv = document.querySelector('header .langList')

let language = navigator.language.slice(0,2);
const translatedLang =  ['fr','en']

function loadLangTxt(){
    fetch(`/../assets/lang/${language}.json`)
        .then(function (response) { return response.json(); })
        .then(function (jsonFile) { 
            languageSwitcherBtn.textContent = language
            for (txtKey in jsonFile) { document.getElementById(`${txtKey}`).textContent = jsonFile[txtKey] } 
        })
}

if (!translatedLang.includes(language)) { language = 'en' }

loadLangTxt()

translatedLang.forEach(lang => {
    const btnElement = document.createElement('button')
    btnElement.append(document.createTextNode(lang))
    langListDiv.appendChild(btnElement)
});

languageSwitcherBtn.onclick = () => {
    if (langListDiv.style.visibility == 'hidden') { langListDiv.style.visibility = 'visible' }
    else { langListDiv.style.visibility = 'hidden' }
}

document.querySelectorAll('header .langList button').forEach(element => {
    element.onclick = (clickedElement) => {
        language = clickedElement.target.innerHTML
        loadLangTxt()
    }
})
//END

document.cookie = "lang=en; max-age=2592000; path=/"
console.log(document.cookie)