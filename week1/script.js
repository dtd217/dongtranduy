var mainSection = document.getElementById("faq");
var faqHeader = mainSection.getElementsByClassName("faq-header")
var faqContent = mainSection.getElementsByClassName("faq-content");

for (let i = 0; i < faqHeader.length; i++) {
   faqHeader[i].addEventListener('click', function () {
      if (faqHeader[i].classList.contains("active")) {
         faqHeader[i].classList.remove("active")
         faqContent[i].style.display = 'none'
      }
      else {
         faqHeader[i].classList.add("active")
         faqContent[i].style.display = 'block'
      }
   })
}