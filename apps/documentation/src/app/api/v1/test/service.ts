import { Effect as E } from "effect";

export const exampleService = () => E.sync(() => "exampleService");

export const exampleTwoService = () => E.sync(() => "exampleTwoService");
