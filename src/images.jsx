import { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/dux7p9r1o/image/list/florist-portfolio.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const imageUrls = data.resources.map((item) =>
          `https://res.cloudinary.com/dux7p9r1o/image/upload/${item.public_id}.${item.format}`
        );

        setImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Florist Portfolio ${index}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
