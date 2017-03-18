var DEFAULT_LANG = 'en'
var HOME_PAGE_LANG = 'ru'
var PATHES = {
  "ru": "/",
  "en": "/en/",
}

var userLang = navigator.language || navigator.userLanguage;
var lang = userLang.split('-')[0].toLowerCase() || DEFAULT_LANG;
var path = location.pathname.replace(/\//g, '') || HOME_PAGE_LANG;

(function() {
  if (lang == path) return;
  if (sessionStorage.redirected) return;
  if (!PATHES[lang]) return;

  sessionStorage.redirected = true;
  location.pathname = PATHES[lang];
})()
