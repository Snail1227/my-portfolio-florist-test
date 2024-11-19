// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

// const APIimages = () => {
//   const cld = new Cloudinary({ cloud: { cloudName: 'dux7p9r1o' } });
  
//   // Use this sample image or upload your own via the Media Explorer
//   const img = cld
//         .image('florist-portfolio/test-one')
//         .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
//         .quality('auto')
//         .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

//   return (<AdvancedImage cldImg={img}/>);
// };

// export default APIimages





import{ useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const APIimages = () => {
  const [images, setImages] = useState([]);
  const cloudName = 'dux7p9r1o'; // Replace with your Cloudinary cloud name
  const folderName = 'florist-portfolio'; // Replace with your folder name

  useEffect(() => {
    const fetchImages = async () => {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/folder/${folderName}`;
      const username = '342954822732478'; // Replace with your API Key
      const password = 'K4J0pKkfoYHTgo33uKlF0Gp5I4s'; // Replace with your API Secret

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Basic Authentication
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setImages(data.resources); // Set the image resources to state
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const cld = new Cloudinary({ cloud: { cloudName } });

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {images.map((image) => {
          const cldImage = cld.image(image.public_id);
          return <AdvancedImage key={image.asset_id} cldImg={cldImage} />;
        })}
      </div>
    </div>
  );
};

export default APIimages;
