// نختار كل عناصر الأسئلة
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // نختار الكرت اللي يحتوي السؤال والجواب
    const answer = question.nextElementSibling;

    // لو الجواب ظاهر نخفيه، وإذا مخفي نظهره
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
