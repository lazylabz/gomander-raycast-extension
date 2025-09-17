import { Action, ActionPanel, List } from "@raycast/api";
import { useGetCommands } from "./queries/useGetCommands";
import { useRunCommand } from "./mutations/useRunCommand";

export default function Command() {
  const { data: commands } = useGetCommands();
  const { mutate: startCommand } = useRunCommand();

  return (
    <List>
      {commands.map((item) => (
        <List.Item
          key={item.id}
          title={item.name}
          subtitle={`Group: ${item.groupId}`}
          actions={
            <ActionPanel>
              <Action title="Start Command" onAction={() => startCommand(item.id)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
