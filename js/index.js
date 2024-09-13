// Bookmark function

const bookmark = document.querySelector('[data-js="bookmark"]')

bookmark.addEventListener("click", (event) => {
    if (bookmark.src.includes("assets/bookmark.png")) {
        bookmark.src = "assets/bookmark_filled.png";
        console.log("Bookmark added")
        }
    else if (bookmark.src.includes("assets/bookmark_filled.png")){
        bookmark.src = "assets/bookmark.png"
        console.log("Bookmark removed")
    };
})

// Show answer button function

const answerContainer = document.querySelector('[data-js="answer-container"]')
const showAnswer  = document.querySelector('[data-js="show-answer"]')
const answer  = document.querySelector('[data-js="answer"]')

answerContainer.addEventListener("click", (event) => {
    if (answer.classList.contains("hidden")){
    showAnswer.classList.add("hidden")
    answer.classList.remove("hidden")
    console.log("Show Answer")
}
    else if (showAnswer.classList.contains("hidden")){
    answer.classList.add("hidden")
    showAnswer.classList.remove("hidden")
    console.log("Hide Answer")
};
})

