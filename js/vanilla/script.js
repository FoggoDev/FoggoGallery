window.onscroll = () => {
    if (window.scrollY > 1) { document.querySelector('header').style.boxShadow = "0px 4px 4px 0px #00000033" } 
    else { document.querySelector('header').style.boxShadow = "" }
}

/*window.onload = () => {
    const listHeaderInternalLink = document.querySelector('.internalLinks').childNodes
    console.log(listHeaderInternalLink)
}*/

// Changing/Detecting Language
let language = navigator.language.slice(0,2);
const translatedLang =  ['fr','en']

function loadLangTxt(){
    fetch(`/../assets/lang/${language}.json`)
        .then(function (response) { return response.json(); })
        .then(function (jsonFile) { for (txtKey in jsonFile) { document.getElementById(`${txtKey}`).textContent = jsonFile[txtKey] } })
}

if (!translatedLang.includes(language)) { language = 'en'}

document.getElementById('languageSwitcher').textContent = language

loadLangTxt()

document.getElementById('languageSwitcher').onclick = () => {
    const langListDiv = document.createElement('div')
    langListDiv.classList.add('langList')

    translatedLang.forEach(lang => {
        const btnElement = document.createElement('button')
        btnElement.append(document.createTextNode(lang))
        langListDiv.appendChild(btnElement)
    });

    if (document.querySelector('.langList') == null){ document.querySelector('header').append(langListDiv) } 
    else { document.querySelector('.langList').remove() }
}
//END