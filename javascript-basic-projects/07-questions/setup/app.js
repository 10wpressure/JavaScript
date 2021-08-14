//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) =>
//   btn.addEventListener("click", (e) =>
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
//   )
// );
