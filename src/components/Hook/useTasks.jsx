import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
  const { data: tasks, refetch } = useQuery({
    queryKey: ["toDoTasks"],
    queryFn: async () => {
      const res = await fetch("https://scc-technovision-inc-server.vercel.app/toDoTasks");
      return res.json();
    },
  });

  return [tasks, refetch];
};

export default useTasks;
