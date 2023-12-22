import { Helmet } from "react-helmet";
import ContactDetails from "./ReachDetails";
import ContactForm from "./ReachForm";

const Reach = () => {
  return (
    <div className="py-5 md:py-24">
      <Helmet>
        <title>SCC Tech | Contact</title>
      </Helmet>
      <h2 className="text-5xl text-gray-900 font-bold text-center">
        Reach me at
      </h2>
        <p  className=" text-gray-700  text-center pt-2 pb-5"> We Are here to assist you! If you have any questions or need assistance, please feel free to reach out to
                us.</p>
      <div className="w-2/3 mx-auto pb-10 border-t border-solid border-white"></div>
      <div className="flex flex-col md:flex-row items-center">
        <ContactDetails />
        <div className="hidden md:block h-56 my-auto items-center justify-center  border-r border-solid border-yellow-400"></div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Reach;