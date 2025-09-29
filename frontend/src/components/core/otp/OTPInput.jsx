import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";

export function OTPInput({ length = 6, onComplete, className }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }

    const otpValue = newOtp.join("");
    if (otpValue.length === length) onComplete?.(otpValue);
  };

  return (
    <div className={cn("flex gap-3", className)}>
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, i)}
          className={cn(
            "w-12 h-14 text-center text-xl font-bold rounded-lg border-2 bg-gray-800 text-white",
            "focus:outline-none focus:ring-2 focus:ring-purple-500 border-gray-600"
          )}
        />
      ))}
    </div>
  );
}
