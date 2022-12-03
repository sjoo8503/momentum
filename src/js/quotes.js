const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: 'Oprah Winfrey',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant. ",
    author: 'Robert Louis Stevenson',
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },
  {
    quote:
      'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'The only impossible journey is the one you never begin.',
    author: 'Tony Robbins',
  },
  {
    quote: 'The purpose of our lives is to be happy.',
    author: 'Dalai Lama',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `- ${todayQuote.author} -`;