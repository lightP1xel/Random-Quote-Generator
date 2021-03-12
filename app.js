const randomQuote = document.querySelector('.randomQuoteContainer')
const authorQuote = document.querySelector('.authorContainer')
const generateBttn = document.querySelector('.createQuote')

async function getRandomQuote() {
  let response = await fetch('https://quotable.io/random')
  let result = await response.json()
  randomQuote.innerHTML = result.content
  authorQuote.innerHTML = `Author: ${result.author}`
}

generateBttn.addEventListener('click', getRandomQuote)
