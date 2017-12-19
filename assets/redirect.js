function checkSS() {
  try {
    sessionStorage.testWrite = '123';
    return sessionStorage.testWrite === '123';
  } catch (e) {
    return false;
  }
}

(function() {
  if (!checkSS()) return;

  var HOME_PAGE_LANG = 'ru';
  var PATHES = {
    ru: '/',
    en: '/en/',
    uk: '/uk/',
    be: '/be/',
  };

  var userLang = navigator.language || navigator.userLanguage;
  var lang = userLang.split('-')[0].toLowerCase();
  if (!lang) return;

  var path = location.pathname.replace(/\//g, '') || HOME_PAGE_LANG;

  if (lang == path) return (sessionStorage.redirected = true);
  if (sessionStorage.redirected) return;
  if (!PATHES[lang]) return;

  sessionStorage.redirected = true;
  location.pathname = PATHES[lang];
})();
