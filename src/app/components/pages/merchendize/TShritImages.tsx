import Image from 'next/image';
import { useState } from 'react';

const TShritImages: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<string>(images[0]);

  return (
    <div className="flex flex-col xs:flex-row-reverse gap-2.5 md:gap-4 md:sticky top-20 lg:top-32">
      <div className="w-full aspect-square relative bg-white rounded-10 md:rounded-20 overflow-hidden">
        <Image
          src={activeImage}
          width={600}
          height={500}
          alt="T-shirt Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex xs:flex-col items-center gap-2.5 lg:gap-5">
        {images.map((image, idx) => (
          <button
            key={idx}
            className={`w-70 h-70 sm:w-20 sm:h-20 bg-white border ${
              image === activeImage ? 'border-brand-dark' : 'border-transparent'
            } rounded p-2`}
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image}
              width={80}
              height={20}
              alt="T shirt Image"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TShritImages;
