import { Command, CommandGroup } from "./types";
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

  const response = await fetch(`http://localhost:${port}/command-group/start/${id}`, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Error starting command group: ${response.statusText}`);
  }
};

const stopCommandGroup = async (id: string): Promise<void> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/command-group/stop/${id}`, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Error stopping command group: ${response.statusText}`);
  }
};

const fetchCommands = async (): Promise<Command[]> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/commands`, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Error fetching commands: ${response.statusText}`);
  }

  return (await response.json()) as Command[];
};

const runCommand = async (id: string): Promise<void> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/command/run/${id}`, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Error starting command: ${response.statusText}`);
  }
};

const stopCommand = async (id: string): Promise<void> => {
  const port = await scanForPort();

  const response = await fetch(`http://localhost:${port}/command/stop/${id}`, { method: "POST" });
  if (!response.ok) {
    throw new Error(`Error stopping command: ${response.statusText}`);
  }
};

export const service = {
  fetchCommandGroups,
  startCommandGroup,
  stopCommandGroup,
  fetchCommands,
  startCommand: runCommand,
  stopCommand,
};
