import { useMutation } from "@tanstack/react-query";
import { service } from "../service";
import { showToast } from "@raycast/api";
import { defaultQueryClient } from "../react-query";

export const useStopCommandGroup = () =>
  useMutation(
    {
      mutationFn: service.startCommandGroup,
      onSuccess: () => {
        showToast({ title: "Command group stopped", style: Style.Success });
      },
      onError: (error: Error) => {
        showToast({ title: `Error stopping command group: ${error.message}`, style: Style.Failure });
      },
    },
    defaultQueryClient,
  );
