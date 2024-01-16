const submitButton = document.querySelector('[data-js="submit-button"]');

const form = document.querySelector('[data-js="form"]');

const questionSection = document.querySelector('[data-js="question-section"]');

// Form für neue Quesiton

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const question = event.target.newQuestion.value;
  const answer = event.target.answerField.value;
  const hashTag = event.target.tagInput.value;

  const section = document.createElement("section");
  const buttonBookmark = document.createElement("button");
  const icon = document.createElement("i");
  const paragraphQuestion = document.createElement("p");
  const buttonAnswer = document.createElement("button");
  const paragraphAnswer = document.createElement("p");
  const divHashTag = document.createElement("div");
  const paragraphHashTag = document.createElement("p");

  section.classList.add("question_card");
  buttonBookmark.classList.add("bookmark-button");
  icon.classList.add("fa-solid", "fa-bookmark");
  paragraphQuestion.classList.add("question");
  buttonAnswer.classList.add("show-answer-button");
  paragraphAnswer.classList.add("answer");
  divHashTag.classList.add("hash-tag_box");
  paragraphHashTag.classList.add("hash_tag");

  paragraphQuestion.textContent = question;
  paragraphAnswer.textContent = answer;
  paragraphHashTag.textContent = "#" + hashTag;
  buttonAnswer.textContent = "Show Answer";

  buttonBookmark.append(icon);
  divHashTag.append(paragraphHashTag);

  section.append(
    buttonBookmark,
    paragraphQuestion,
    buttonAnswer,
    paragraphAnswer,
    divHashTag
  );

  questionSection.append(section);
  form.reset();
  event.target.newQuestion.focus();
});

// Charackter feature
