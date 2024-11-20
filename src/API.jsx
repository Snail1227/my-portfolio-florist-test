
const APIimages = () => {

  const cloudName = 'dux7p9r1o'; // Replace with your Cloudinary cloud name
  const transformations = 'c_fill,q_auto,f_auto';

  const imageNames = [
    'Fall_Flowers_NYC_w2amyp',
    'image_93884367-e24d-4537-b270-4ab3ec3f49a3_grande_wkcndk',
    '167398L__04164_tweahv'
  ];

  const generateImageUrls = (cloudName, transformations, imageNames) => {
    return imageNames.map(
      (name) =>
        `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/v1/${name}`
    );
  };

  const transformedUrls = generateImageUrls(cloudName, transformations, imageNames);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {transformedUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Optimized Image ${index + 1}`}
          style={{ width: 'auto', height: 'auto', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
};

export default APIimages;
