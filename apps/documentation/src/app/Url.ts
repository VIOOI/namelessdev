import { createRootPath, queryParams } from "type-safe-url";

export const api = createRootPath<{
  sample: {
    [queryParams]: {
      id?: number;
      docs?: number;
    };
  };
}>({ baseUrl: "http://localhost:3000/api/v1" });
