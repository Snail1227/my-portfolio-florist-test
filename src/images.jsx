import { useEffect, useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Example: Fetch image data from your CMS or a static JSON file
        fetch("/gallery.json")
            .then((response) => response.json())
            .then((data) => setImages(data));
    }, []);

    return (
        <div className="gallery">
            {images.map((item, index) => (
                <div key={index} className="gallery-item">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
