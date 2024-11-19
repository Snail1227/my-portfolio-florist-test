import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://res.cloudinary.com/dux7p9r1o/image/list/florist-portfolio.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImages(data.resources); // Set image resources from the response
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <img
            key={image.public_id}
            src={`https://res.cloudinary.com/dux7p9r1o/image/upload/${image.public_id}`}
            alt={image.public_id}
            style={{ width: "200px", margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
