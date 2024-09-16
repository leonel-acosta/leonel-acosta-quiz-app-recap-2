console.clear()

// Dark mode function 
const bodyElement = document.querySelector('[data-js="body"]')
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]')

darkModeButton.addEventListener("click", () => {
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

