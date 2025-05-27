let questions = [
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    q: "What color is the sky?",
    options: ["Blue", "Red", "Green"],
    answer: "Blue"
  },
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "Lucknow", "Delhi"],
    answer: "Delhi"
  }
];

let index = 0;
let score = 0;

function showQuestion() {
  let q = questions[index];
  document.getElementById("question").innerText = q.q;
  let choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.options.forEach(function(option) {
    let btn = document.createElement("div");
    btn.innerText = option;
    btn.className = "choice";
    btn.onclick = function() { checkAnswer(option); };
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[index].answer) {
    score++;
  }
  document.getElementById("next").style.display = "inline";
  let all = document.getElementsByClassName("choice");
  for (let i = 0; i < all.length; i++) {
    all[i].onclick = null;
  }
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    showQuestion();
    document.getElementById("next").style.display = "none";
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("question").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("next").style.display = "none";
  let scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  scoreDiv.innerText = "You scored " + score + " out of " + questions.length;
  document.getElementById("restart").style.display = "inline";
}

function restartQuiz() {
  index = 0;
  score = 0;
  document.getElementById("question").style.display = "block";
  document.getElementById("choices").style.display = "block";
  document.getElementById("score").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.getElementById("next").style.display = "none";
  showQuestion();
}

showQuestion();
