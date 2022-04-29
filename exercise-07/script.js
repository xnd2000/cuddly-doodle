let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let adjective = ['hastily', 'quickly', 'deliciously', 'blissfully', 'happily', 'pensively'];
let noun = ['a piece of toast', 'a cracker', 'a chocolate bar', 'a pizza', 'avocado toast', 'eggs', 'ramen', 'sushi', 'melons', 'rice', 'spinach', 'cheese', 'carrots'];
let verb = ['ran', 'walked', 'read', 'danced', 'called a friend', 'went to a museum', 'drew', 'wrote a song']

function renderPoem() {
    const RandomMonth = Math.floor(Math.random() * month.length);
    const RandomAdjective = Math.floor(Math.random() * adjective.length);
    const RandomNoun = Math.floor(Math.random() * noun.length);
    const RandomVerb = Math.floor(Math.random() * verb.length);
    
    document.getElementById("poem").innerText = `On a sunny day in ${month[RandomMonth]}, I ingested ${noun[RandomNoun]} very ${adjective[RandomAdjective]} and then ${verb[RandomVerb]}.`
}

renderPoem()