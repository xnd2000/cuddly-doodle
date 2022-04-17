let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let adjective = ['hastily', 'quickly', 'deliciously', 'blissfully', 'happily', 'pensively'];
let noun = ['a piece of toast', 'a cracker', 'a chocolate bar', 'a salad', 'avocado toast', 'eggs', 'ramen', 'sushi', 'melons', 'rice', 'spinach', 'cheese', 'carrots'];
let verb = ['run', 'walk', 'read', 'dance', 'call a friend', 'go to a museum', 'draw', 'write a song']

function renderPoem() {
    const RandomMonth = Math.floor(Math.random() * month.length);
    const RandomAdjective = Math.floor(Math.random() * adjective.length);
    const RandomNoun = Math.floor(Math.random() * noun.length);
    const RandomVerb = Math.floor(Math.random() * verb.length);
    
    document.getElementById("poem").innerText = `On a random day in ${month[RandomMonth]}, I ate ${noun[RandomNoun]} rather ${adjective[RandomAdjective]} and proceeded to ${verb[RandomVerb]}.`
}

renderPoem()