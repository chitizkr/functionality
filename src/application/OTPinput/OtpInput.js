import React, { useRef, useState } from "react";

function OtpInput({ length = 4, oncomplete }) {
  const [otp, setotp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  function handleChange(target, index) {
    const value = target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setotp(newOtp);

      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      } else {
        oncomplete(newOtp.join(""));
      }
    }
  }

  const handleBackspace = (element, index) => {
    if (element.value === "") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        margin: "auto",
      }}
    >
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) =>
            e.key === "Backspace" && handleBackspace(e.target, index)
          }
          ref={(el) => (inputRef.current[index] = el)}
          style={{
            display: "flex",
            width: "40px",
            height: "40px",
            fontSize: "18px",
          }}
        />
      ))}
    </div>
  );
}

export default OtpInput;
