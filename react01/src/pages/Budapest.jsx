import React, { useEffect, useState } from "react";
import axios from "../components/axios";
import "./css/Budapest.css";

function Budapest() {
  const [budas, setBudas] = useState([]);

  useEffect(() => {
    axios.get("/api/budas")
      .then((res) => setBudas(res.data))
      .catch((err) => console.error("Failed to fetch budas:", err));
  }, []);

  return (
    <main className="budapest-page">
      <h1 className="section-title">Budapest Adventures</h1>

      <section className="buda-grid">
        {budas.map((buda) => (
          <div className="buda-card" key={buda._id}>
            <img src={`/${buda.main_image}`} alt={buda.name} />
            <div className="buda-content">
              <h2>{buda.name}</h2>
              <p>{buda.description}</p>
              <p className="rating">⭐ {buda.rating}/10</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Budapest;
