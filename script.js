// complete game function
const game = () => {
  let playerScore = 0;
  let computerscore = 0;
// fuction to grab user input and run function to evaluate choices
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
  }
}
function computerChooser() {
  var computerChoice = Math.floor(Math.random() * 3)
  if (computerChoice === 0){
    document.getElementById("computerChoiceImg").src ="https://c.tenor.com/8o1DsZcDDE8AAAAd/watch-for-rocks-the-rock.gif";
  } else if (computerChoice === 1){
    document.getElementById("computerChoiceImg").src ="https://www.relyco.com/wp-content/uploads/2019/10/Syn_Tridura_1_ALT.jpg";
  } else if (computerChoice === 2){
    document.getElementById("computerChoiceImg").src ="https://cdn.thewirecutter.com/wp-content/uploads/2017/10/scissors-kitchen-shears-2x1-fullres2006.jpg?auto=webp&quality=75&crop=2:1&width=1024";
  }
  console.log(computerChoice);
}
function playerRockChooser() {
  var playerChoice = 1;
  document.getElementById("playerChoiceImg").src ="https://c.tenor.com/8o1DsZcDDE8AAAAd/watch-for-rocks-the-rock.gif";
  computerChooser();
  if (computerChoice === playerChoice){
    document.getElementById("resultImage").src ="https://www.collinsdictionary.com/images/full/tie_171498722_1000.jpg";
  } else if (computerChoice === 1){
    document.getElementById("resultImage").src ="https://c.tenor.com/v9dbFyoOGwkAAAAi/fortnite-dance-take-the-l.gif";
  } else if (computerChoice === 2){
    document.getElementById("resultImage").src ="https://c.tenor.com/epNMHGvRyHcAAAAd/gigachad-chad.gif";
  }
}
