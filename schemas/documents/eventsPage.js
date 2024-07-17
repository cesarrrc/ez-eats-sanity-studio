export default {
    name: "events_page",
    type: "document",
    title: "Events Page Details",
    fields: [
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
    ],
    preview: {
      select: {
        title: "tile_name",
        media: "tile_icon",
      },
    },
  };
  