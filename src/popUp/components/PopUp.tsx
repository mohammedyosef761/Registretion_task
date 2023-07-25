import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import LogoLayout from "./LogoLayout";
import Step1 from "../views/Step1";
import Step2 from "../views/Step2";
import Step3 from "../views/Step3";
import SuccesRegister from "../views/SuccesRegister";
import { useRecoilState } from "recoil";
import { stepCounter } from "../store";

const PopUp = () => {
  const [step, setStep] = useRecoilState(stepCounter);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <LogoLayout onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box height={"fit-content"}>
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <SuccesRegister onClose={onClose} />}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopUp;
