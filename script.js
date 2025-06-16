function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const botChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = `Bạn chọn: ${emoji(userChoice)} — Bot chọn: ${emoji(botChoice)}.`;

  if (userChoice === botChoice) {
    resultText += " Hòa!";
  } else if (
    (userChoice === 'rock' && botChoice === 'scissors') ||
    (userChoice === 'paper' && botChoice === 'rock') ||
    (userChoice === 'scissors' && botChoice === 'paper')
  ) {
    resultText += " Bạn thắng 🎉!";
    document.getElementById("result").textContent = resultText;
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1";
    }, 2000);
    return;
  } else {
    resultText += " Bạn thua 😢!";
  }

  document.getElementById("result").textContent = resultText;
}

function emoji(choice) {
  return choice === 'rock' ? '✊' : choice === 'paper' ? '✋' : '✌️';
}