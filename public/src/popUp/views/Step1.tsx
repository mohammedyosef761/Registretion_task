import React from "react";
import RectangleStep1 from "../components/RectangleStep1";
import FooterStep from "../components/FooterStep";
import InputStep1 from "../components/InputStep1";


const Step1 = () => {
    const [inputName,setInputName]  = React.useState<string>("")
  return (
    <div className="flex flex-col flex-1 justify-center items-center mt-32 gap-6 ">
      <RectangleStep1 />
      <p className="text-[#D9D9D9] ">alice@wonderland.space</p>
      <div className="flex flex-col flex-1 justify-center items-center">
        <h1 className="font-bold text-3xl">Welcome to Giki</h1>
     
        <InputStep1 inputName={inputName} setInputName={setInputName}/>
        <p className="w-[50%] text-center mt-3">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ullam et. Possimus eveniet enim vel accusamus soluta? Recusandae, voluptates a.
        </p>

      </div>
    <FooterStep inputName={inputName?.length === 0 ? true : false } />
    </div>
  );
};

export default Step1;
