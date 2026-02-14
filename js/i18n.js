// Thanks to https://phrase.com/blog/posts/step-step-guide-javascript-localization/

const translations = {
	en: {
		"language-name": "English",

		// "Wishlist" is a verb here, not a noun, as in "please wishlist on Steam"
		"button-steam-wishlist": "🐛 Wishlist on Steam",
		"button-steam": "🐛 Steam",
		"button-itchio": "🏪 itch.io",
		"button-discord": "🎮 Discord",
		"button-twitter": "🐦 Twitter",
		"button-bluesky": "🦋 Bluesky",
		"button-instagram": "📷 Instagram",
		"button-github": "😺 GitHub",
		"button-press": "🗞️ Articles",
		"button-press-kit": "📰 Download the press kit",
		"button-email": "✉️ Email",

		// This will also be on the Steam page.
		"desc-1": "Welcome to the Bugscraper.",
		"desc-2":
			"<b>Bugscraper</b> is a <b>solo</b> or <b>co-op roguelike shooter</b>. As you climb toward your tyrannical boss's office, you'll battle floor after floor of enemies. Using a wide arsenal of weapons and upgrades, mow them down and aim for the top!",
		"desc-long-1":
			"🐜 Play as <b>Mio and his friends</b>, in <b>solo</b> or in <b>local co-op</b> with up to 4 players.",
		"desc-long-2":
			"🐛 Fight through a <b>hundred waves</b> packed with <b>furious enemies</b> and <b>tough bosses</b>.",
		"desc-long-3":
			"🐝 Gather <b>new weapons</b>, drink up on <b>helpful upgrades</b>, and get ready for battle on the next floor!",
		"desc-long-4":
			"🐞 <b>Reach the top</b> of the building and settle the score with your boss!",
		// This one is only for Steam. It's at the top of the Steam page under the promo banner.
		"desc-short":
			"Welcome to the Bugscraper. In this solo or co-op roguelike shooter, battle floor after floor of enemies, aim for the top and settle the score with your tyrannical boss.",

		"screenshot-title": "Screenshots",

		contact: "Contact:",
		"footer-source": "Source code for this website",
		"banner-author": "Banner art:",

		"html-title-press": "Bugscraper · Press",
		"press-title": "Press",
		"press-article-list-title": "What people are saying about the game",
		"press-article-list-add-yours": "Want to add yours?",
		"press-article-list-add-yours-email": "Email me!",
	},
	es: {
		"language-name": "Español",

		// "Wishlist" is a verb here, not a noun, as in "please wishlist on Steam"
		"button-steam-wishlist": "🐛 Deséalo en Steam",
		"button-steam": "🐛 Steam",
		"button-itchio": "🏪 itch.io",
		"button-discord": "🎮 Discord",
		"button-twitter": "🐦 Twitter",
		"button-bluesky": "🦋 Bluesky",
		"button-instagram": "📷 Instagram",
		"button-github": "😺 GitHub",
		"button-press": "🗞️ Articulos",
		"button-press-kit": "📰 Descarga el kit de prensa",
		"button-email": "✉️ Correo",

		// This will also be on the Steam page.
		"desc-1": "Bienvenido a Bugscraper.",
		"desc-2":
			"<b>Bugscraper</b> es un juego <b>solitario</b> o <b>cooperativo roguelike de disparos</b>. Mientras trepas la torre tirana de la oficina de tu jefe, te enfrentarás piso tras piso de enemigos. Usando un gran arsenal de armas y mejoras, acaba con ellos y apunta hacia la cima!",
		"desc-long-1":
			"🐜 Juega como <b>Mio y sus amigos</b>, en <b>solitario</b> o en <b>cooperativo local</b> de hasta 4 cuatro jugadores.",
		"desc-long-2":
			"🐛 Pelea a través de <b>cien oleadas</b> llenas de <b>enemigos furiosos</b> y <b>jefes difíciles</b>.",
		"desc-long-3":
			"🐝 Recoge <b>nuevas armas</b>, y bebe <b>mejoras</b>, y preparate para la siguiente batalla que te espera en el siguiente piso!",
		"desc-long-4":
			"🐞 <b>Llega a la cima</b> de el edificio y arregla cuentas con tu jefe!",
		// This one is only for Steam. It's at the top of the Steam page under the promo banner.
		"desc-short":
			"Bienvenido a Bugscraper. En este juego solitario o cooperativo roguelike de disparos, batalla piso tras piso de enemigos, llega a la cima y arregla cuentas con tu jefe tirano",

		"screenshot-title": "Capturas de pantalla",

		contact: "Contacto:",
		"footer-source": "Código fuente de este sitio",
		"banner-author": "Arte del banner:",

		"html-title-press": "Bugscraper · Presionar",
		"press-title": "Presionar",
		"press-article-list-title": "Lo que dice la gente del juego",
		"press-article-list-add-yours": "Quieres agregar tu comentario?",
		"press-article-list-add-yours-email": "Enviame un correo!",
	},
	fr: {
		"language-name": "Français",

		"button-steam-wishlist": "🐛 Wishlistez sur Steam",
		"button-steam": "🐛 Steam",
		"button-itchio": "🏪 itch.io",
		"button-discord": "🎮 Discord",
		"button-twitter": "🐦 Twitter",
		"button-bluesky": "🦋 Bluesky",
		"button-instagram": "📷 Instagram",
		"button-github": "😺 GitHub",
		"button-press": "🗞️ Articles",
		"button-press-kit": "📰 Téléchargez le kit de presse",
		"button-email": "✉️ Email",

		"desc-1": "Bienvenue dans le Bugscraper.",
		"desc-2":
			"<b>Bugscraper</b> est un <b>roguelike shooter solo ou coopératif</b>. En voie vers le bureau de votre tyrannique patron, vous ferez face à des vagues d'ennemis à chaque étage. À l'aide d'une multitude d'armes et une grande diversité d'améliorations, éliminez les et visez le sommet !",
		"desc-long-1":
			"🐜 Vous incarnerez <b>Mio et ses amis</b>, en <b>solo</b> ou en <b>multijoueur local coopératif</b> avec jusqu'à 4 joueurs.",
		"desc-long-2":
			"🐛 Faites face à une centaine de vagues <b>d'ennemis agressifs</b> et de <b>tenaces boss</b>.",
		"desc-long-3":
			"🐝 Récoltez diverses <b>armes</b>, rassasiez vous à l'aide <b>d'améliorations</b>, puis préparez-vous au combat pour l'étage suivant !",
		"desc-long-4":
			"🐞 <b>Atteignez le haut</b> du gratte-ciel et <b>réglez vos comptes</b> avec votre patron !",
		// This one is only for Steam. It's at the top of the Steam page under the promo banner.
		"desc-short":
			"Bienvenue dans le Bugscraper. Dans ce roguelike shooter solo ou coopératif, affrontez étage après étage de vagues d'ennemis, visez le sommet et réglez vos comptes avec votre tyrannique boss.",

		"screenshot-title": "Captures",

		contact: "Contact :",
		"footer-source": "Code source de ce site web",
		"banner-author": "Illustration bannière :",

		"press-title": "Presse",
		"press-article-list-title": "Ce que les gens disent sur le jeu",
		"press-article-list-add-yours": "Vous souhaitez ajouter votre article?",
		"press-article-list-add-yours-email": "Envoyez-moi un email!",
	},

	// "zh-hans": {
	//     "language-name": "简体中文",

	//     "button-steam-wishlist": "🐛 在 Steam 收藏愿望单",
	//     "button-steam": "🐛 Steam",
	//     "button-itchio": "🏪 itch.io",
	//     "button-discord": "🎮 Discord",
	//     "button-twitter": "🐦 Twitter",
	//     "button-bluesky": "🦋 Bluesky",
	//     "button-instagram": "📷 Instagram",
	//     "button-github": "😺 GitHub",
	//     "button-press": "🗞️ 相关文章",
	//     "button-press-kit": "📰 下载媒体资料包",
	//     "button-email": "✉️ 电子邮件",

	//     "desc-1": "欢迎来到 Bugscraper。",
	//     "desc-2": "<b>Bugscraper</b> 是一款支持 <b>单人</b> 或 <b>本地合作</b> 的 <b>Roguelike 射击游戏</b>。一路向上，冲向你那恶名昭彰的老板办公室，对抗一层又一层的敌人。利用各种武器与升级，把敌人统统清扫干净，向顶层进发！",

	//     "desc-long-1": "🐜 扮演 <b>Mio 和他的伙伴们</b>，支持 <b>单人</b> 或 <b>最多 4 人的本地合作</b>。",
	//     "desc-long-2": "🐛 挑战 <b>上百波</b> <b>狂暴敌人</b> 与 <b>强大 Boss</b>。",
	//     "desc-long-3": "🐝 收集 <b>新武器</b>，获取 <b>强力升级</b>，为下一层的战斗做好准备！",
	//     "desc-long-4": "🐞 <b>闯上大楼顶层</b>，和你的老板一决胜负！",

	//     "screenshot-title": "截图",

	//     "contact": "联系方式：",
	//     "footer-source": "本网站的源代码",
	//     "banner-author": "横幅插画：",

	//     "html-title-press": "Bugscraper · 媒体",
	//     "press-title": "媒体",
	//     "press-article-list-title": "媒体对本游戏的评价",
	//     "press-article-list-add-yours": "想添加你的文章？",
	//     "press-article-list-add-yours-email": "给我发邮件！"
	// }
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
	if (typeof Storage !== "undefined") {
		const savedLocale = localStorage.getItem("locale");
		if (savedLocale !== null && savedLocale in translations) {
			return savedLocale;
		}
	}

	const userLanguage = (navigator.language || navigator.userLanguage).slice(
		0,
		2,
	);
	if (userLanguage in translations) {
		return userLanguage;
	}
	return defaultLocale;
}

function setLocale(newLocale) {
	if (newLocale == locale) {
		return;
	}
	if (newLocale in translations === false) {
		return;
	}
	locale = newLocale;
	translatePage();
	saveLocale();
}

function translatePage() {
	document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

function saveLocale() {
	// Check browser support
	if (typeof Storage !== "undefined") {
		// Store
		localStorage.setItem("locale", locale);
	} else {
		alert("Sorry, your browser does not support Web Storage...");
	}
}

function translateElement(element) {
	const key = element.getAttribute("data-i18n-key");
	const translation =
		translations[locale][key] ?? translations[defaultLocale][key];
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
