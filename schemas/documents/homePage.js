export default {
  name: "home_page",
  type: "document",
  title: "Home Page Details",
  fields: [
    {
      title: "Tile Number",
      name: "tile_number",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tile Name",
      name: "tile_name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tile Image",
      name: "tile_image",
      type: "image",
      options: {
        hotSpot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tile Icon",
      name: "tile_icon",
      type: "image",
      options: {
        hotSpot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "EX: /events. (If the tile references a location, make sure to use the 'SLUG' being used for that location. EX: ez-street-kitchen-mill-street)",
      options: {
        source: "tile_name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
  preview: {
    select: {
      title: "tile_number",
      subtitle: "tile_name",
      media: "tile_image",
    },
  },
};
