import { Action, ActionPanel, List } from "@raycast/api";
import { useGetCommands } from "./queries/useGetCommands";
import { useStopCommand } from "./mutations/useStopCommand";

export default function Command() {
  const { data: commands } = useGetCommands();
  const { mutate: stopCommand } = useStopCommand();

  return (
    <List>
      {commands.map((item) => (
        <List.Item
          key={item.id}
          title={item.name}
          actions={
            <ActionPanel>
              <Action title="Stop Command" onAction={() => stopCommand(item.id)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
