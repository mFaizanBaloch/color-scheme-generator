const display = document.getElementById("display")
const inputColor = document.querySelector("input[type='color']")
const inputSelectedScheme = document.getElementById("select-scheme")
const btnGetScheme = document.getElementById("btn-get-scheme")

// Functionality under progress for copying to clipboard.
//
// display.addEventListener('click', function(e){
//     if (e.target.classList.contains("color-code-class")) {
//         console.log(e.target.textContent)
//     } 
//     else if (e.target.classList.contains("color-img-class")) {
//         const parentElement = e.target.parentElement
//         const colorCodeChild = parentElement.querySelector(".color-code-class")
//         console.log(colorCodeChild.textContent)
//     }
// })

btnGetScheme.addEventListener('click', function(){
    const colorCode = inputColor.value.slice(1) // removing # from hex code because colorapi requires
    const colorScheme = inputSelectedScheme.value.toLowerCase() // lowercasing because colorapi requires
    const count = 5 // hard coded at 5 colors for now

    getColorsAndRender(colorCode, colorScheme, count)
})

function getColorsAndRender(colorCode, colorScheme, count) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorScheme}&count=${count}`)
        .then(response => response.json())
        .then(data => renderColors(data.colors))
}

function renderColors(colorCodes) {
    document.getElementById('color-1').style.backgroundColor = `${colorCodes[0].hex.value}`
    document.getElementById('color-2').style.backgroundColor = `${colorCodes[1].hex.value}`
    document.getElementById('color-3').style.backgroundColor = `${colorCodes[2].hex.value}`
    document.getElementById('color-4').style.backgroundColor = `${colorCodes[3].hex.value}`
    document.getElementById('color-5').style.backgroundColor = `${colorCodes[4].hex.value}`
    document.getElementById('color-code-1').textContent = `${colorCodes[0].hex.value}`
    document.getElementById('color-code-2').textContent = `${colorCodes[1].hex.value}`
    document.getElementById('color-code-3').textContent = `${colorCodes[2].hex.value}`
    document.getElementById('color-code-4').textContent = `${colorCodes[3].hex.value}`
    document.getElementById('color-code-5').textContent = `${colorCodes[4].hex.value}`
}