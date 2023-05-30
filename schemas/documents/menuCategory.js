export default {
  name: "category",
  type: "document",
  title: "Menu Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sub_categories",
      type: "array",
      title: "Sub-Categories",
      of: [{ name: "sub_category", title: "Sub Categories", type: "sub_category" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "location",
    },
  },
};
