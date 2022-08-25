import { useState } from "react";

/**
 * @images Array of images
 */
export const Gallery = ({ images }) => {
  const [spotlight, setSpotlight] = useState(
    images && images.length && images[0]
  );

  if (!images) return null;
  if (!images.length) return null;

  return (
    <div className="w-full flex flex-col shadow-lg bg-white ">
      <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden ">
        <img
          src={spotlight}
          alt="blabla"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex overflow-x-auto p-4 space-x-4 justify-center bg-white">
        {images.map((image) => (
          <div
            key={image}
            className="flex-shrink-0 min-w-20 h-20 cursor-pointer"
            onClick={() => setSpotlight(image)}
          >
            <img
              src={image}
              alt="blabla"
              className="w-full h-full object-center object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
