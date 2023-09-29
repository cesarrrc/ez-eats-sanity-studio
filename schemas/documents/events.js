import meta from "../objects/meta";

export default {
  name: "events",
  type: "document",
  title: "Events",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
  ],
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
      //   group: "event_details",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Event Date",
      name: "event_date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        // timeStep: 15,
        // What does this do?
        // calendarTodayLabel: "Today",
      },
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
      title: "Event Address",
      name: "event_address",
      type: "address",
      //   group: "event_details",
    },
    {
      title: "Venue Website?",
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
