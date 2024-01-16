import { cosmiconfigSync, type PublicExplorerSync } from "cosmiconfig";
import { type InferType, object } from "yup";

const configSchema = object({});

/** 設定ファイルを取り扱うサービス */
export class ConfigService {
  private explorer: PublicExplorerSync;

  private config: InferType<typeof configSchema>;

  constructor(name: string, config: string) {
    this.explorer = cosmiconfigSync(name);

    this.config = configSchema.cast(this.explorer.search(config)?.config);
  }
}
