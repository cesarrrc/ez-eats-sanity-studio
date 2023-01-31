import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import restaurant from "./documents/restaurant";
import dish from "./documents/dish";
import menuCategory from "./documents/menuCategory";
import meta from "./objects/meta";
import address from "./objects/address";
import hours from "./objects/hours";
import homePage from "./documents/homePage";
import aboutPage from "./documents/aboutPage";
import menuFile from "./objects/menuFile";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    
    // documents
    restaurant,
    menuCategory,
    dish,
    homePage,
    aboutPage,

    // objects
    meta,
    address,
    hours,
    menuFile,
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
