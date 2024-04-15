import { Effect as E, Either as Ei } from "effect";
import * as S from "@effect/schema/Schema";

export const Schema = S.either({
  left: S.string,
  right: S.string,
});

export const exampleService = (id: number) =>
  E.sync(() => Ei.right(`id\: ${id}`));

export const exampleDocsService = (id: number, docs: number) =>
  E.sync(() => Ei.right(`id\: ${id} and docs\: ${docs}`));

export const exampleDefaultService = () =>
  E.sync(() => Ei.left("exampleDefaultService"));
