//�lafur �sd�sarson
//11.2.2018
//Verkefni 5-3 FORR3JS05DU

function Q() {
  this.question = "Number what is this question?";
  this.answers = ['1', '2', '3', '4'];
  this.correct = '1';
  this.getQuestion = function() {
    return this.question
  };
  this.getListOfAnswers = function() {
    var list =""; 
    for (var i = 0; i < this.answers.length; i++){
     list = list + "<li>" + this.answers[i] + "</li>";
    }
    list = "<ul>" + list + "</ul>";
    return list; 
  };

}

var q1 = new Q();
var q2 = new Q();
q2.question = "Are you a human?";
q2.answers = ['True', 'False'];
q2.correct = 'True';

//question
var quest = document.getElementById('question'); 
quest.innerHTML = q1.getQuestion();


//answers
var answer = document.getElementById('answers'); 
answer.innerHTML = q1.getListOfAnswers();
