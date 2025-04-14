import "./css/Buda.css";

const Buda = (props) => {
    return (
        <section className="buda columns">
            <section className="feature-image">
                <img src={"http://localhost:3001/images/" + props.main_image} alt={props.name}/>
            </section>
            <section className = "info">
                <h3>{props.name}</h3>
                <p>Descritpion: {props.description}</p>
                <p>Rating: {props.rating}</p>
            </section>
        </section>
    );
};

export default Buda;