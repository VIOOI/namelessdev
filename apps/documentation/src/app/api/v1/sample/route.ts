import { Effect as E } from "effect";
import * as C from "./controller";
import { Schema } from "./service";
import * as S from "@effect/schema/Schema";

export function GET(request: Request) {
  return EResponse(C.GET(request), S.encodeSync(Schema));
}

const EResponse = <A, E, I>(
  effect: E.Effect<A, E, never>,
  encoder: ReturnType<typeof S.encodeSync<A, I>>,
) => effect.pipe(E.map(encoder), E.runSync, Response.json);
