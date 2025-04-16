import "./css/Buda.css";

const Buda = (buda) => {
  const imageSrc = `https://italy-backend.onrender.com/${buda.main_image}`;

  return (
    <section className="buda columns">
      <section className="feature-image">
        <img src={imageSrc} alt={buda.name} />
      </section>

      <section className="info">
        <h3>{buda.name}</h3>
        <p><strong>Description:</strong> {buda.description}</p>
        <p><strong>Rating:</strong> {buda.rating}</p>
      </section>
    </section>
  );
};

export default Buda;
