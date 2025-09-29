"use client";

import React, { useState } from "react";
import { ArrowLeft, Smartphone, Shield } from "lucide-react";
import OtpInput from "react-otp-input";
import { OTPInput } from "./OTPinput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function OtpLogin() {
  const [step, setStep] = useState("otp");
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const signUpData = useSelector((state) => state?.auth?.signUpData);

  const handleSendOtp = () => {};

  const handleVerify = async () => {
    if (otp.length !== 6) return alert("Enter full OTP");
    setIsLoading(false);
    debugger;
    console.log("signupdata", signUpData);
    // setIsLoading(false);
    alert("OTP Verified ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white px-4">
      <div className="w-full max-w-md bg-gray-900/70 border border-gray-700 rounded-2xl p-6 shadow-2xl backdrop-blur">
        {/* Back Button */}
        {step === "otp" && (
          <button
            onClick={() => {
              navigate("/signUp");
            }}
            className="flex items-center text-gray-400 hover:text-white mb-4 text-sm"
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
        )}
        {step === "otp" && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-600 flex items-center justify-center">
                <Shield size={28} />
              </div>
              <h1 className="text-2xl font-bold mt-4">Verify OTP</h1>
              <p className="text-gray-400">Code sent to {phone}</p>
            </div>

            <OTPInput
              length={6}
              onComplete={setOtp}
              className="justify-center"
            />

            <button
              onClick={handleVerify}
              disabled={otp.length !== 6 || isLoading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className="text-center text-sm text-gray-400">
              <button
                onClick={handleSendOtp}
                className="text-purple-400 hover:underline"
              >
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
