import React, { useEffect, useState } from 'react';
import SlideShow from '../components/Slideshow';
import axios from '../components/axios';
import './css/Home.css';

import main from '../images/home/main.png';
import capp from '../images/home/capp.png';
import dumoClose from '../images/home/dumo-close.png';
import flight from '../images/home/flight.JPG';
import sunset from '../images/home/sunset.png';
import streetDuomo from '../images/home/street-duomo.JPG';

function Home() {
  const [budas, setBudas] = useState([]);

  useEffect(() => {
    const getBudas = async () => {
      try {
        const response = await axios.get('/api/budas');
        setBudas(response.data);
      } catch (err) {
        console.error('Failed to fetch budas:', err);
      }
    };

    getBudas();
  }, []);

  return (
    <main className="home">
      <section className="slideshow-container">
        <SlideShow />
      </section>

      <h1 className="home-title">Welcome!</h1>

      <section className="main-content">
        <div className="text-column">
          <p>
            Hi and welcome! Whether you're planning your own study abroad adventure, reminiscing about past
            travels, or just curious about life in another country, you’re in the right place.
          </p>
          <p>
            Studying abroad is more than just going to class in a new place. It’s about discovering different
            cultures, making new memories, and stepping outside your comfort zone. Here, I’ll be sharing personal
            experiences, tips for navigating life in a new country, and insights on everything I was lucky enough
            to experience.
          </p>
          <p>
            I had the incredible opportunity to study in Florence, Italy, a city full of history, art, and amazing
            food. While abroad, I also traveled to nine other countries and explored countless cities, each with
            its own unique experiences. I’ve learned so much along the way, and I can’t wait to share those
            adventures with you!
          </p>
          <p>So grab a coffee, and join me on this journey. Let’s explore the world together!</p>
        </div>

        <div className="image-column">
          <img src={main} alt="Main collage" />
        </div>
      </section>

      <section className="gallery">
        <img src={capp} alt="Cappuccino" />
        <img src={dumoClose} alt="Duomo Close" />
        <img src={flight} alt="Airplane Wing" />
        <img src={sunset} alt="Florence Sunset" />
        <img src={streetDuomo} alt="Street with Duomo" />
      </section>

    </main>
  );
}

export default Home;
