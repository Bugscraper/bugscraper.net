// Thanks to https://phrase.com/blog/posts/step-step-guide-javascript-localization/

const translations = {
    "en": {
        "language-name": "🍔 English",

        "button-steam": "🐛 Wishlist on Steam", // "wishlist" is a verb here, not a noun, as in "please wishlist on Steam"
        "button-itchio": "🏪 Play the demo on itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-instagram": "📷 Instagram",  // TODO: translate instagram
        "button-github": "😺 GitHub", 
        "button-press": "📰 Press kit",
        "button-email": "✉️ Email",
        "desc-1": "Welcome to the bugscraper.",
        "desc-2": "Here, pests all around the world come to gather. ",
        "desc-3": "Your mission: stopping them before it is too late!",
        "desc-long-1": "🐜 In this platformer shooter, you take the role of <b>Mio</b>, a courageous ant, trying to stop the employees of a bug-filled skyscraper from corrupting the world with a deadly mushroom.",
        "desc-long-2": "🐛 You will battle waves of enemies in an elevator as they come for your skin (or rather, exoskeleton) on every floor.",
        "desc-long-3": "🐝 Using a wide variety of <b>weapons and upgrades</b>, eliminate them and prepare to battle for the next floor!",
        "desc-long-4": "🐞 Play in <b>solo</b>, or with up to 4 friends in <b>local co-op multiplayer</b>.",
        "screenshot-title": "Screenshots",

        "translation-disclaimer": "Translations with (*) were made with the help of a generative AI model. Please get in touch if you'd like to help me with human-made translations!",
        "contact": "Contact:",
        "email-disclaimer": "(I might respond under a different address)",
        "footer-source": "Source code for this website",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "fr": {
        "language-name": "🥖 Français",

        "button-steam": "🐛 Ajoutez à votre liste de souhaits sur Steam",
        "button-itchio": "🏪 Jouez à la démo sur itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Kit de presse",
        "button-email": "✉️ Email", 
        "desc-1": "Bienvenue dans le bugscraper.",
        "desc-2": "Ici se retrouvent des bêtes du monde entier.",
        "desc-3": "Votre mission : les arrêter avant qu'il ne soit trop tard&nbsp;!",
        "desc-long-1": "🐜 Dans ce jeu <b>de plateformes et de tir</b>, vous incarnez <b>Mio</b>, une courageuse fourmi, essayant d'empêcher les employés d'un gratte-ciel rempli de bestioles de corrompre le monde avec un champignon mortel.",
        "desc-long-2": "🐛 Vous affronterez dans un ascenseur des vagues d'ennemis qui viendront pour votre peau (ou plutôt, votre exosquelette) à chaque étage.",
        "desc-long-3": "🐝 À l'aide d'une grande variété <b>d'armes et d'améliorations</b>, éliminez-les et préparez-vous au combat pour l'étage suivant&nbsp;!",
        "desc-long-4": "🐞 Jouez en <b>solo</b>, ou avec jusqu'à 4 amis en <b>multijoueur local coopératif</b>.",
        "screenshot-title": "Captures",
    
        "translation-disclaimer": "Les traductions avec (*) ont été réalisées à l'aide d'un modèle d'IA générative. Veuillez me contacter si vous souhaitez m'aider à fournir des traductions faites par des humains&nbsp;!",
        "contact": "Contact :",
        "email-disclaimer": "(les réponses peuvent provenir d'une adresse différente)",
        "footer-source": "Code source de ce site web",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "es": { // Courtesy of .unit00 for proof-reading 
        "language-name": "🌮 Español (*)",

        "button-steam": "🐛 Añádelo a tu lista de deseados en Steam",
        "button-itchio": "🏪 Juega la demo en itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Kit de prensa",
        "button-email": "✉️ Correo electrónico",
        "desc-1": "Bienvenido al bugscraper.",
        "desc-2": "Aquí se reúnen plagas de todo el mundo.",
        "desc-3": "Tu misión: detenerlas antes de que sea demasiado tarde!",
        "desc-long-1": "🐜 En este juego de plataformas y disparos, tomas el papel de <b>Mio</b>, una valiente hormiga, que intenta evitar que los empleados de un rascacielos lleno de bichos corrompan el mundo con un hongo mortal.",
        "desc-long-2": "🐛 Lucharás contra oleadas de enemigos en un ascensor mientras vienen por tu piel (o más bien, tu exoesqueleto) en cada piso.",
        "desc-long-3": "🐝 Usando una gran variedad de <b>armas y mejoras</b>, elimínalos y prepárate para luchar en el siguiente piso!",
        "desc-long-4": "🐞 Juega en <b>solitario</b> o con hasta 4 amigos en <b>cooperativo local</b>.",
        "screenshot-title": "Capturas de pantalla",

        "translation-disclaimer": "Las traducciones con (*) se hicieron con la ayuda de un modelo de IA generativa. ¡Por favor, póngase en contacto si desea ayudarme con traducciones hechas por humanos!",
        "contact": "Contacto:",
        "email-disclaimer": "(puede responder desde una dirección diferente)",
        "footer-source": "Código fuente de este sitio web",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "de": { // courtesy of madbyte for proof-reading
        "language-name": "🍺 Deutsch (*)",

        "button-steam": "🐛 Zur Wunschliste auf Steam hinzufügen",
        "button-itchio": "🏪 Demo auf itch.io spielen",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Pressekit",
        "button-email": "✉️ E-Mail",
        "desc-1": "Willkommen beim Bugscraper.",
        "desc-2": "Hier versammeln sich Schädlinge aus aller Welt.",
        "desc-3": "Deine Mission: Sie aufhalten, bevor es zu spät ist!",
        "desc-long-1": "🐜 In diesem Plattform-Shooter übernimmst du die Rolle von <b>Mio</b>, einer mutigen Ameise, die versucht, die Mitarbeiter eines mit Käfern gefüllten Wolkenkratzers daran zu hindern, die Welt mit einem tödlichen Pilz zu verderben.",
        "desc-long-2": "🐛 Du wirst in einem Aufzug gegen Wellen von Feinden kämpfen, die auf jeder Etage nach deiner Haut (bzw. deinem Exoskelett) trachten.",
        "desc-long-3": "🐝 Mit einer Vielzahl von <b>Waffen und Upgrades</b> eliminierst du sie und bereitest dich auf den Kampf in der nächsten Etage vor!",
        "desc-long-4": "🐞 Spiele im <b>Einzelspielermodus</b> oder mit bis zu 4 Freunden im <b>lokalen Koop-Modus</b>.",
        "screenshot-title": "Screenshots",

        "translation-disclaimer": "Übersetzungen mit (*) wurden mit Hilfe eines generativen KI-Modells erstellt. Bitte kontaktiere mich, wenn du mir mit menschlichen Übersetzungen helfen möchtest!",
        "contact": "Kontakt:",
        "email-disclaimer": "(Antworten können von einer anderen Adresse kommen)",
        "footer-source": "Quellcode dieser Webseite",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "it": {
        "language-name": "🍝 Italiano (*)",

        "button-steam": "🐛 Aggiungi alla lista dei desideri su Steam",
        "button-itchio": "🏪 Gioca la demo su itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Cartella stampa",
        "button-email": "✉️ Email",
        "desc-1": "Benvenuto al bugscraper.",
        "desc-2": "Qui si radunano parassiti da tutto il mondo.",
        "desc-3": "La tua missione: fermarli prima che sia troppo tardi!",
        "desc-long-1": "🐜 In questo platform shooter, interpreti il ruolo di <b>Mio</b>, una coraggiosa formica che cerca di impedire ai dipendenti di un grattacielo pieno di insetti di corrompere il mondo con un fungo mortale.",
        "desc-long-2": "🐛 Combatterai ondate di nemici in un ascensore mentre cercano la tua pelle (o meglio, il tuo esoscheletro) ad ogni piano.",
        "desc-long-3": "🐝 Usando una vasta gamma di <b>armi e potenziamenti</b>, eliminali e preparati a combattere per il prossimo piano!",
        "desc-long-4": "🐞 Gioca in <b>solitario</b> o con un massimo di 4 amici in <b>coop locale</b>.",
        "screenshot-title": "Screenshot",

        "translation-disclaimer": "Le traduzioni con (*) sono state realizzate con l'aiuto di un modello di IA generativa. Per favore, contattami se desideri aiutarmi con traduzioni fatte da umani!",
        "contact": "Contatto:",
        "email-disclaimer": "(potrebbe rispondere da un indirizzo diverso)",
        "footer-source": "Codice sorgente di questo sito web",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "pt": {
        "language-name": "🍛 Português (*)",

        "button-steam": "🐛 Adicione à sua lista de desejos no Steam",
        "button-itchio": "🏪 Jogue a demo no itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Kit de imprensa",
        "button-email": "✉️ Email",
        "desc-1": "Bem-vindo ao bugscraper.",
        "desc-2": "Aqui, pragas de todo o mundo se reúnem.",
        "desc-3": "Sua missão: detê-las antes que seja tarde demais!",
        "desc-long-1": "🐜 Neste jogo de plataforma e tiro, você assume o papel de <b>Mio</b>, uma corajosa formiga que tenta impedir que os funcionários de um arranha-céu cheio de insetos corrompam o mundo com um fungo mortal.",
        "desc-long-2": "🐛 Você lutará contra ondas de inimigos em um elevador enquanto eles vêm atrás da sua pele (ou melhor, do seu exoesqueleto) em cada andar.",
        "desc-long-3": "🐝 Usando uma grande variedade de <b>armas e melhorias</b>, elimine-os e prepare-se para lutar no próximo andar!",
        "desc-long-4": "🐞 Jogue em <b>solo</b> ou com até 4 amigos em <b>cooperativo local</b>.",
        "screenshot-title": "Capturas de tela",

        "translation-disclaimer": "As traduções com (*) foram feitas com a ajuda de um modelo de IA generativa. Por favor, entre em contato se quiser me ajudar com traduções feitas por humanos!",
        "contact": "Contato:",
        "email-disclaimer": "(as respostas podem vir de um endereço diferente)",
        "footer-source": "Código-fonte deste site",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    
    "nl": { // courtesy of keyslam and marzgaoui45 for proof-reading
        "language-name": "🍟 Nederlands",

        "button-steam": "🐛 Zet het op je Steam verlangljist",
        "button-itchio": "🏪 Speel de demo op itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Perskit",
        "button-email": "✉️ Email",
        "desc-1": "Welkom bij de bugscraper.",
        "desc-2": "Hier komen plagen van over de hele wereld samen.",
        "desc-3": "Je missie: stop ze voordat het te laat is!",
        "desc-long-1": "🐜 In deze platform shooter kruip je in de huid van <b>Mio</b>, een moedige mier die probeert te voorkomen dat de werknemers van een wolkenkrabber vol insecten de wereld bederven met een dodelijke paddenstoel.",
        "desc-long-2": "🐛 In een lift ga je de strijd aan met golven van vijanden die op elke verdieping op je huid (of eigenlijk exoskelet) afkomen.",
        "desc-long-3": "🐝 Gebruik verschillende <b>wapens en upgrades</b> om ze uit te schakelen en bereid je voor op de strijd op de volgende verdieping!",
        "desc-long-4": "🐞 Speel <b>solo</b> of met maximaal 4 vrienden in <b>local co-op multiplayer</b>.",
        "screenshot-title": "Screenshots",

        "translation-disclaimer": "Vertalingen met (*) zijn gemaakt met behulp van een generatief AI-model. Neem contact op als je me wilt helpen met handgeschreven vertalingen!",
        "contact": "Contact:",
        "email-disclaimer": "(mogelijk antwoord vanuit een ander adres)",
        "footer-source": "Broncode voor deze website",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "zh": {
        "language-name": "🍜 简体中文 (*)",

        "button-steam": "🐛 加入Steam愿望单",
        "button-itchio": "🏪 在itch.io上试玩",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 推特", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 新闻资料包",
        "button-email": "✉️ 电子邮件",
        "desc-1": "欢迎来到bugscraper。",
        "desc-2": "在这里，来自世界各地的害虫汇聚一堂。",
        "desc-3": "你的任务：在为时已晚之前阻止它们！",
        "desc-long-1": "🐜 在这款平台射击游戏中，你扮演勇敢的蚂蚁<b>Mio</b>，试图阻止一个充满虫子的摩天大楼的员工用致命的蘑菇腐蚀世界。",
        "desc-long-2": "🐛 你将在电梯中与一波波敌人战斗，因为他们会在每一层楼都来攻击你（更确切地说，是你的外骨骼）。",
        "desc-long-3": "🐝 使用各种<b>武器和升级</b>，消灭它们并准备在下一层楼作战！",
        "desc-long-4": "🐞 可以<b>单人</b>游戏，也可以和最多4个朋友一起进行<b>本地合作多人游戏</b>。",
        "screenshot-title": "截图",

        "translation-disclaimer": "带有(*)的翻译是使用生成型AI模型完成的。如果您愿意帮助我进行人工翻译，请联系我！",
        "contact": "联系：",
        "email-disclaimer": "（可能会从不同的地址回复）",
        "footer-source": "本网站的源代码",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "zh-TW": {
        "language-name": "🍜 繁體中文",

        "button-steam": "🐛 加入Steam願望單",
        "button-itchio": "🏪 在itch.io上試玩",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 推特", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 新聞資料包",
        "button-email": "✉️ 電子郵件",
        "desc-1": "歡迎來到bugscraper。",
        "desc-2": "在這裡，來自世界各地的害蟲匯聚一堂。",
        "desc-3": "你的任務：在為時已晚之前阻止它們！",
        "desc-long-1": "🐜 在這款平台射擊遊戲中，你扮演勇敢的螞蟻<b>Mio</b>，試圖阻止一個充滿蟲子的摩天大樓的員工用致命的蘑菇腐蝕世界。",
        "desc-long-2": "🐛 你將在電梯中與一波波敵人戰鬥，因為他們會在每一層樓都來攻擊你（更確切地說，是你的外骨骼）。",
        "desc-long-3": "🐝 使用各種<b>武器和升級</b>，消滅它們並準備在下一層樓作戰！",
        "desc-long-4": "🐞 可以<b>單人</b>遊戲，也可以和最多4個朋友一起進行<b>本地合作多人遊戲</b>。",
        "screenshot-title": "截圖",

        "translation-disclaimer": "帶有(*)的翻譯是使用生成型AI模型完成的。如果您願意幫助我進行人工翻譯，請聯繫我！",
        "contact": "聯繫：",
        "email-disclaimer": "（可能會從不同的地址回复）",
        "footer-source": "本網站的源代碼",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "ja": {
        "language-name": "🍣 日本語",

        "button-steam": "🐛 Steamのウィッシュリストに追加",
        "button-itchio": "🏪 itch.ioでデモをプレイ",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 プレスキット",
        "button-email": "✉️ メール",
        "desc-1": "バグスクレーパーへようこそ。",
        "desc-2": "ここでは、世界中の害虫が集まります。",
        "desc-3": "あなたの使命：手遅れになる前に彼らを止めること！",
        "desc-long-1": "🐜 このプラットフォームシューターでは、勇敢なアリの<b>Mio</b>として、バグだらけの高層ビルの従業員が致命的なキノコで世界を汚染するのを防ごうとします。",
        "desc-long-2": "🐛 あなたはエレベーターの中で敵の波と戦うことになります。各フロアで彼らがあなたの皮膚（より正確には外骨格）を狙ってきます。",
        "desc-long-3": "🐝 様々な<b>武器とアップグレード</b>を使って、敵を排除し、次のフロアの戦いに備えましょう！",
        "desc-long-4": "🐞 <b>ソロ</b>または最大4人の友達と<b>ローカル協力プレイ</b>で遊びましょう。",
        "screenshot-title": "スクリーンショット",

        "translation-disclaimer": "（*）が付いている翻訳は生成AIモデルを使用して作成されました。人力による翻訳にご協力いただける場合は、ご連絡ください！",
        "contact": "連絡先：",
        "email-disclaimer": "（異なるアドレスから返信する場合があります）",
        "footer-source": "このウェブサイトのソースコード",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "ko": {
        "language-name": "🍣 한국어",

        "button-steam": "🐛 Steam 찜 목록에 추가",
        "button-itchio": "🏪 itch.io에서 데모 플레이",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 트위터", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 보도 자료",
        "button-email": "✉️ 이메일",
        "desc-1": "버그스크래퍼에 오신 것을 환영합니다.",
        "desc-2": "여기에서는 전 세계의 해충들이 모입니다.",
        "desc-3": "당신의 임무: 너무 늦기 전에 그들을 막아라!",
        "desc-long-1": "🐜 이 플랫폼 슈터 게임에서 당신은 용감한 개미 <b>Mio</b>의 역할을 맡아, 해충으로 가득 찬 고층 빌딩의 직원들이 치명적인 버섯으로 세계를 오염시키는 것을 막아야 합니다.",
        "desc-long-2": "🐛 각 층마다 적들이 당신의 피부 (정확히 말하면 외골격) 를 노리며 몰려옵니다. 엘리베이터에서 적의 파도와 싸우게 됩니다.",
        "desc-long-3": "🐝 다양한 <b>무기와 업그레이드</b>를 사용하여 적을 제거하고 다음 층 전투에 대비하세요!",
        "desc-long-4": "🐞 <b>솔로</b> 플레이 또는 최대 4명의 친구와 함께 <b>로컬 협동 멀티플레이어</b>로 플레이하세요.",
        "screenshot-title": "스크린샷",

        "translation-disclaimer": "(*) 표시된 번역은 생성형 AI 모델을 사용하여 작성되었습니다. 사람이 만든 번역에 도움을 주고 싶다면, 연락해 주세요!",
        "contact": "연락처:",
        "email-disclaimer": "(다른 주소에서 답변할 수 있습니다)",
        "footer-source": "이 웹사이트의 소스 코드",
        "footer-author": "Léo Bernard (Yolwoocle)"
    },
    "ru": { // Courtesy of yellowbutshort for proofreading
        "language-name": "🍲 Русский",

        "button-steam": "🐛 Добавить в список желаемого на Steam",
        "button-itchio": "🏪 Играть в демо на itch.io",
        "button-discord": "🎮 Discord", 
        "button-twitter": "🐦 Twitter", 
        "button-github": "😺 GitHub", 
        "button-press": "📰 Пресс-кит",
        "button-email": "✉️ Email",
        "desc-1": "Добро пожаловать в bugscraper.",
        "desc-2": "Здесь собираются вредители со всего мира.",
        "desc-3": "Ваша миссия: остановить их, пока не стало слишком поздно!",
        "desc-long-1": "🐜 В этом платформере-шутере вы играете за <b>Мио</b>, смелую муравьиху, пытающуюся остановить сотрудников небоскреба, заполненного насекомыми, от заражения мира смертельным грибом.",
        "desc-long-2": "🐛 Вы будете сражаться с волнами врагов в лифте, нападающих на вас (точнее, на ваш экзоскелет) на каждом этаже.",
        "desc-long-3": "🐝 Используя разнообразное <b>оружие и улучшения</b>, уничтожайте их и готовьтесь к битве на следующем этаже!",
        "desc-long-4": "🐞 Играйте в <b>одиночку</b> или с друзьями (до 4 человек) в <b>локальном кооперативном мультиплеере</b>.",
        "screenshot-title": "Скриншоты",

        "translation-disclaimer": "Переводы с (*) выполнены с помощью генеративной модели ИИ. Пожалуйста свяжитесь со мной если хотите помочь с исправлениями ошибок в переводе!",
        "contact": "Контакт:",
        "email-disclaimer": "(ответ может прийти с другого адреса)",
        "footer-source": "Исходный код этого сайта",
        "footer-author": "Лео Бернар (Yolwoocle)"
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