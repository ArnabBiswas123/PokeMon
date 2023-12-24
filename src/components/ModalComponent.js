import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../slices/modalslice/toggleModal";

export default function ModalComponent() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <Center>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          dispatch(closeModal);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hi Hello</ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
