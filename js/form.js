console.clear()
const form = document.querySelector("form")
const question = document.querySelector("#your-question")
const answer = document.querySelector("#answer")
const tags = document.querySelector("#tags")
const button = document.querySelector("button")

const newCardsContainer = document.querySelector('[data-js="custom-cards"]')

// characters counter

const charcount = document.querySelector('[data-js="charcount"]')
const input = document.querySelector("textarea")

input.addEventListener("input", (event) => {
    event.preventDefault()
    
    const maxChars =  input.getAttribute('maxlength')
    const usedChars = input.value.length
    const remainingChars = maxChars - usedChars
    console.log("Available characters: ",remainingChars+"/"+ maxChars)
    charcount.innerHTML = `${remainingChars} from ${maxChars} characters available`
})

// submit form - create new card below

form.addEventListener("submit",(event) => {
    event.preventDefault()
    const customCard = document.createElement("div")
    customCard.classList.add("card__wrapper")
    customCard.innerHTML = `
                <img class="bookmark" src="assets/bookmark.png" data-js="bookmark">
                <div class="question__card first__question" data-js="question-card">
                    <h2 class="question__text" data-js="question-text">${question.value}</h2>
                    <div class="answer__container" tabindex="0" data-js="answer-container">
                        <h3 class="show_answer__text" aria-label="show answer" data-js="show-answer">Show answer</h3>
                        <h3 class="answer__text hidden" data-js="answer" >${answer.value}</h3>
                    </div>
                    <div class="categories__container" data-js="categories-container">
                        <h4 class="category__tag" data-js="category-tag">${tags.value}</h4>
                    </div>
                </div>
    `
    newCardsContainer.append(customCard)

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    console.log("New question:", question.value , "Answer:", answer.value, "Tags:", tags.value)
    event.target.reset();
})