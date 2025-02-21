// Thanks to https://phrase.com/blog/posts/step-step-guide-javascript-localization/

const translations = {
    "en": {
        "language-name": "English",

        "button-steam-wishlist": "🐛 Wishlist on Steam", // "wishlist" is a verb here, not a noun, as in "please wishlist on Steam"
        "button-steam": "🐛 Steam", 
        "button-itchio": "🏪 itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-bluesky": "🦋 Bluesky", 
        "button-instagram": "📷 Instagram",  
        "button-github": "😺 GitHub", 
        "button-press": "📰 Press",
        "button-press-kit": "📰 Download the press kit",
        "button-email": "✉️ Email",
        "desc-1": "Welcome to the bugscraper.",
        "desc-long-1": "🐜 In this <b>roguelike shooter</b>, you play as Mio and his friends, employees of a bug-filled skyscraper, who are fed up with their jobs.",  
        "desc-long-2": "🐛 On your way to your boss's office, you'll have to face <b>waves of enemies</b> on each floor in a tight elevator.",  
        "desc-long-3": "🐝 With a wide variety of <b>weapons and upgrades</b>, eliminate them and prepare to battle for the next floor!",  
        "desc-long-4": "🐞 Play <b>solo</b>, or with up to 4 friends in <b>local co-op multiplayer</b>.",  
        "screenshot-title": "Screenshots",
        
        "contact": "Contact:",
        "email-disclaimer": "(I might respond under a different address)",
        "footer-source": "Source code for this website",
        "footer-author": "Léo Bernard (Yolwoocle)",

        "html-title-press": "Bugscraper · Presse",
        "press-title": "Press",
        "press-article-list-title": "What people are saying about the game",
        "press-article-list-add-yours": "Want to add yours?",
        "press-article-list-add-yours-email": "Email me!",
    },
    "fr": {
        "language-name": "Français",

        "button-steam-wishlist": "🐛 Ajouter sur Steam",
        "button-steam": "🐛 Steam",
        "button-itchio": "🏪 itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-bluesky": "🦋 Bluesky", 
        "button-instagram": "📷 Instagram",
        "button-github": "😺 GitHub", 
        "button-press": "📰 Presse",
        "button-press-kit": "📰 Téléchargez le kit de presse",
        "button-email": "✉️ Email", 
        "desc-1": "Bienvenue dans le bugscraper.",
        "desc-long-1": "🐜 Dans ce <b>roguelike shooter</b>, vous incarnez Mio et ses amis, des employés d'un immeuble populé d'insectes, qui en ont ras-le-bol de leur boulot.", 
        "desc-long-2": "🐛 Sur votre voie vers le bureau de votre patron, vous devrez faire face à des <b>vagues d'ennemis</b> à chaque étage dans un ascenceur.",
        "desc-long-3": "🐝 À l'aide d'une grande variété <b>d'armes et d'améliorations</b>, éliminez-les et préparez-vous au combat pour l'étage suivant&nbsp;!",
        "desc-long-4": "🐞 Jouez en <b>solo</b>, ou avec jusqu'à 4 amis en <b>multijoueur local coopératif</b>.",
        "screenshot-title": "Captures",
    
        "contact": "Contact :",
        "email-disclaimer": "(les réponses peuvent provenir d'une adresse différente)",
        "footer-source": "Code source de ce site web",
        "footer-author": "Léo Bernard (Yolwoocle)",
        
        "press-title": "Presse",
        "press-article-list-title": "Ce que les gens disent sur le jeu",
        "press-article-list-add-yours": "Vous souhaitez ajouter votre article?",
        "press-article-list-add-yours-email": "Envoyez-moi un email!",
    },
}

const defaultLocale = "en";
let locale;

document.addEventListener("DOMContentLoaded", () => {
    let localeToSet = getDefaultLocale();
    
    // alert(localeToSet);
    setLocale(localeToSet);
    bindLocaleSwitcher(localeToSet);
});

function getDefaultLocale() {
    if (typeof(Storage) !== "undefined") {
        const savedLocale = localStorage.getItem("locale")
        if (savedLocale !== null && (savedLocale in translations)) {
            return savedLocale
        }
    }

    const userLanguage = (navigator.language || navigator.userLanguage).slice(0,2);
    if (userLanguage in translations) {
        return userLanguage;
    } 
    return defaultLocale;      
}

function setLocale(newLocale) {
    if (newLocale == locale)  {
        return;
    }
    if ((newLocale in translations) === false) {
        return;
    }
    locale = newLocale;
    translatePage();
    saveLocale();
}

function translatePage() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}

function saveLocale() {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("locale", locale);
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[locale][key] ?? translations[defaultLocale][key];
    element.innerHTML = translation;
}

// Whenever the user selects a new locale, we
// load the locale's translations and update
// the page
function bindLocaleSwitcher(initialValue) {
    const switcher = document.querySelector("[data-i18n-switcher]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
        // Set the locale to the selected option[value]
        setLocale(e.target.value);
    };
}