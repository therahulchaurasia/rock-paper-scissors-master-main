
let score = 0;

const hide = () => {
    //hide rule block
    const rb = document.getElementById("rules");
    rb.style.display = "none";
};

const show = () => {
    //show rule block
    const rb = document.getElementById("rules");
    rb.style.display = "grid";
};

const userPicked = (up) => {
    //auto pick value for house
    const hp = housePicked();

    //select house and user value
    const hs = document.getElementById("house-" + hp);
    const us = document.getElementById("user-" + up);

    //select game-block, result-text, move-selection
    const gb = document.getElementById("game-block");
    const rt = document.getElementById("result-text");
    const ms = document.getElementById("move-selection");
    const s = document.getElementById("score");



    ms.style.display = "none"; //make move-selection invisiable
    us.style.opacity = 1; //make user selection visiable
    hs.style.opacity = 1; //make house selection visiable
    result_change(gb);//make result block visiable

    const result = winnerPicker(up, hp);//calculate result
    if (result === "you win") {
        console.log("hi");
        us.classList.add("winner");
    }
    if (result === "you lose") {
        console.log("bye");
        hs.classList.add("winner");
    }

    rt.innerHTML = result;//inserting result value in result span in html
    score < 0 ? score = 0 : score;
    s.innerHTML = score;
};

const result_change = (gb) => {
    //seting game-block from 3 col to 2 col to display result
    gb.classList.add("game-block-result");
    gb.classList.remove("game-block");

};

const housePicked = () => {
    const pickable = ["rock", "paper", "scissors"];

    //pick random from rock,paper,scissors
    return (pickable[Math.floor(Math.random() * 3)]);
};

const playAgain = () => {

    //reseting house and user selctions

    //inline-style
    document.getElementById("house-rock").removeAttribute("style");
    document.getElementById("user-rock").removeAttribute("style");

    document.getElementById("house-paper").removeAttribute("style");
    document.getElementById("user-paper").removeAttribute("style");

    document.getElementById("house-scissors").removeAttribute("style");
    document.getElementById("user-scissors").removeAttribute("style");

    //css file style
    document.getElementById("house-rock").classList.remove("winner");
    document.getElementById("user-rock").classList.remove("winner");

    document.getElementById("house-paper").classList.remove("winner");
    document.getElementById("user-paper").classList.remove("winner");

    document.getElementById("house-scissors").classList.remove("winner");
    document.getElementById("user-scissors").classList.remove("winner");

    //reseting result and making move-selection visiable
    document.getElementById("result-text").removeAttribute("style");
    document.getElementById("move-selection").removeAttribute("style");


    //reseting game-block from 3 col to 2 col to hide result
    const gb = document.getElementById("game-block");
    gb.classList.add("game-block");
    gb.classList.remove("game-block-result");

};

const winnerPicker = (us, hs) => {

    //draw
    if (us === hs) {
        score += 0;
        return "its a draw";
    }

    //winning conditions
    if (us === "rock" && hs === "scissors") {
        score += 1;
        return "you win";
    }
    if (us === "paper" && hs === "rock") {
        score += 1;
        return "you win";
    }
    if (us === "scissors" && hs === "paper") {
        score += 1;
        return "you win";
    }

    //losing conditions
    if (us === "rock" && hs === "paper") {
        score -= 1;
        return "you lose";
    }
    if (us === "scissors" && hs === "rock") {
        score -= 1;
        return "you lose";
    }
    if (us === "paper" && hs === "scissors") {
        score -= 1;
        return "you lose";
    }
};

