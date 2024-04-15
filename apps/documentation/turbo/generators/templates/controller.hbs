
import { Match as M } from "effect";
import * as S from "./service";

export const ControllerGET = (request: Request) => {
  const url = new URL(request.url);
  return M.type<URL>().pipe(
    M.when(
      (url) =>
        Boolean(url.searchParams.get("id")) &&
        !Boolean(url.searchParams.get("docs")),
      () => S.exampleService(),
    ),
    M.orElse(() => S.exampleTwoService()),
  )(url);
};
