

function ageInDays(){
    var birthYear = prompt("whatr year were you born ?")
    var ageDays = (2020 - birthYear)*365
    console.log(ageInDays);
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageDays + 'days old')
    h1.setAttribute('id','ageInDays');

    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    // var ageInDays = 
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = "static/images/cat.jpg"
    div.appendChild(image);
}

// challenge 3 
function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice , botChoice;
    humanChoice = yourChoice
    console.log(humanChoice.id)
    // botChoice = randTopRpsInt()

    botChoice =numberToChoice(randTopRpsInt())

    results = decideWinner(humanChoice.id,botChoice)
    console.log(results)

    message = finalMessage(results);
    console.log(message)


     rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randTopRpsInt(){
    return Math.floor(Math.random()*3)
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice,botChoice){
    var rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore,computerScore]
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'you lost','color':'red'};}
        else if (yourScore === 0.5){
            return {'message':'you tied','color': 'yellow'};

        }
        else {
            return {'message': 'you won','color':'green'}
        }
}

function rpsFrontEnd(humanChoice,botChoice,finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='" + imageDatabase[humanChoice] + "' height = 150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    botDiv.innerHTML= "<img src='" + imageDatabase[botChoice] + "' height = 150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
    messageDiv.innerHTML="<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
}