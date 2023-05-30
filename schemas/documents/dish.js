export default {
  name: "dish",
  type: "document",
  title: "Dish",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "price_by_size",
      title: "Price by Size?",
      type: "boolean",
    },
    {
      name: "prices",
      title: "Prices",
      type: "array",
      of: [{ type: "price_by_size_object" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotSpot: true,
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replaceAll(",", "")
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
