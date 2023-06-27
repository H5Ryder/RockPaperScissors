
let round = 0;
let humanScore = 0;
let robotScore = 0;


document.getElementById("text round").innerHTML = "PLAY?";
document.getElementById("text human").innerHTML = "HUMAN: 0";
document.getElementById("text robot").innerHTML = "ROBOT: 0";





const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {

    if (round !== 5) {

        let result = playRound(button.id, getComputerChoice());

        console.log(result);

        if (result === "win") {
            humanScore += 1;

        } else if (result == "loss") {
            robotScore += 1;

        }

        round +=1;



    } else {
        //reset game
        round = 1;
        humanScore = 0;
        robotScore = 0;
        let result = playRound(button.id, getComputerChoice());

        console.log(result);

        if (result === "win") {
            humanScore += 1;

        } else if (result == "draw") {
            robotScore += 1;

        }

      


    }
    document.getElementById("text round").innerHTML = `ROUND: ${round}`;
document.getElementById("text human").innerHTML = `HUMAN: ${humanScore}`;
document.getElementById("text robot").innerHTML = `ROBOT: ${robotScore}`;


  });
});




        
        
        
        function getComputerChoice() {
            //Gives a Rock Paper or Scissors String by random
            let choicesArray = ["rock", "paper", "scissors"];


            return choicesArray[Math.floor(Math.random() * choicesArray.length)];



        }

        function playRound(playerSelection, computerSelection) {

            var player = playerSelection.toLowerCase();
            var comp = computerSelection.toLowerCase();
            console.log("player: " + player + "  bot: " + comp)


            if (player == "rock") {
                switch (comp) {
                    case "rock":
                        return "draw";
                    case "paper":
                        return "loss";
                    case "scissors":
                        return "win";
                }
            } else if (player == "paper") {
                switch (comp) {
                    case "rock":
                        return "win";
                    case "paper":
                        return "draw";
                    case "scissors":
                        return "loss";
                }

            } else {
                switch (comp) {
                    case "rock":
                        return "loss";
                    case "paper":
                        return "win";
                    case "scissors":
                        return "draw";
                }

            }

        }

       
       // for (var i = 1; i <= 5; i++) {
        //    console.log("ROUND " + i);
          //  var userChoice = prompt("Please enter your tool!:");

         //   console.log(playRound(userChoice, getComputerChoice()));

        //    console.log("--------------------------------")


            
       // }




