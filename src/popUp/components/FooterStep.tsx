import React from "react";
import StepperComp from "./StepperComp";
import { useRecoilState } from "recoil";
import { stepCounter } from "../store";
import { FooterStepType } from "../types";



const FooterStep = ({ inputName, nameOfSubmit }: FooterStepType) => {
  const [step, setStep] = useRecoilState(stepCounter);

  return (
    <>
      <div className="flex flex-col">
        <button
          type={"button"}
          className={`bg-primary mt-6 mb-2   w-[244.41px] h-[41.14px] text-white font-bold py-2 px-4 rounded-full ${
            inputName
              ? "bg-gray-500 text-gray-600"
              : "hover:text-primary hover:bg-white border hover:border-primary"
          }`}
          disabled={inputName}
          onClick={() => setStep(step + 1)}
        >
          {nameOfSubmit ? nameOfSubmit : "next"}
        </button>

        {step > 1 && (
          <button
            type={"button"}
            className={`bg-white border-primary mb-3   w-[244.41px] h-[41.14px] text-primary font-bold py-2 px-4 rounded-full ${"hover:text-primary hover:bg-#FF8C1E border hover:border-whute"}`}
            onClick={() => setStep(step - 1)}
          >
            back
          </button>
        )}
      </div>

      <StepperComp step={step} />
    </>
  );
};

export default FooterStep;
