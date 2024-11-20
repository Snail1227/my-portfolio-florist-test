import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { AdvancedImage } from '@cloudinary/react';

const APIimages = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dux7p9r1o' } });

  const listOfImg = [
    "Fall_Flowers_NYC_w2amyp",
    "image_93884367-e24d-4537-b270-4ab3ec3f49a3_grande_wkcndk",
    "167398L__04164_tweahv"
  ];

  return (
    <div>
      {listOfImg.map((imgId, index) => {
        const img = cld
          .image(imgId)
          .format(format.auto()) // Auto-format for optimal image type
          .quality(quality.auto()) // Auto-quality for compression
          .resize(auto().gravity(autoGravity()).width(500).height(500)); // Resize with cropping and gravity

        return <AdvancedImage key={index} cldImg={img} />;
      })}
    </div>
  );
};

export default APIimages;
