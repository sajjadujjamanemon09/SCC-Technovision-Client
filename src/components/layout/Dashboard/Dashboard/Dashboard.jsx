import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Tasks from "../../../TaskForm/TaskForm";
import CreateTask from "../../../TaskForm/CreateTask/CreateTask";
import { MdOutlineDashboard } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-[400px] p-8">
          <Link to="/">
            <button className="btn">
              <div className="flex items-center ">
                <img
                  className="w-10 pr-2"
                  src="https://iili.io/JAGOe71.png"
                  alt=""
                />
                <h2 className="text-xl font-semibold">SCC Technovision</h2>
              </div>
            </button>
          </Link>
          <ul className="flex flex-col gap-4 mt-16">
            <li>
              <button className="w-full">
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-amber-700 text-white py-1 px-2 rounded w-full text-center block"
                      : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                  }
                >
                  {" "}
                  <div className="flex justify-center items-center gap-2">
                    <MdOutlineDashboard  />
                    <span className="font-semibold"> DashBoard</span>
                  </div>
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className="border-l w-full min-h-screen py-4">
          <div>
            <div className="flex gap-4 border-b px-10 pb-6 items-center">
              <div className="w-[80%] ">
                <form className="relative">
                  {" "}
                  <input
                    className="border w-full rounded-sm py-1 px-2 "
                    type="text"
                    placeholder="Search by task name..."
                  />
                  <IoIosSearch className="absolute top-2 right-2" />
                </form>
              </div>
              <div className="flex gap-4 items-center justify-end w-[20%]">
                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                <img
                  className="w-[30px] h-[30px]"
                  src="https://i.ibb.co/yNPwYyk/User-Avatar.png"
                  alt=""
                />
              </div>
            </div>
            {/* outlet */}
            <div className="p-10">
              <CreateTask />
              <div>
                <Tasks></Tasks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
