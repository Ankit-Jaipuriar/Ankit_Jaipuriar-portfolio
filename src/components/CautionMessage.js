import React from 'react';
import './CautionMessage.css';

const CautionMessage = () => {
  return (
    <div className="caution__message">
      <div className="caution__message-box">
        ⚠️ This website is under development.<br />
        Please use a <strong>laptop or larger screen</strong> for the best experience.
      </div>
    </div>
  );
};

export default CautionMessage;
