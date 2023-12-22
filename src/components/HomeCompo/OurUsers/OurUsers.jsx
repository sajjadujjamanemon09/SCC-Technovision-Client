import User1 from "./User/User1";
import User2 from "./User/User2";
import User3 from "./User/User3";
import User4 from "./User/User4";

const OurUsers = () => {
  return (
    <div>
      <h1 className="text-6xl pt-10 pb-4 font-semibold text-amber-600 text-center">
        Our Users
      </h1>
      <div className="w-1/3 mx-auto border-t pb-20 border-solid border-black"></div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
        <User1 />
        <User2/>
        <User3/>
        <User4/>
      </div>
    </div>
  );
};

export default OurUsers;
