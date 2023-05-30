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
import subCategory from "./objects/subCategory";
import typeCategory from "./objects/typeCategory";
import priceBySize from "./objects/priceBySize";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restaurant,
    menuCategory,
    dish,
    homePage,
    aboutPage,
    meta,
    address,
    hours,
    menuFile,
    subCategory,
    typeCategory,
    priceBySize,
  ]),
});