export default {
  name: "price_by_size_object",
  title: "Price by Size",
  type: "object",
  fields: [
    {
      type: "string",
      name: "size",
      options: {
        list: [
          { title: "Small", value: "Small" },
          { title: "Medium", value: "Medium" },
          { title: "Large", value: "Large" },
        ],
      },
    },
    { type: "number", name: "amount" },
  ],
  preview: {
    select: {
      title: "size",
      subtitle: "amount",
    },
  },
};
