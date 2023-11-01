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

if (document.cookie.split('; ').find((variable) => variable.startsWith('lang='))) {
    language = document.cookie.split('; ')
                .find((variable) => variable.startsWith('lang='))
                .slice(5)
} else if (!translatedLang.includes(language)) { language = 'en' }

loadLangTxt()

translatedLang.forEach(lang => {
    const btnElement = document.createElement('button')
    btnElement.append(document.createTextNode(lang))
    langListDiv.appendChild(btnElement)
});

languageSwitcherBtn.onclick = () => {
    if (langListDiv.style.visibility == 'visible') { langListDiv.style.visibility = 'hidden' }
    else { langListDiv.style.visibility = 'visible' }
}

document.querySelectorAll('header .langList button').forEach(element => {
    element.onclick = (clickedElement) => {
        language = clickedElement.target.innerHTML
        loadLangTxt()
        document.cookie = `lang=${language}; max-age=2592000; SameSite=Strict; path=/`
        langListDiv.style.visibility = 'hidden'
    }
})
//END