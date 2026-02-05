import React, { useState } from "react";
import CustomButton from "../common/CustomButton";

const Contact = () => {
  const [email, setemail] = useState("");

  const handleSubmit = () => {
    console.log("Submitted email:", email);
  };
  return (
    <section className="bg-blue-500 text-white h-96 ">
      <div className="px-80 py-20 space-y-8">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-white-600">
          {" "}
          Have questions for feedback? Reach out to us! we are here to keep you
          updated.
        </p>
        <div className="flex item-center gap-4">
          <input
            type="email"
            className="px-10 py-2 border border-gray-400 rounded-md w-full"
            placeholder="Enter your email"
          
          value={email}
          onChange={(e) => setemail(e.target.value)}/>
          <CustomButton text="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;