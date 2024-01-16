import { type Command, program } from "commander";

type ProgramOptions = {
  slug: string;
  config?: string;
  preview?: boolean;
  open?: boolean;
};

/**
 * コンソールの引数を取り扱うサービス
 */
export class ConsoleService {
  private program: Command;

  private options: ProgramOptions;

  constructor(name: string, version: string) {
    this.program = program
      .name(name)
      .requiredOption("--slug <slug>", "Book の Slug")
      .option(
        "-c, --config [config]",
        "設定ファイルがあるディレクトリもしくは設定ファイルのパス",
      )
      .option("--preview", "プレビューモード")
      .option("--open", "ブラウザで開く (プレビューモードのみ)")
      .helpOption("-h, --help", "ヘルプを表示")
      .version(version, "-v, --version", "バージョンを表示");

    this.program.parse(process.argv);

    this.options = this.program.opts<ProgramOptions>();
  }

  /** Book の Slug */
  get slug(): string {
    return this.options.slug;
  }

  /** 設定ファイルがあるディレクトリもしくは設定ファイルのパス */
  get config(): string {
    return this.options.config ?? process.cwd();
  }

  /** プレビューモード */
  get preview(): boolean {
    return this.options.preview ?? false;
  }

  /** ブラウザで開く (プレビューモードのみ) */
  get open(): boolean {
    return this.options.open ?? false;
  }
}
