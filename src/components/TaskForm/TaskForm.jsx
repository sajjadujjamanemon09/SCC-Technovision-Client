import { useEffect, useState } from "react";
import useTasks from "../Hook/useTasks";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


// import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../Hook/useAxios";
import UpdateTask from "./CreateTask/UpdateTask";

const Tasks = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, refetch] = useTasks();
  console.log(data);
  const axiosPublic = useAxiosPublic();

  const [forUpdate, setForUpdate] = useState({})

  const [sections, setSections] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    if (data) {
      setSections({
        todo: data.filter((item) => item.status === "todo"),
        ongoing: data.filter((item) => item.status === "ongoing"),
        completed: data.filter((item) => item.status === "completed"),
      });
    }
  }, [data]);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    // Update local state immediately
    const updatedSections = { ...sections };
    const [moveTask] = updatedSections[result.source.droppableId].splice(
      result.source.index,
      1
    );
    updatedSections[result.destination.droppableId].splice(
      result.destination.index,
      0,
      moveTask
    );
    setSections(updatedSections);

    // Persist changes to backend
    const order = result.destination.index + 1;
    await axiosPublic.patch("/tasks", {
      id: moveTask._id,
      status: result.destination.droppableId,
      order,
    });
  };

  const handleUpdate = async (id) => {
    console.log(id);
    const res = await axiosPublic.get(`/task/update/${id}`);
    console.log(res.data);
    setForUpdate(res.data);
  };
console.log(forUpdate);
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://scc-technovision-inc-server.vercel.app/toDoTasks/${id}`,
          {
            method: "DELETE",
          }
        );

        if (res) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {Object.keys(sections).map((sectionKey) => (
              <div
                className="border-2 bg-amber-50 px-5 py-3 text-center rounded-md"
                key={sectionKey}
              >
                <h2 className="text-[18px] font-bold">
                  {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                </h2>

                <Droppable droppableId={sectionKey} key={sectionKey}>
                  {(provided) => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className=" rounded-md my-5 text-left"
                    >
                      {sections[sectionKey].map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index}
                        >
                          {(provided) => (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="p-2 border capitalize bg-slate-300 shadow-lg border-green-500 rounded-md my-3"
                            >
                              <p>
                                <span className="font-semibold">
                                  Task Title:
                                </span>{" "}
                                {task?.title}
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Task Description:
                                </span>{" "}
                                {task?.description}
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Task Priority:
                                </span>{" "}
                                {task?.priority}
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Task Date:
                                </span>{" "}
                                {task?.date}
                              </p>
                              <div className="flex justify-end gap-3 hover:cursor-pointer">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                {/* <button className="" onClick={()=>document.getElementById('my_modal_4').showModal()}>
<MdOutlineModeEditOutline className="text-2xl" />
</button>
<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
<UpdateTask/>
  </div>
</dialog> */}

                                <button onClick={() => handleUpdate(task?._id)}>
                                  <FaEdit
                                    onClick={() =>
                                      document
                                        .getElementById("my_modal_6")
                                        .showModal()
                                    }
                                    className="text-[22px] text-[#5082e8]"
                                  />
                                  <dialog
                                    id="my_modal_6"
                                    className="modal modal-bottom sm:modal-middle"
                                  >
                                    <div className="modal-box">
                                      {/* <UpdateTask
                                        // refetch={refetch}
                                        // ongoingFetch={ongoingFetch}
                                        // completeFetch={completeFetch}
                                        // dataFetch={dataFetch}
                                        forUpdate={forUpdate}
                                      ></UpdateTask> */}
                                      <UpdateTask
                                      forUpdate={forUpdate}
                                      >
                                      
                                      </UpdateTask>
                                      <div className="modal-action">
                                        <form method="dialog">
                                          {/* if there is a button in form, it will close the modal */}
                                          <button className="btn">X</button>
                                        </form>
                                      </div>
                                    </div>
                                  </dialog>
                                </button>

                                <RiDeleteBin6Line
                                  className="text-2xl text-red-500 hover:text-red-700"
                                  onClick={() => handleDelete(task?._id)}
                                />
                              </div>
                            </li>
                          )}
                        </Draggable>
                      ))}

                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </DragDropContext>
  );
};

export default Tasks;
