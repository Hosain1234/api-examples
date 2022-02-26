const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
};
const displayQuote = (quote) => {
    const getQuoteId = document.getElementById('quote');
    getQuoteId.innerText = quote.quote;
};
