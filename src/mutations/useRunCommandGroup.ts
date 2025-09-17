import { useMutation } from "@tanstack/react-query";
import { service } from "../service";
import { showToast } from "@raycast/api";
import { defaultQueryClient } from "../react-query";

export const useRunCommandGroup = () =>
  useMutation(
    {
      mutationFn: service.startCommandGroup,
      onSuccess: () => {
        showToast({ title: "Command group started", style: Style.Success });
      },
      onError: (error: Error) => {
        showToast({ title: `Error starting command group: ${error.message}`, style: Style.Failure });
      },
    },
    defaultQueryClient,
  );
