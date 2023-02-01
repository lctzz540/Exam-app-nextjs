import Image from "next/image";
import React from "react";
import Modal from "./Modal";

const ModalCard = ({ image, children, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="flex">
        {image && (
          <Image
            className="w-48 rounded-lg object-cover h-full my-auto "
            src={URL.createObjectURL(image)}
            alt="Modal Image"
            width="300"
            height="400"
          />
        )}
        <div className="relative px-6 py-8">{children}</div></div>
    </Modal>
  );
};
export default ModalCard;
