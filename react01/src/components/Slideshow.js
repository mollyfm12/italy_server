import {useState} from "react";
import './css/Slideshow.css';

const SlideShow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg|webp|JPG)$/)
    );
    console.log("Loaded images:", images);

    const showNextImage = () => {
        /*
        if(imageIndex == images.length - 1){
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex+1);
        }
            */

        setImageIndex(imageIndex === images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex === 0? images.length-1:imageIndex-1);
    }

    return (
        <section id="slideshow">
            <img src={images[imageIndex] || ""} alt="slideshow" />
            <p>
                <button id="previous" onClick={showPreviousImage}> ← </button>
                <button id="next" onClick={showNextImage}> → </button>
            </p>
        </section>
    );
};

export default SlideShow;