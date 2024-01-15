// Bookmark-Button Toggle

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkSign = document.querySelector('[data-js="bookmark-sign"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkSign.classList.toggle("fa-solid");
});

// Show-Anser Button

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const paragraphAnswer = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  paragraphAnswer.classList.toggle("hidden");

  if (showAnswerButton.innerHTML === "Show Answer") {
    showAnswerButton.innerHTML = "Hide Answer";
  } else {
    showAnswerButton.innerHTML = "Show Answer";
  }
});
