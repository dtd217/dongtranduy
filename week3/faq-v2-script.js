var mainSection = document.getElementById("faq");
var faqHeader = mainSection.getElementsByClassName("faq-header")
var faqContent = mainSection.getElementsByClassName("faq-content");
var faqIcon = mainSection.getElementsByClassName("faq-icon")

for (let i = 0; i < faqHeader.length; i++) {
   faqHeader[i].addEventListener('click', function () {
      for (let j = 0; j < faqHeader.length; j++) {
         if (j !== i) {
            faqHeader[j].classList.remove("active");
            faqContent[j].style.display = 'none';
            faqIcon[j].innerHTML = '&#128931;';
         }
      }
      if (faqHeader[i].classList.contains("active")) {
         faqHeader[i].classList.remove("active");
         faqContent[i].style.display = 'none';
         faqIcon[i].innerHTML = '&#128931;';
      }
      else {
         faqHeader[i].classList.add("active");
         faqContent[i].style.display = 'block';
         faqIcon[i].innerHTML = '&#9866;';
      }
   });
}