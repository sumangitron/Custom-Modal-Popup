import { useState } from "react";
import "./style.css";

const ModalPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setShowPopup(!showPopup)}>Popup</button>
      {showPopup && (
        <div className="popup-back-container">
          <div className="popup-container">
            <span onClick={() => setShowPopup(false)}>&#10060;</span>
            <div className="popup-content">
              <h1>Popup Content</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
