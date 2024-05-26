// Thanks to https://phrase.com/blog/posts/step-step-guide-javascript-localization/

const translations = {
    "en": {
        "button-steam": "🐛 Wishlist on Steam",
        "button-itchio": "🏪 Play the demo on itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Press kit",
        "button-email": "✉️ Email",
        "desc-1": "Welcome to the bugscraper.",
        "desc-2": "Here, pests all around the world come to gather. ",
        "desc-3": "Your mission: stopping them before it is too late!",
        "desc-long-1": "🐜 In this platformer shooter, you take the role of <b>Mio</b>, a courageous ant, trying to stop the employees of a bug-filled skyscraper from corrupting the world with a deadly mushroom.",
        "desc-long-2": "🐛 You will battle in an elevator waves of enemies as they come for your skin (or rather, exoskeleton) on every floor.",
        "desc-long-3": "🐝 Using a wide variety of <b>weapons and upgrades</b>, eliminate them and prepare to battle for the next floor!",
        "desc-long-4": "🐞 Play in <b>solo</b>, or with up to 4 friends in <b>local co-op multiplayer</b>.",
        "screenshot-title": "Screenshots",
        "contact": "Contact:",
        "footer-source": "Source code for this website",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "fr": {
        "button-steam": "🐛 Wishlistez sur Steam",
        "button-itchio": "🏪 Jouez à la démo sur itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Kit de presse",
        "button-email": "✉️ Email", 
        "desc-1": "Bienvenue dans le bugscraper.",
        "desc-2": "Ici se retrouvent des bêtes du monde entier.",
        "desc-3": "Votre mission: les arrêter avant qu'il soit trop tard !",
        "desc-long-1": "🐜 Dans ce jeu <b>de plateformes et de tir</b>, vous incarnez <b>Mio</b>, une courageuse fourmi, essayant d'empêcher les employés d'un gratte-ciel rempli de bestioles de corrompre le monde avec un champignon mortel.",
        "desc-long-2": "🐛 Vous affronterez dans un ascenseur des vagues d'ennemis qui viendront pour votre peau (ou plutôt, votre exosquelette) à chaque étage.",
        "desc-long-3": "🐝 À l'aide d'une grande variété <b>d'armes et d'améliorations</b>, éliminez-les et préparez-vous au combat pour l'étage suivant!",
        "desc-long-4": "🐞 Jouez en <b>solo</b>, ou avec jusqu'à 4 amis en <b>multijoueur local coopératif</b>.",
    
        "screenshot-title": "Captures",
        "contact": "Contact :",
        "footer-source": "Code source de ce site web",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
};

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
    const translation = translations[locale][key];
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