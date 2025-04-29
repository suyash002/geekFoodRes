import React from 'react';
import quotes from '../data/quotes.json';
import '../css/quote.css';

const Quote = () => {
  return (
    <div className="quotes-container">
      {quotes.map((item, index) => (
        <blockquote key={index} className="quote-block">
          <p>"{item.quote}"</p>
          {item.author && <footer>- {item.author}</footer>}
        </blockquote>
      ))}
    </div>
  );
};


export default Quote;