import React from "react";
import { CONTACT } from "../constants";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneForwarded } from "react-icons/fi";
import { FaAddressCard } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-10 text-center text-neutral-500 text-4xl ">
        Get<span className="text-white"> InTouch</span>
      </h1>
      <div className="text-center tracking-tighter">
        <div className="flex justify-center gap-4 items-center">
          <FaAddressCard className="w-6 h-6 text-white" />
          <p className="my-4">{CONTACT.address}</p>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <FiPhoneForwarded className="w-6 h-6 text-white" />
          <p className="my-4">{CONTACT.phoneNo}</p>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <TfiEmail className="w-6 h-6 text-white" />
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
