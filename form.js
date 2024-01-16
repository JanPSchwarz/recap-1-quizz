// Character feature

// For Quesiton Input field

const inputQuestion = document.querySelector('[data-js="newQuestion"]');
const counterQuestion = document.querySelector(
  '[data-js="character-counter-question"]'
);

const progressBarQuestion = document.querySelector(
  '[data-js="progress-bar-question"]'
);

inputQuestion.addEventListener("input", (event) => {
  const countNumber = event.target.value.length;
  const countResult = 150 - countNumber;

  counterQuestion.textContent = `${countResult} Characters left`;

  const widthProgressBar = ((150 - countNumber) / 150) * 100;

  progressBarQuestion.style.width = `${widthProgressBar}%`;
});

// For Answer Input field

const inputAnswer = document.querySelector('[data-js="answerField"]');
const counterAnswer = document.querySelector(
  '[data-js="character-counter-answer"]'
);
const progressBarAnswer = document.querySelector(
  '[data-js="progress-bar-answer"]'
);

inputAnswer.addEventListener("input", (event) => {
  const countNumber = event.target.value.length;
  const countResult = 150 - countNumber;

  counterAnswer.textContent = `${countResult} Characters left`;

  const widthProgressBar = ((150 - countNumber) / 150) * 100;

  progressBarAnswer.style.width = `${widthProgressBar}%`;
});

// For Hash-Tag Input field

const inputHash = document.querySelector('[data-js="tagInput"]');
const counterHash = document.querySelector(
  '[data-js="character-counter-hash"]'
);
const progressBarHash = document.querySelector('[data-js="progress-bar-hash"]');

inputHash.addEventListener("input", (event) => {
  const countNumber = event.target.value.length;
  const countResult = 50 - countNumber;

  counterHash.textContent = `${countResult} Characters left`;

  const widthProgressBar = ((50 - countNumber) / 50) * 100;

  progressBarHash.style.width = `${widthProgressBar}%`;
});

// Form für neue Question

const submitButton = document.querySelector('[data-js="submit-button"]');

const form = document.querySelector('[data-js="form"]');

const questionSection = document.querySelector('[data-js="question-section"]');

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

  buttonBookmark.setAttribute("data-js", "bookmark-button");
  icon.setAttribute("data-js", "bookmark-sign");
  buttonAnswer.setAttribute("data-js", "show-answer-button");
  paragraphAnswer.setAttribute("data-js", "answer");

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

  progressBarQuestion.style.width = "100%";
  progressBarAnswer.style.width = "100%";
  progressBarHash.style.width = "100%";

  counterQuestion.textContent = "150 Characters left";
  counterAnswer.textContent = "150 Characters left";
  counterHash.textContent = "50 Characters left";
});
