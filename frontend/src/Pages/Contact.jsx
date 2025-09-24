import React from "react"
import ContactForm from "../components/core/AboutUs/ContactForm"



const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        

        {/* Contact Form */}
        <div className="mb-20 w-full">
          <ContactForm />
        </div>
      </div>

      
    </div>
  )
}

export default Contact