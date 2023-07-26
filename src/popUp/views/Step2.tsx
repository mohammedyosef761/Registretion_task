import React from "react";
import Select from "../components/Select";
import FooterStep from "../components/FooterStep";

const Step2 = () => {
  const [inputSelectCountry, setInputSelectCountry] = React.useState<string>();
  const [inputSelectRegion, setInputSelectRegion] = React.useState<string>();

  return (
    <div className="flex flex-col flex-1 justify-center items-center mt-12">
      <h1 className="font-bold text-lg w-[337.5px] h-[65.65px] text-center mb-12">
        Pick your language country/region
      </h1>
      <div className="mb-40">
        <Select
          nameOfSelect={"country"}
          setInputSelect={setInputSelectCountry}
        />
        <Select nameOfSelect={"region"} setInputSelect={setInputSelectRegion} />
      </div>
      <FooterStep inputName={!inputSelectCountry || !inputSelectRegion} />
    </div>
  );
};

export default Step2;
