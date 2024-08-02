import {
  BaseFilter,
  DduItem,
  SourceOptions,
} from "jsr:@shougo/ddu-vim@^5.0.0/types";
import { Denops } from "jsr:@denops/core@^7.0.0";

type Params = {
  startsWith: string;
  endsWith: string;
  includes: string;
};

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    filterParams: Params;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const inputs = args.input.split(/(?<!\\)\s+/).filter((x) => x !== "").map((
      x,
    ) => x.replaceAll(/\\(?=\s)/g, ""));

    let items = inputs.reduce(
      (items, input) =>
        items.filter(({ matcherKey }) => matcherKey.includes(input)),
      args.items,
    );

    if (args.filterParams.startsWith !== "") {
      items = items.filter((item) =>
        (item.display ?? item.word).startsWith(args.filterParams.startsWith)
      );
    }
    if (args.filterParams.endsWith !== "") {
      items = items.filter((item) =>
        (item.display ?? item.word).endsWith(args.filterParams.endsWith)
      );
    }
    if (args.filterParams.includes !== "") {
      items = items.filter((item) =>
        (item.display ?? item.word).startsWith(args.filterParams.includes)
      );
    }

    return Promise.resolve(items);
  }
  override params(): Params {
    return {
      startsWith: "",
      endsWith: "",
      includes: "",
    };
  }
}
