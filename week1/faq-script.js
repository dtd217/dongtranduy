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

const url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
   .then((response) => response.json())
   .then((data) => {
      var ul = document.getElementById("posts")
      for (let i = 0; i < 2; i++) {
         var li = document.createElement("li")
         li.innerHTML = "<br>Title: " + data[i].title
         li.innerHTML += "<br>Body: " + data[i].body
         li.innerHTML += "<br>Id: " + data[i].id
         ul.appendChild(li)
      }
   })

localStorage.setItem('list_departments', JSON.stringify([1, 2]))
