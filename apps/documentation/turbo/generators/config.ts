import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("API", {
    description: "API Point Generation",
    // gather information from the user
    prompts: [
      {
        name: "path",
        type: "input",
        message: "The path to the API point: /api/v1/...",
      },
    ],
    // perform actions based on the prompts
    actions: [
      {
        type: "add",
        path: "src/app/api/v1/{{path}}/route.ts",
        templateFile: "templates/route.hbs",
      },
      {
        type: "add",
        path: "src/app/api/v1/{{path}}/service.ts",
        templateFile: "templates/service.hbs",
      },
      {
        type: "add",
        path: "src/app/api/v1/{{path}}/controller.ts",
        templateFile: "templates/controller.hbs",
      },
    ],
  });
}
