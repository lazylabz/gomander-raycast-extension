import { useMutation } from "@tanstack/react-query";
import { service } from "../service";
import { showToast, Style } from "@raycast/api";
import { defaultQueryClient } from "../react-query";

export const useRunCommand = () =>
  useMutation(
    {
      mutationFn: service.startCommand,
      onSuccess: () => {
        showToast({ title: "Command started", style: Style.Success });
      },
      onError: (error: Error) => {
        showToast({ title: `Error starting command: ${error.message}`, style: Style.Failure });
      },
    },
    defaultQueryClient,
  );
