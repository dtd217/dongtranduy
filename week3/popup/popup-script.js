var popup = document.getElementById('popup')
var popupClose = document.querySelector('.popup-close')
var popupForm = document.querySelector('.popup-form')

function setCookie(name, value, days) {
   const date = new Date();
   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
   document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';'); for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

function checkCookie() {
   if (getCookie('popupClosed') !== 'true') {
      popup.style.display = 'block';
   }
   else {
      popup.style.display = 'none';
   }
}

function closePopup() {
   document.getElementById('popup').style.display = 'none';
   setCookie('popupClosed', 'true', 30);
}

popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', function (event) {
   event.preventDefault();
   closePopup();
});