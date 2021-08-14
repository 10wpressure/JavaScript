const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    //remove active from all the buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      //and add active to the clicked one
      e.target.classList.add("active");
    });
    //hide all the articles
    articles.forEach((article) => article.classList.remove("active"));
    const element = document.getElementById(id);
    //and add active to the active one
    element.classList.add("active");
  }
});
