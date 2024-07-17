import meta from "../objects/meta";

export default {
  name: "recurring_events",
  type: "document",
  title: "Recurring Events",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
  preview: {
    select: {
      title: "name",
      date: "recurring_date",
      location_name: "location_name",
    },
    prepare(selection) {
      const { title, date, location_name } = selection;
      return {
        title: title,
        subtitle: location_name + " - " + date,
      };
    },
  },
  fields: [
    {
      title: "Event Title",
      name: "name",
      type: "string",
      //   group: "event_details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hidden?",
      name: "hidden",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Recurring Event Date",
      name: "recurring_date",
      type: "string",
      description: "Ex: Every Tuesday",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Event Description",
      name: "event_description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Flyer",
      name: "flyer",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
            },
            {
              name: "description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    },
    {
      title: "Location Name",
      name: "location_name",
      type: "string",
      description: "The name of the Location/Bar/Venue",
    },
    {
      title: "Event Address",
      name: "event_address",
      type: "address",
      //   group: "event_details",
    },
    {
      title: "Location Website?",
      name: "website",
      description: "If you have a link to the venue, add it here.",
      type: "string",
      //   group: "event_details",
    },
    {
      title: "Meta Data",
      name: "meta_data",
      group: "seo",
      type: "meta",
    },
  ],
};
