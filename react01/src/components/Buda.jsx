import "./css/Buda.css";

const Buda = ({ _id, name, description, rating, main_image, onEdit, onDelete }) => {
  const imageSrc = `https://italy-backend.onrender.com/${main_image}`;

  return (
    <section className="buda columns">
      <section className="feature-image">
        <img src={imageSrc} alt={name} />
      </section>

      <section className="info">
        <h3>{name}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Rating:</strong> {rating}</p>

        <div className="buda-buttons">
          <button onClick={() => onEdit(_id)}>Edit</button>
          <button onClick={() => onDelete(_id)}>Delete</button>
        </div>
      </section>
    </section>
  );
};

export default Buda;

