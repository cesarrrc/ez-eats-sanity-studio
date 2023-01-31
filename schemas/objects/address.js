export default {
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
};
