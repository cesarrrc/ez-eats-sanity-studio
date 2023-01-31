export default {
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
      description: "Comma separated Keywords. Ex: 'kolache, tacos, san marcos'",
    },
  ],
};
