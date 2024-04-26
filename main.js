document.addEventListener("DOMContentLoaded", function() {
    const scoreDisplay = document.getElementById("current-score");
    const runButton = document.getElementById("runButton");
    const outButton = document.getElementById("outButton");
    const outcomeDisplay = document.getElementById("outcome");

    let score = 0;

    runButton.addEventListener("click", function() {
        const runs = Math.floor(Math.random() * 6) + 1; // Random runs between 1 and 6
        score += runs;
        scoreDisplay.textContent = score;

        if (runs === 4 || runs === 6) {
            outcomeDisplay.textContent = `You hit a ${runs}!`;
        } else {
            outcomeDisplay.textContent = `You ran ${runs}!`;
        }
    });

    outButton.addEventListener("click", function() {
        outcomeDisplay.textContent = "You are out!";
        runButton.disabled = true;
        outButton.disabled = true;
    });
});
