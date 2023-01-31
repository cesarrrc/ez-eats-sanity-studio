import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
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
    },
    {
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
    },
    {
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
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "meta",
      title: "Metadata",
      type: "object",
      fields: [
        {
          name: "meta_title",
          title: "Title",
          type: "string",
          description: "What should the metadata title value be?",
        },
        {
          name: "meta_description",
          title: "Description",
          type: "string",
          description: "What should the metadata description value be?",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "string",
          description:
            "Comma separated Keywords. Ex: 'kolache, tacos, san marcos'",
        },
      ],
    },
    {
      name: "address",
      title: "Restaurant address",
      type: "object",
      fields: [
        {
          name: "street_address",
          title: "Street Address",
          type: "string",
          description: "Ex: 641 Mill St Suite 100",
        },
        {
          name: "city_state_zip",
          title: "City, State Zip",
          type: "string",
          description: "Ex: San Marcos, TX 78666",
        },
      ],
    },
    {
      name: "hours",
      title: "Restaurant Hours",
      type: "object",
      description:
        "Write these as pairs. Assign both day and times in relation with another.",
      fields: [
        {
          name: "days",
          title: "Days of the Week",
          type: "string",
          description:
            "Ex: Monday |or| Ex: Monday - Thursday |or| Ex: Fri - Sat",
        },
        {
          name: "hours",
          title: "Hours of the Day",
          type: "string",
          description:
            "Ex: 10a - 8p |or| Ex: 10am - 10pm |or| Ex: 10:30am - 6:00pm",
        },
      ],
      preview: {
        select: {
          title: "days",
          subtitle: "hours",
        },
      },
    },
    {
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
    },
    {
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
    },
    {
      name: "menu_file",
      title: "Menu File",
      type: "object",
      fields: [{ name: "file", type: "file", title: "file" }],
    },
    // {
    //   name: "Pages",
    //   title: "Pages",
    //   type: "document",
    //   fields: [
    //     {
    //       title: "Name",
    //       name: "name",
    //       type: "string",
    //     },
    //     {
    //       title: "data",
    //       name: "Data",
    //       type: "array",
    //       of: [
    //         {
    //           type: "object",
    //           fields: [
    //             {
    //               title: "Detail Header",
    //               name: "detail_header",
    //               type: "string",
    //               // validation: (Rule) => Rule.required(),
    //             },
    //             {
    //               title: "Detail Body",
    //               name: "detail_body",
    //               type: "array",
    //               of: [{ type: "block" }],
    //               validation: (Rule) => Rule.required(),
    //             },
    //             {
    //               title: "Detail Image",
    //               name: "detail_image",
    //               type: "image",
    //               options: {
    //                 hotSpot: true,
    //               },
    //               validation: (Rule) => Rule.required(),
    //             },
    //           ],
    //           preview: {
    //             select: {
    //               title: "detail_header",
    //               subtitle: "detail_body",
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]),
});

// prepare(selection) {
//   const { title, subtitle } = selection;
//   console.log(title, subtitle);
//   return {
//     title: title,
//     subtitle: subtitle,
//   };
// },
