function quiz() {
    const questions = [
      'How many moons does Earth have?',
      'How many moons does Saturn have?',
      'How many moons does Venus have?'
    ];
    const answers = [1, 82, 0];

    let score = 0;
  
    let num = Math.floor(Math.random() * 3);
  
    for (let i = 1; i <= questions.length; i++) {
      const question = questions[num];
      const answer = Number(prompt(question));

      if (answer == answers[num]) {
        score++;
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
      num++;
      if (num === questions.length) {
        num = 0;
      }
    }
  
    const scoreArea = document.querySelector('#score-area');
    scoreArea.innerText = `You got ${score} out of ${questions.length} questions correct!`;
  }
  
  alert('Are you ready for a quiz?');
  quiz();