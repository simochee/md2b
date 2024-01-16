import { readFile } from "node:fs/promises";
import { ConfigService } from "~/services/config-service";
import { ConsoleService } from "~/services/console-service";

const { name, version = "0.0.0" } = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

const consoleService = new ConsoleService(name, version);
const configService = new ConfigService("publishing", consoleService.config);

export const main = async () => {};
