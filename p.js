document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const tweetQuoteBtn = document.getElementById('tweet-quote');
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela"
        },
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "Whether you think you can or you think you can't, you're right.",
            author: "Henry Ford"
        },
        {
            text: "Your time is limited, so don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
            author: "Oprah Winfrey"
        }
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    function displayNewQuote() {
      
        quoteText.classList.remove('fade-in');
        quoteAuthor.classList.remove('fade-in');
        void quoteText.offsetWidth;
        void quoteAuthor.offsetWidth;
        const quote = getRandomQuote();
        quoteText.classList.add('fade-in');
        quoteAuthor.classList.add('fade-in');
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author;
        const tweetText = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
        tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
    }
    newQuoteBtn.addEventListener('click', displayNewQuote);
    displayNewQuote();
});