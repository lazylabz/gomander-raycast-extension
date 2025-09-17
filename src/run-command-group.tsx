import { Action, ActionPanel, List } from "@raycast/api";
import { useGetCommandGroups } from "./queries/useGetCommandGroups";
import { useRunCommandGroup } from "./mutations/useRunCommandGroup";

export default function Command() {
  const { data: commandGroups } = useGetCommandGroups();
  const { mutate: startCommandGroup } = useRunCommandGroup();

  return (
    <List>
      {commandGroups.map((item) => (
        <List.Item
          key={item.id}
          title={item.name}
          actions={
            <ActionPanel>
              <Action title="Start Command Group" onAction={() => startCommandGroup(item.id)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
