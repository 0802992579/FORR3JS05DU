//Ólafur Ásdísarson
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
var activeQuestion = q1;

//question
var quest = document.getElementById('question'); 
quest.innerHTML = activeQuestion.getQuestion();
//answers
var answer = document.getElementById('answers'); 
answer.innerHTML = activeQuestion.getListOfAnswers();

var list=document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++){
   list[i].addEventListener('click',function(e){isRight(e)},false);
}

function updateQuestion(){
   //question
   var quest = document.getElementById('question');  
   quest.innerHTML = activeQuestion.getQuestion();
   //answers
   var answer = document.getElementById('answers'); 
   answer.innerHTML = activeQuestion.getListOfAnswers();

   var list=document.getElementsByTagName('li');
   for (var i = 0; i < list.length; i++){
      list[i].addEventListener('click',function(e){isRight(e)},false);
}


}

function isRight(e){
  console.log(e.target.textContent);
  if (e.target.textContent == activeQuestion.correct){
  	e.target.setAttribute("class", "right");
	activeQuestion = q2;
	updateQuestion();
  } 
 else
     {
	e.target.setAttribute("class", "wrong");} 
}