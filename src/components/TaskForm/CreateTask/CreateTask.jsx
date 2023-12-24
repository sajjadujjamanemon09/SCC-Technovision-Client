import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import useTasks from "../../Hook/useTasks";

const CreateTask = () => {
    const [ , refetch ] = useTasks();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleCreateTask = async (data) => {

    // eslint-disable-next-line no-self-assign
    data.date = data.date

    const res = await fetch("https://scc-technovision-inc-server.vercel.app/toDoTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res) {
      toast.success("Task created successfully");
      refetch();
      document.getElementById("my_modal_5").close();
    }
    reset();
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-2xl text-[#3D3D3D]">Tasks</h2>
      </div>
      <div>
        <button
          className="btn bg-amber-600 text-white rounded py-2 px-6 flex items-center gap-2 text-sm"
          onClick={() => document.getElementById("my_modal_5").showModal()}>
          Create Task <FaPlus></FaPlus>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Task</h3>
            {/* create task form */}
            <form onSubmit={handleSubmit(handleCreateTask)}>
              <input
                {...register("title", { required: true })}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task title"/>
                {errors.title && (
                  <span className="text-red-600 text-xs block">Title is required</span>
                )}
              
              <input
                {...register("description", { required: true })}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task Description"/>
              {errors.description && (
                  <span className="text-red-600 text-xs block">Description is required</span>
                )}
              
              <input
                {...register("priority", { required: true })}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task priority"/>
              {errors.priority && (
                  <span className="text-red-600 text-xs block">Priority is required</span>
                )}
              <input
                {...register("date", { required: true })}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Date"
                type="date"/>
              {errors.date && (
                  <span className="text-red-600 text-xs block">Date is required</span>
                )}
              <input
                {...register("status", { required: true })}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-5"
                placeholder="Status"
                defaultValue={"todo"}/>
              <div className="flex justify-end">
                <input
                  className="bg-amber-600 text-white rounded py-3 px-4 text-sm"
                  type="submit"
                  value="Create Task"/>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  {" "}
                  ✕{" "}
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default CreateTask;
