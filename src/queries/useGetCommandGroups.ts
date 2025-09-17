import { useQuery } from "@tanstack/react-query";
import { CommandGroup } from "../types";
import { service } from "../service";
import { showToast, Toast } from "@raycast/api";
import { defaultQueryClient } from "../react-query";
import Style = Toast.Style;

export const useGetCommandGroups = () =>
  useQuery<CommandGroup[]>(
    {
      queryKey: ["commandGroups"],
      queryFn: service.fetchCommandGroups,
      throwOnError: (error) => {
        showToast({ title: `Error fetching command groups: ${error.message}`, style: Style.Failure });
        return false;
      },
      initialData: [],
    },
    defaultQueryClient,
  );
