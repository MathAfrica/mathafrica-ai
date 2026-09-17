function hideAll() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("student").classList.add("hidden");
  document.getElementById("topics").classList.add("hidden");
  document.getElementById("fractions").classList.add("hidden");
  document.getElementById("teacher").classList.add("hidden");
}

function goHome() {
  hideAll();
  document.getElementById("home").classList.remove("hidden");
}

function showStudent() {
  hideAll();
  document.getElementById("student").classList.remove("hidden");
}

function showTeacher() {
  hideAll();
  document.getElementById("teacher").classList.remove("hidden");
}

function selectClass(className) {
  hideAll();

  document.getElementById("topics").classList.remove("hidden");

  document.getElementById("classTitle").textContent =
    className + " Mathematics";
}

function openFractions() {
  hideAll();
  document.getElementById("fractions").classList.remove("hidden");
}

function checkAnswer() {
  const answer = document
    .getElementById("answer")
    .value
    .trim()
    .toLowerCase();

  const feedback = document.getElementById("feedback");

  if (answer === "3/8") {
    feedback.textContent =
      "🎉 Correct! Excellent work. The answer is 3/8.";
  } else if (answer === "") {
    feedback.textContent =
      "✏️ Please enter your answer first.";
  } else {
    feedback.textContent =
      "Not quite. Think again: 3 pieces were eaten out of 8 equal pieces. Try again!";
  }
}

function comingSoon() {
  alert("🚀 This topic is coming soon!");
}
