import "server-only";
import type { Locale } from "./i18n";

const dictionaries = {
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export type Dictionary = Awaited<
  ReturnType<(typeof dictionaries)["tr"]>
>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
