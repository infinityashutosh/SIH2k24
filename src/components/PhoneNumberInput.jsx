// PhoneNumberInput.js

import React, { useState } from 'react';
// import 'react-phone-number-input/style.css'; // Import the library's CSS
import PhoneInput from 'react-phone-number-input';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value) => {
    // Handle changes to the phone number input
    setPhoneNumber(value);
  };

  return (
    <div>
      <h2>Enter Your Phone Number</h2>
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
