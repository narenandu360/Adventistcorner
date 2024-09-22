var answers = ["B", "C", "A","C", "B", "A", "A", "D", "C", "A", "C", "B", "B", "A", "C", "A", "C", "A", "A", "D" ],
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    document.getElementById("myresults").innerHTML = "Your score is " + getScore() + "/" + tot;
    if (getScore() > 2) {
        console.log("Bravo");
    }
}