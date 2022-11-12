import words from '../data.json'

function GetWord(){
    let number = Math.floor(Math.random() * words.length);
    let word = words[number];
    
    return word;
}

export default GetWord;