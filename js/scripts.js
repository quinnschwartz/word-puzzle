$(document).ready(function() {
  $("#blanks form").submit(function(event) {
     event.preventDefault();

     var sentence = $("input#1").val();
     var vowels = ["a", "e", "i", "o", "u"];
     var sentenceSplit = sentence.split("");
     var length = sentenceSplit.length

     var finalArray = [];
     for(var index = 0; index < length; index += 1) {
       var letter = sentenceSplit.shift();
       if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
         finalArray.push("-");
       } else {
         finalArray.push(letter);
       }
      //return sentenceSplit.replace(vowels, "-");
     }
     var finalSentence = finalArray.join("");

     $("#puzzle").show();
     $("#output").text(finalSentence);

  });
});
