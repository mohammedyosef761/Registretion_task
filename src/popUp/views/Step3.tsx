import React from "react";
import BoxImage from "../components/BoxImage";
import FooterStep from "../components/FooterStep";

const Step3 = () => {
  const [selectedImages, setSelectedImages] = React.useState<string[]>([]);

  return (
    <div className="">
      <div className="flex  flex-1 justify-center items-center mt-12">
        <h1 className="font-bold text-lg w-[337.5px] h-[65.65px] text-center ">
          Tell us what you are intereted in
        </h1>
      </div>
      <div className="w-[90%] mx-auto my-7">
        <BoxImage
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>
      <div className="flex flex-1 justify-center items-center flex-col">
        <FooterStep
          inputName={selectedImages?.length < 3}
          nameOfSubmit={selectedImages?.length < 3 ? "Pick 3 more" : "Submit"}
        />
      </div>
    </div>
  );
};

export default Step3;
