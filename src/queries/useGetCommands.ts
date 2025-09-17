import { useQuery } from "@tanstack/react-query";
import { service } from "../service";
import { Command } from "../types";
import { defaultQueryClient } from "../react-query";

export const useGetCommands = () =>
  useQuery(
    {
      queryKey: ["commands"],
      queryFn: service.fetchCommands,
      initialData: [] as Command[],
    },
    defaultQueryClient,
  );
