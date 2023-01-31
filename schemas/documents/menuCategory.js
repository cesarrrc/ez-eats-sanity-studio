export default {
  name: "category",
  type: "document",
  title: "Menu category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      validation: (Rule) => Rule.required(),
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
      subtitle: "location",
    },
  },
};
