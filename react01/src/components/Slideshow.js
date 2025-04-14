import './css/Slideshow.css';

function Slideshow() {
  return (
    <section className="slideshow columns">
        <section>
          <img src={Slideshow.img} alt={Slideshow.name} />
        </section>
    </section>
  );
}

export default Slideshow;
