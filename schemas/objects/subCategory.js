export default {
  name: "sub_category",
  title: "Sub Category",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Sub Category Name",
      type: "string",
      description: "Ex: Tacos",
    },
    {
      name: "includes",
      title: "Items Included?",
      type: "string",
      description:
        "Ex: Caramelized Onions. Grilled Peppers. Melted Queso. Cilantro. Choice of Sauce.",
    },
    {
      name: "info",
      title: "Any other info?",
      type: "string",
      description:
        "Ex: **All of our Burgers are 1/3 lb Beef Patties & come on a Toasted Sweet Bun**",
    },
    {
      name: "types",
      type: "array",
      title: "Types",
      of: [{ type: "type_category" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
