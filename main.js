console.log("Hello world"); 

// Challenge 1
var word1 = "jumbo";
var word2 = "shrimp"; 
var wordScore2 = 0; 
var wordScore1 = 0; 
var printOut = document.getElementById("finalNumber");

for (var i = 0; i < word1.length; i++) {
 var numbers = (word1.charCodeAt(i)) - 96; 
     wordScore1 += numbers; 
}; 
 console.log(wordScore1); 

for (var j = 0; j < word2.length; j++) {
    var numbersTwo = (word2.charCodeAt(j)) - 96; 
         wordScore2 += numbersTwo; 
 };
    console.log(wordScore2); 


if (wordScore2 > wordScore1) {
    var whateverOut = document.getElementById('finalNumber');
    whateverOut.innerHTML = '<h1>' + wordScore2 + '</h1>'; 
 } else {
     var whateverOut = document.getElementById('finalNumber');
     whateverOut.innerHTML = '<h1>' + wordScore1 + '</h1>'; 
 }





    






