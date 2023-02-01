import React, { useState } from 'react';
import DropdownInput from '../Dropdown/DropdownInput';
import Modal from './Modal';

const ModalChoice = ({ title, onClose, options, value, handleChange, handleUpload }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await handleUpload();
      setNotification("Upload complete!");
      window.alert(notification)
    } catch (error) {
      setNotification("Upload failed.");
      window.alert(notification)
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={onClose}>
      <h1 className="text-black font-bold m-4">{title}</h1>
      <DropdownInput options={options} value={value} handleChange={handleChange} />
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white py-1 px-2 rounded-lg m-3" onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Upload'}
        </button>
      </div>
    </Modal>
  );
};

export default ModalChoice;
