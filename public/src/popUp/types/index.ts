import { ReactNode } from "react";

export type InputStep1Type = {
  inputName: string;
  setInputName: React.Dispatch<React.SetStateAction<string>>;
};

export type selectType = {
  nameOfSelect: string;
  setInputSelect: React.Dispatch<React.SetStateAction<string | undefined>>;
};
export type BoxImageType = {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
};

export type FooterStepType = {
  inputName: boolean;
  nameOfSubmit?: string;
};
export type LayoutProps = {
  children: ReactNode;
};
export type LogoLayoutType = {
  onOpen: () => void;
};
export type StepType = { step: number };
