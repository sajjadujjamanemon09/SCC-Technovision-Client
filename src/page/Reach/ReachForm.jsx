/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ReachForm = () => {
    const notify = () =>
    toast.success("Message Sent Successfully", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikytkto",
        "template_ya3k5pf",
        form.current,
        "TIZePvEXKy_M-DED9"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          // Show the success toast
          notify();
        },
        (error) => {
          console.log(error.text);
        }
        );
        
  };
    return (
      <div data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0" className="md:w-1/2">
          <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-1/2  mx-auto mt-20 p-6  border rounded-lg shadow-lg glass"
      >
        <h2 className="text-3xl font-bold mb-6">Let's Start Conversation</h2>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="user_name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="user_email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="feedback"
          >
            Message:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="feedback"
            rows={5}
            placeholder="Enter Your Message"
            defaultValue={""}
            name="message"
          />
        </div>
        <button
          className="bg-yellow-400 w-full hover:bg-yellow-500 text-black font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Send"
        >
          Send Message
        </button>
      </form>
      </div>
    );
};

export default ReachForm;