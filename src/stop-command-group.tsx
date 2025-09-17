import { Action, ActionPanel, List } from "@raycast/api";
import { useGetCommandGroups } from "./queries/useGetCommandGroups";
import { useStopCommandGroup } from "./mutations/useStopCommandGroup";

export default function Command() {
  const { data: commandGroups } = useGetCommandGroups();
  const { mutate: stopCommandGroup } = useStopCommandGroup();

  return (
    <List>
      {commandGroups.map((item) => (
        <List.Item
          key={item.id}
          title={item.name}
          actions={
            <ActionPanel>
              <Action title="Stop Command Group" onAction={() => stopCommandGroup(item.id)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
