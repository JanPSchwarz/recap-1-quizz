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

  // If-Else Lösung für Text-Toggle-Button
  // if (showAnswerButton.textContent === "Show Answer") {
  //   showAnswerButton.textContent = "Hide Answer";
  // } else {
  //   showAnswerButton.textContent = "Show Answer";
  // }

  // Ternary-Operator Lösung :

  showAnswerButtonText =
    showAnswerButton.textContent === "Show Answer"
      ? "Hide Answer"
      : "Show Answer";

  showAnswerButton.textContent = `${showAnswerButtonText}`;
});
