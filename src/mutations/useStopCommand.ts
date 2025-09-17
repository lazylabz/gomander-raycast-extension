import { useMutation } from "@tanstack/react-query";
import { service } from "../service";
import { showToast, Style } from "@raycast/api";
import { defaultQueryClient } from "../react-query";

export const useStopCommand = () =>
  useMutation(
    {
      mutationFn: service.stopCommand,
      onSuccess: () => {
        showToast({ title: "Command stopped", style: Style.Success });
      },
      onError: (error: Error) => {
        showToast({ title: `Error stopping command: ${error.message}`, style: Style.Failure });
      },
    },
    defaultQueryClient,
  );
