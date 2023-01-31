export default {
  name: "about_page_document",
  type: "document",
  title: "About Page Document",
  fields: [
    {
      title: "Detail Number",
      name: "detail_number",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Detail Header",
      name: "detail_header",
      type: "string",
      // validation: (Rule) => Rule.required(),
    },
    {
      title: "Detail Body",
      name: "detail_body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Detail Image",
      name: "detail_image",
      type: "image",
      options: {
        hotSpot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "detail_number",
      subtitle: "detail_body",
      media: "detail_image",
    },
  },
};
