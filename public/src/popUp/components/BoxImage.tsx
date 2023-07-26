import React from "react";
import { images } from "../contants/data";
import { BoxImageType } from "../types";

const BoxImage = ({ selectedImages, setSelectedImages }: BoxImageType) => {
  const handleImageClick = (imageName: string) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(imageName)
        ? prevSelected.filter((img: string) => img !== imageName)
        : [...prevSelected, imageName]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center cursor-pointer">
      {images.map((image, index) => (
        <div
          key={image.name}
          className={`relative  group ${
            selectedImages.includes(image.name)
              ? "bg-primary rounded-[8px]"
              : ""
          }`}
          onClick={() => handleImageClick(image.name)}
        >
          <img src={image?.image} alt={image.title} className="w-full h-auto" />
          <div className="absolute top-2 right-2">
            {selectedImages.includes(image.name) && (
              <svg
                width="22"
                height="21"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.02211" cy="5.57082" r="5.06856" fill="#434E61" />
                <path
                  d="M3.34363 5.80374L4.974 7.43411L8.70059 3.70752"
                  stroke="#FF8C1E"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white p-2 rounded-[8px] ">
            <h3 className="text-xl font-bold">{image.title}</h3>
          </div>

          <div className="absolute bottom-0  left-0 w-full h-full bg-zinc-300 bg-opacity-0 group-hover:bg-opacity-50 text-white p-2  group-hover:opacity-100 transition-opacity rounded-[8px]"></div>
        </div>
      ))}
    </div>
  );
};

export default BoxImage;
