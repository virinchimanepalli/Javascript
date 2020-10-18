

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
    console.log(yourChoice.src)
}
