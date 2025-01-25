import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Modal.css";

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;  

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative bg-transparent bg-opacity-95 rounded-lg max-w-2xl w-full p-10 z-20">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white hover:text-cyan-light"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className="bg-cyan-dark bg-opacity-95 w-full p-6 rounded-lg ">
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default Modal;
