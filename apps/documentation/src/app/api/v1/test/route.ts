import { Effect } from "effect";
import { ControllerGET } from "./controller";

export function GET(request: Request) {
  return Effect.runSync(ControllerGET(request));
}
