var express = require('express')
var app = express()

var choice = ['rock', 'paper', 'scissors'],
    serverPick,
    text;

function serverPlay() {
    serverPick = choice[Math.round(Math.random()*3)];
    return serverPick;
}

function confrontation(server, player) {
    if (server === "rock") {
            switch (player) {
                case "rock":
                text = "Same, try again";
                break;
                case "scissors":
                text = "Server wins";
                break;
                case "paper":  
                text = "Player wins";
                break;
            }
    }
     else if (server === "paper") {
            switch (player) {
                case "paper":
                text = "Same, try again";
                break;
                case "rock":
                text = "Server wins";
                break;
                case "scissors":  
                text = "Player wins";
                break;
            }
     }
      else if (server === "scissors") {
            switch (player) {
                case "scissors":
                text = "Same, try again";
                break;
                case "paper":
                text = "Server wins";
                break;
                case "rock":  
                text = "Player wins";
                break;
            }
    }
    return text;
}

app.get('/', function (req, res) {
  res.send('Hello You!')
})

app.get('/rock', function (req, res) {
  
  res.send(confrontation(confrontation(serverPlay(), "rock")));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})