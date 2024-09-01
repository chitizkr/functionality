import React from "react";
import OtpInput from "./OtpInput";

export default function OptApp() {
  function handleComplete() {
    alert("opt subitted successfully");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Enter Otp</h2>
      <OtpInput lenght={4} oncomplete={handleComplete} />
    </div>
  );
}
