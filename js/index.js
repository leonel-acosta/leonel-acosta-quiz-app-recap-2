console.clear()

// Dark mode function
const bodyElement = document.querySelector('[data-js="body"]')
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]')

darkModeButton.addEventListener("click", (event) => {
    bodyElement.classList.toggle("dark");

    if (darkModeButton.innerHTML == "DISABLED") {
        darkModeButton.innerHTML = "ENABLED";
        console.log("Dark mode: Enabled")
        }
    else if (darkModeButton.innerHTML == "ENABLED"){
        darkModeButton.innerHTML = "DISABLED"
        console.log("Dark mode: Disabled")
    }
  });

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

