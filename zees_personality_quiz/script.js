/*Add your JavaScript here*/
var pegasusScore = 0;
var unicornScore = 0;
var questionsAns = 0;

var restartButton = document.getElementById("restartButton");

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", unicorn);
q1a2.addEventListener("click", pegasus);
q2a1.addEventListener("click", pegasus);
q2a2.addEventListener("click", unicorn);
q3a1.addEventListener("click", unicorn);
q3a2.addEventListener("click", pegasus);

restartButton.addEventListener("click", restart);

function unicorn() {
  unicornScore +=1;
  questionsAns += 1;

  console.log("questionAns = " +questionsAns + "unicornScore = " + unicornScore);
  if (questionsAns == 3) {
  console.log("this quiz is dundundududundun");
  updateResult()
}
}

function pegasus() {
  pegasusScore +=1;
  questionsAns += 1;

  console.log("questionAns = " +questionsAns + "pegasusScore = " + pegasusScore);
  if (questionsAns == 3) {
  console.log("this quiz is dundundududundun");
  updateResult();
}
  }

function updateResult(){
  if (unicornScore >= 2){
  result.innerHTML = "You are a unicorn!";
  console.log("yayyy ur unicorn!");
} else if (pegasusScore >= 2){
  result.innerHTML = "You are a pegasus!";
  console.log("okiiiii ur a pegasus!")
}
}

function restart(){
  result.innerHTML = "Your result is...";
  unicornScore = 0;
  pegasusScore = 0;
  questionsAns = 0;
  console.log("replay replay replay!")
}
