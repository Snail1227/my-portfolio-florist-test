
const APIimages = () => {

  const cloudName = 'dux7p9r1o'; // Replace with your Cloudinary cloud name
  const transformations = 'h_400,w_400,c_fill,q_auto,f_auto';

  const imageNames = [
    'Fall_Flowers_NYC_w2amyp',
    'image_93884367-e24d-4537-b270-4ab3ec3f49a3_grande_wkcndk',
    '167398L__04164_tweahv',
<<<<<<< HEAD
    'prettiest-flowers-painted-tongue-flower-lead-getty-1123-00763085ad384a9b9bf1f5cc81bee390_jdvtme.jpg'
=======
    'prettiest-flowers-painted-tongue-flower-lead-getty-1123-00763085ad384a9b9bf1f5cc81bee390_jdvtme'
>>>>>>> f8ad4d44ea2b72b6b7d8c30c8ce399f0f1303c74
  ];

  const generateImageUrls = (cloudName, transformations, imageNames) => {
    return imageNames.map(
      (name) =>
        `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/v1/${name}`
    );
  };

  const transformedUrls = generateImageUrls(cloudName, transformations, imageNames);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
      {transformedUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Optimized Image ${index + 1}`}
          className="hover-image"
        />
      ))}
    </div>
  );
};

export default APIimages;
