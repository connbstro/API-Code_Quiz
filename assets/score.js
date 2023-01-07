let savedScores = JSON.parse(localStorage.getItem("quizSave"));

let list = document.getElementById("scoreList");
console.log(savedScores);

for (let i = 0; i < savedScores.length; i++) {
  let savedScore = savedScores[i];
  let initials = savedScore["initials"];
  let score = savedScore["score"];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(initials));
  li.appendChild(document.createTextNode(score));
  list.appendChild(li);
}
