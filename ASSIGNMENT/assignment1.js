 const questions = document.querySelectorAll(".question");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const timerBox = document.getElementById("timer");
    const resultBox = document.getElementById("result");
    const scoreBox = document.getElementById("score");
    const messageBox = document.getElementById("message");

    const correctAnswers = {
      q1: "a",
      q2: "c",
      q3: "a",
      q4: "d",
      q5: "b"
    };

    let currentQuestion = 0;
    let score = 0;
    let timeLeft = 120;
    let timer;

     function updateTimer() {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");

      timerBox.textContent = "Time Left: " + minutes + ":" + seconds;
    }
     function startTimer() {
      clearInterval(timer);

      timer = setInterval(function () {
        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {
          clearInterval(timer);
          nextQuestion();
        }
      }, 1000);
    }

    function showQuestion(index) {
      questions.forEach(function (question, i) {
        if (i === index) {
          question.classList.add("active");
        } else {
          question.classList.remove("active");
        }
      });
       if (index === 0) {
        prevBtn.disabled = true;
      } else {
        prevBtn.disabled = false;
      }
    }

    function getSelectedAnswer(questionName) {
      const selected = document.querySelector('input[name="' + questionName + '"]:checked');

      if (selected) {
        return selected.value;
      }

      return null;
    }

    function checkAnswer() {
      const questionName = "q" + (currentQuestion + 1);
      const selected = getSelectedAnswer(questionName);

      if (selected === correctAnswers[questionName]) {
        score++;
         }
    }

    function nextQuestion() {
      checkAnswer();

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
          timeLeft = 120;
        showQuestion(currentQuestion);
        startTimer();
      } else {
        finishQuiz();
      }
    }

    function previousQuestion() {
      checkAnswer();

      if (currentQuestion > 0) {
        currentQuestion--;
        timeLeft = 120;
        showQuestion(currentQuestion);
        startTimer();
      }
    }

    function finishQuiz() {
      clearInterval(timer);
       questions.forEach(function (question) {
        question.style.display = "none";
      });

      document.querySelector(".buttons").style.display = "none";
      resultBox.style.display = "block";

      scoreBox.textContent = score + " / " + questions.length;

      if (score === questions.length) {
        messageBox.textContent = "Excellent! You got all answers correct.";
      } else if (score >= 3) {
        messageBox.textContent = "Good job! Keep practicing.";
      } else {
        messageBox.textContent = "Nice try! You can do better next time.";
      }
    }

    nextBtn.addEventListener("click", function () {
      const questionName = "q" + (currentQuestion + 1);
      const selected = getSelectedAnswer(questionName);
  if (!selected) {
        alert("Please select an answer first.");
        return;
      }

      nextQuestion();
    });

    prevBtn.addEventListener("click", function () {
      previousQuestion();
    });

    showQuestion(currentQuestion);
    startTimer();