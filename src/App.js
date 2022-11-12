import React from "react";
import GetWord from "./Functions/GetWord";
import ReplaceWith_ from "./Functions/ReplaceWith_";
import GetAlphabets from "./Functions/GetAlphabets";
import './index.css'

function App() {
  const [word , setWord ] = React.useState(GetWord().split(""));//Get word from data.json
  const [wordCount , setWordCount ] = React.useState(word.length);//Get length of the word
  const [alphabets , setAlphabets ] = React.useState(GetAlphabets());//Get alphabet A-Z
  const [trueLetterAry , setTrueLetterAry ] = React.useState([]);//save the right letter

  console.log(word)
  let finalWordCount = 0;
  let missTry =0;//count that how many times i've failed
  let finalWord = ReplaceWith_(wordCount , trueLetterAry) ;//replace with _ from the start

  
  function Clicked(e){
    let trueWord = document.querySelector("#TrueWord");
    let letter = e.target.innerHTML;
    let WinOrLoseStatus = document.getElementById('WinORLose');
    let i=0;
    //Loop and check every letter in word that match the user clicked letter or not
    for(i=0;i<wordCount; i++){
      if(letter == word[i]){
        finalWordCount ++ ;
        //if the word has two same letter or more this will trigger
        if(trueLetterAry.includes(letter)){
          let skipIndex = trueLetterAry.indexOf(letter);
          trueLetterAry[word.indexOf(letter , skipIndex+1)] = letter;
          disabled(e.target)
        }
        //if letter is only one in word this will do the work 
        trueLetterAry[word.indexOf(letter)] = letter;
        finalWord = ReplaceWith_(wordCount , trueLetterAry);
        trueWord.innerHTML =  finalWord;
        disabled(e.target)
      }
    }
    //if the user clicked letter was wrong This will increase the failed tried
    if(!word.includes(letter)){
      missTry++;
      disabled(e.target)
    }
    //check win condition
    if(finalWordCount == word.length){
      CheckWinOrLose(true , WinOrLoseStatus )
    }
    // check false condition
    if(missTry == 5){
      console.log(missTry)
      CheckWinOrLose(false , WinOrLoseStatus)
    }
  }
  function disabled(target){
    target.classList.add('disabled')
    target.disabled = true; 
  }

  // Main function for checking Win or Lose
  function CheckWinOrLose(condition ,element){
    if(condition){
      element.innerHTML ='YOU WON';
      element.classList.remove('dissappear');
    }if(condition == false){
      element.innerHTML ='YOU Lose';
      element.classList.remove('dissappear');
    }
  }

  return (
    <div className="container">
      <h1 id="TrueWord">{finalWord}</h1>
      <h2 className="dissappear" id="WinORLose">You Lose</h2>
      <div id="keyboard">
      {
        alphabets.map(ele => (
          <button key={`${ele}2`} onClick={(e)=> Clicked(e)} className="Alphabet">{ele}</button>
        ))
      }
        
      </div>
    </div>
  );
}

export default App;
