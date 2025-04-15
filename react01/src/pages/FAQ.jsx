import React, { useState } from 'react';
import './css/FAQ.css';

function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const questions = {
    option1: 'For packing for the whole semester it is a difficult task. Florence weather in the winter tends to be colder around 50°F; however, in the spring months it gets a lot warmer...',
    option2: 'Common methods of travel from Florence include trains, buses, and regional flights. Flying directly out of Florence can be either sparse or expensive when it comes to your options. Luckily...',
    option3: 'There are several cultural differences, such as meal times, tipping practices, and communication styles. In Italy, people value their time and traditions. Many restaurants will not open until 7:30 pm because Italians eat dinner much later than in America...',
  };

  return (
    <main className="faq-page">
      <section className="faq-select">
        <h2>Common Questions:</h2>
        <select
          value={selectedQuestion}
          onChange={(e) => setSelectedQuestion(e.target.value)}
        >
          <option value="">-- Select a question --</option>
          <option value="option1">What to pack?</option>
          <option value="option2">What are common methods of travel from Florence?</option>
          <option value="option3">What are cultural differences between Italy and the U.S.?</option>
        </select>
        {selectedQuestion && (
          <p className="faq-answer">{questions[selectedQuestion]}</p>
        )}
      </section>

      <section className="faq-form">
        <form method="POST">
          <h2>Questionnaire</h2>
          <input type="hidden" name="access_key" value="3c232cfb-3f97-4a86-b81c-19a9b278eec2" />

          <div className="form-field">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-field">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-field">
            <label>Questions, Comments, Concerns:</label>
            <textarea name="message" required></textarea>
          </div>

          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <button type="submit">Submit Form</button>
          <div id="result"></div>
        </form>
      </section>

      <section className="faq-resources">
        <h3>Helpful Resources:</h3>
        <ul>
          <li>Amazon Packing Essentials</li>
          <li>Cultural Customs in Italy</li>
          <li>Italian Fashion</li>
          <li>Best Walking Shoes</li>
        </ul>
      </section>
    </main>
  );
}

export default FAQ;
