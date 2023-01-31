import meta from "../objects/meta";

export default {
  name: "restaurant",
  type: "document",
  title: "Restaurant",
  groups: [
    {
      name: "restaurant_details",
      title: "Restaurant Details",
    },
    {
      name: "restaurant_info",
      title: "Restaurant Info",
    },
    {
      name: "restaurant_menu",
      title: "Restaurant Menu",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "Restaurant Name",
      name: "name",
      type: "string",
      group: "restaurant_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hidden?",
      name: "hidden",
      type: "boolean",
      group: "restaurant_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Restaurant Description",
      name: "description",
      type: "text",
      group: "restaurant_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Restaurant Tagline",
      name: "tagline",
      type: "string",
      group: "restaurant_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      group: "restaurant_details",
      options: {
        hotSpot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Restaurant Hours",
      name: "hours",
      type: "array",
      group: "restaurant_info",
      of: [{ type: "hours" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      group: "restaurant_details",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "address",
      type: "address",
      title: "Restaurant address",
      group: "restaurant_info",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone Number",
      name: "phone_number",
      type: "string",
      description: "Ex: (512)666-666",
      group: "restaurant_info",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Pickup Link",
      name: "pickup_link",
      type: "string",
      description:
        "Ex: https://www.toasttab.com/ez-eats-brick-and-mortar-641-mill-street/v3/?mode=fulfillment",
      group: "restaurant_info",
    },
    {
      title: "Delivery Link",
      name: "delivery_link",
      type: "string",
      description: "Ex: https://postmates.com/store/ez-eats",
      group: "restaurant_info",
    },
    {
      name: "type",
      type: "string",
      title: "Restaurant type",
      group: "restaurant_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Menu PDF",
      description: "This can also take an image, but pdf would be better",
      name: "menu_pdf",
      type: "menu_file",
      group: "restaurant_menu",
    },
    {
      name: "menu_categories",
      type: "array",
      title: "Restaurant menu",
      group: "restaurant_menu",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },

    {
      title: "Meta Data",
      name: "meta_data",
      group: "seo",
      type: "meta",
    },
  ],
};
