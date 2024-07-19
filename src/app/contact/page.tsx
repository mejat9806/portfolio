"use client";

import { animate, motion as m } from "framer-motion";
import { FormEvent, RefObject, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const text = "Hello hi there";
function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ errorState: false, errorMessage: "" });
  console.log(error);
  const form = useRef<HTMLFormElement>(null);
  function onReset() {
    form.current?.reset();
    setError({ errorState: false, errorMessage: "" });
  }
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { user_message, user_email } = Object.fromEntries(formData);
    if (!user_message) {
      return setError({
        errorState: true,
        errorMessage: "Please enter please Enter a Message",
      });
    }
    if (!user_email) {
      return setError({
        errorState: true,
        errorMessage: "Please enter Email Address",
      });
    }
    if (!user_email || !user_message) {
      return setError({
        errorState: true,
        errorMessage: "please check email and message field",
      });
    }
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMP_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_KEY,
          },
        )
        .then(
          () => {
            toast.success("email send");
            form.current?.reset();
          },
          (error) => {
            toast.error("Error sending email");
            form.current?.reset();
          },
        );
    }
    setError({ errorState: false, errorMessage: "" });
  };
  return (
    <m.div
      className="h-svh"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, staggerChildren: 1.2 }}
    >
      <div className="h-full flex w-full  flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        <div className=" h-1/4 lg:h-full  lg:w-1/2 flex flex-col items-center justify-center ">
          {/* text container */}
          <div className="">
            {text.split("").map((letter, index) => (
              <m.span
                className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-400 drop-shadow-2xl"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {letter}
              </m.span>
            ))}
          </div>
        </div>
        <div className="  lg:h-full w-full lg:w-1/2 flex  flex-col justify-center items-center ">
          <form
            ref={form}
            className=" bg-red-50 rounded-xl w-full h-[500px] text-xl flex flex-col gap-8  mb-10 drop-shadow-2xl md:h-[600px] p-10"
            onSubmit={sendEmail}
          >
            {/* form container */}
            <span className="">Hello Amer </span>
            <textarea
              name="user_message"
              id="user_message"
              rows={6}
              className="bg-transparent border-b-2 border-black outline-none placeholder:text-black/30 resize-none"
              placeholder="Message you would like to send to me "
            ></textarea>
            <span className="">My Mail Address is :</span>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="bg-transparent border-b-2 border-black outline-none placeholder:text-black/30"
              placeholder="Your email"
            />
            <div className="flex justify-end relative w-full gap-5">
              <button className="hover:bg-darkpink w-24 outline-none  focus-visible:ring-2 hover:focus-visible:ring-darkBlue focus-visible:ring-darkpink hover:text-white py-3 px-3 rounded-lg  bg-slightDarkBlue hover:scale-105 text-white transition-all duration-200 ease-in-out font-bold">
                Send
              </button>
              <button
                className="hover:bg-darkpink w-24 outline-none  focus-visible:ring-2 hover:focus-visible:ring-darkBlue focus-visible:ring-darkpink hover:text-white py-3 px-3 rounded-lg  bg-slightDarkBlue hover:scale-105 text-white transition-all duration-200 ease-in-out font-bold"
                type="reset"
                onClick={onReset}
              >
                Reset
              </button>

              {success && (
                <span className="text-green-600 font-bold text-lg absolute left-0 top-[30%]">
                  Your message has been successfully
                </span>
              )}
              {error && (
                <span className="text-red-600 font-bold text-lg absolute left-0 top-[30%]">
                  {error.errorMessage}
                </span>
              )}
            </div>
            <div>
              <p>
                Or email me{" "}
                <a href="mailto:ameraizat98@gmail.com" className="font-medium">
                  ameraizat98@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </m.div>
  );
}

export default Contact;
