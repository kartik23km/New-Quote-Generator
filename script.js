const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// generating a random number
function newQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) + 1];
    quoteText.textContent = quote.text;
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else authorText.textContent = quote.author
}

//fetching online API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'

    try {
        const response = await fetch(apiURL)
        apiQuotes = await response.json()
        newQuote();
    }
    catch (error) {
        // catch errors
    }
};

//twitter button

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuotes();