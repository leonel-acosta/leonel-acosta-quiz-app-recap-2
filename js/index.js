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
    }
}
)