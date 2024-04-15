import { Effect, Either, Match as M } from "effect";
import * as Service from "./service";

export const GET = (request: Request) => {
  const { searchParams: params } = new URL(request.url);
  // url.searchParams.
  return M.value(params).pipe(
    M.when(
      (params) => Boolean(params.get("id")) && !Boolean(params.get("docs")),
      (params) => Service.exampleService(Number(params.get("id"))),
    ),
    M.when(
      (params) => Boolean(params.get("id")) && Boolean(params.get("docs")),
      (params) =>
        Service.exampleDocsService(
          Number(params.get("id")),
          Number(params.get("docs")),
        ),
    ),
    M.orElse(() => Service.exampleDefaultService()),
  );
};
