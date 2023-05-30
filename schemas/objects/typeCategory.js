export default {
  name: "type_category",
  title: "Type",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Type Name",
      type: "string",
      description: "Ex: Tacos",
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
