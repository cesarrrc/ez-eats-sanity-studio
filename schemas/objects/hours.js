export default {
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
      description: "Ex: Monday |or| Ex: Monday - Thursday |or| Ex: Fri - Sat",
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
};
