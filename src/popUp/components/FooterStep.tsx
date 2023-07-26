import React from "react";
import StepperComp from "./StepperComp";
import { useRecoilState } from "recoil";
import { stepCounter } from "../store";
import { FooterStepType } from "../types";



const FooterStep = ({ inputName, nameOfSubmit }: FooterStepType) => {
  const [step, setStep] = useRecoilState(stepCounter);
   console.log("inputName",inputName)
  return (
    <>
      <div className="flex flex-col">
        <button
          type={"button"}
          className={`mt-6 mb-2   w-[244.41px] h-[41.14px] text-white font-bold py-2 px-4 rounded-[8px] ${
            inputName
              ? "bg-gray-500 text-gray-600"
              : "hover:text-primary hover:bg-white border hover:border-primary bg-primary "
          }`}
          disabled={inputName}
          onClick={() => setStep(step + 1)}
        >
          {nameOfSubmit ? nameOfSubmit : "NEXT"}
        </button>

        {step > 1 && (
          <button
            // type={"button"}
            className={`  mb-3   w-[244.41px] h-[41.14px] border-white text-[#262626] font-bold py-2 px-4  ${"hover:text-primary hover:bg-#FF8C1E "}`}
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
      </div>

      <StepperComp step={step} />
    </>
  );
};

export default FooterStep;
