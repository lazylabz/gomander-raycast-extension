import { CommandGroup } from "./types";
import { scanForPort } from "./helpers";

const fetchCommandGroups = async (): Promise<CommandGroup[]> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/command-groups`, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Error fetching command groups: ${response.statusText}`);
  }

  return (await response.json()) as CommandGroup[];
};

const startCommandGroup = async (id: string): Promise<void> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/command-group/stop/${id}`, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Error stopping command group: ${response.statusText}`);
  }
};

export const service = {
  fetchCommandGroups,
  startCommandGroup,
};
