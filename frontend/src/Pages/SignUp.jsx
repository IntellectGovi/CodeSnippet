import React from "react";

import Form from "../components/core/AboutUs/ContactForm";

const SignUp = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-full mb-20">
          <Form type={"SignUp"} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
