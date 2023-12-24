import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxios";


const useTasks = () => {
  const axiosPublic = useAxiosPublic()
  const { data, refetch } = useQuery({
    queryKey: ["toDoTasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/toDoTasks");
      console.log(res.data);
      return res.data;
    },
  });

  return [data, refetch];
};

export default useTasks;
