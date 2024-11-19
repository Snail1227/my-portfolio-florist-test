import { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dux7p9r1o/resources/image/folder/florist-portfolio`,
          {
            headers: {
              Authorization: `Basic ${btoa("342954822732478:K4J0pKkfoYHTgo33uKlF0Gp5I4s")}`,
            },
          }
        );
        const data = await response.json();
        console.log("Cloudinary API Response:", data);
        const imageUrls = data.resources.map((item) => item.secure_url);
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
    <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Florist Portfolio ${index}`} style={{ width: "100%", height: "auto" }} />
      ))}
    </div>
  );
};

export default ImageGallery;
