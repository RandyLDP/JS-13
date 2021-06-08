
   let person ;
   let guess;
   let guessNum
 

   
    person = prompt("Welkom! Wat is je naam?");

    alert("Hey " + person);
    
    guessNum = Math.floor(Math.random()* 26);
    console.log("Het nummer is:" + guessNum);
    guess = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden.."));
    
    alert("Je nummer is " + guess);
   
    if 
    (guess !== guessNum){
        alert("Dat is niet correct");
    }
    else  {
        alert("Je hebt gewonen!!");
    }
    
        alert(  " Tot de volgende keer " + person + "!!");


    







