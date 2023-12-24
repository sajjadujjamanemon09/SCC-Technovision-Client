
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxios";

const UpdateTask = ({ forUpdate }) => {
  console.log(forUpdate);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const info = {
      title: data.taskName,
      status: data.taskStatus,
      priority: data.priority,
      date: data.deadline,
      description: data.description,
    };
    console.log(info);
    const res = await axiosPublic.patch(`task/updateNow/${forUpdate?._id}`, info);
    console.log(res.data);
    toast("task updated successfully");
  };
  return (
    <div className="card shrink-0 w-full max-w-sm  bg-transparent">
      <h2 className="font-semibold text-3xl">Update Your Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
              <input

                {...register("title")}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task title"
                defaultValue={forUpdate.title}
                />
                {errors.title && (
                  <span className="text-red-600 text-xs block">Title is required</span>
                )}
              
              <input
                {...register("description")}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task Description"
                defaultValue={forUpdate.description}
                />
              {errors.description && (
                  <span className="text-red-600 text-xs block">Description is required</span>
                )}
              
              <input
                {...register("priority")}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Task priority"
                defaultValue={forUpdate.priority}
                />
              {errors.priority && (
                  <span className="text-red-600 text-xs block">Priority is required</span>
                )}
              <input
                {...register("date")}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-3"
                placeholder="Date"
                defaultValue={forUpdate.date}
                type="date"/>
              {errors.date && (
                  <span className="text-red-600 text-xs block">Date is required</span>
                )}
              <input
                {...register("status")}
                className="border focus:outline-none py-2 px-2 rounded-sm w-full mb-5"
                placeholder="Status"
                defaultValue={"todo"}/>
              <div className="flex justify-end">
                <input
                  className="bg-amber-600 text-white rounded py-3 px-4 text-sm"
                  type="submit"
                  value="Update Task"/>
              </div>
            </form>
    </div>
  );
};

export default UpdateTask;
