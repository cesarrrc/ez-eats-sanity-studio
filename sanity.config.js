import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "ez-eats",
  projectId: "jw8o20ld",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
