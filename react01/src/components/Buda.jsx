import "./css/Buda.css";

const Buda = (buda) => {
    const imageSrc = `http://localhost:3002/${buda.main_image}`;
    return (
        <section className="buda columns">
            <section className="feature-image">
                <img src={imageSrc} alt={buda.name}/>
            </section>
            <section className = "info">
                <h3>{buda.name}</h3>
                <p>Descritpion: {buda.description}</p>
                <p>Rating: {buda.rating}</p>
            </section>
        </section>
    );
};

export default Buda;