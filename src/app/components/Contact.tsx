"use client";

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [buttonText, setButtonText] = useState<string>("Send Message");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleValidation = () => {
    let tempErrors: { [key: string]: boolean } = {};
    let isValid: boolean = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    } else {
      tempErrors["fullname"] = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    } else {
      tempErrors["email"] = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    } else {
      tempErrors["message"] = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValidForm: boolean = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        console.log(response);
        if (response.ok) {
          setEmail("");
          setFullname("");
          setMessage("");
        } else {
          throw new Error("Error sending email");
        }
      } catch (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send Message");
    }
    console.log(fullname, email, message);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #1e4269",
    boxShadow: 24,
    p: 4,
    borderRadius: 10,
  };

  return (
    <div className="bg-blue px-8 md:py-16 py-4 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="text-white text-2xl md:text-3xl text-center font-bold tracking-widest lg:w-1/2 lg:text-left lg:mb-0 mb-4">
          Elevate Your Projects with Us, Ensure Your Success
        </div>
        <div className="lg:w-1/2 lg:text-right text-center md:my-0 my-8 mx-auto">
          <button
            onClick={handleOpen}
            className="font-semibold bg-transparent shadow-lg text-blue bg-white rounded border-blue border py-2 px-4 hover:text-white hover:bg-slate-950"
          >
            Contact us
          </button>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="mb-4 text-blue">We'd Love to hear from you </h1>
            <form
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="border-2 border-blue rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm ">Please enter your name.</p>
              )}
              <input
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-blue rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email.
                </p>
              )}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                className="border-2 border-blue rounded-[12px] w-[100%] px-[1.5rem] py-[.75rem]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  Please enter your message.
                </p>
              )}
              {showSuccessMessage && (
                <p className="text-green-500 text-sm">
                  Message sent successfully!
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500 text-sm">
                  Failed to send message. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={buttonText === "Sending..."} // Disable button when sending
                className="w-max h-max py-3 px-8 bg-blue text-white font-bold rounded-[.75rem]"
              >
                {buttonText}
              </button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
